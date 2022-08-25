import { useEffect, useState, FC } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { fluidRange } from 'polished'
import { useSelector, useDispatch } from 'react-redux';
import { getAnimationSelector } from '../redux/animation/selectors';
import { CartItem } from '../redux/cart/types';
import { addItem } from '../redux/cart/slice';

import { Page } from '../components/blocks';

import { Title, Content, Text, Price, Counter, Button, AnimatedWord, Picture } from '../components/elements';
import { zoomIn, ScaleYOut, FadeY, Scale } from '../components/helpers/Animations';

interface ProductProps {
    delay?: boolean;
    active?: boolean;
    onPlus?: () => void;
    onMinus?: () => void;
    count?: number;
}

const StyledProduct = styled(Page)`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.grey2};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        display: flex;
        flex-direction: column;
        height: auto;
        padding-bottom: 40px;
    }
`

const StyledProductImage = styled.div<ProductProps>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        height: 130px;
        &:after{
            background: linear-gradient(to top, #141416, rgba(0,0,0,.6));
            content: '';
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            opacity: 1;
            height: 100%;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: ${zoomIn} 1.6s ${props => props.theme.transition.timing} forwards;
        animation-delay: ${props => props.delay ? '1.2s' : '0s'};
    }
    &:before {
        background-color: ${props => props.theme.colors.grey3};
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        animation: ${ScaleYOut} 1.6s ${props => props.theme.transition.timing} forwards;
        animation-delay: ${props => props.delay ? '1.2s' : '0s'};
        transform-origin: bottom;
        z-index: 1;
        @media (max-width: ${(props) => props.theme.screen.tablet}) {
            display: none;
        }
    }
`

const StyledProductStock = styled.div<ProductProps>`
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.04em;
    display: flex;
    grid-gap: 10px;
    opacity: 0;
    animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.3s' : '.1s'};
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        font-size: 10px;
    }
    &:before {
        content: '';
        margin-top: 3px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${props => props.theme.colors.green};
        transform: scale(0);
        animation-delay: ${props => props.delay ? '1.5s' : '.3s'};
        animation: ${Scale} 1s ${props => props.theme.transition.timing} forwards;
        @media (max-width: ${(props) => props.theme.screen.tablet}) {
            width: 5px;
            height: 5px;
        }
    }
`

const StyledProductContent = styled(Content)`
    padding-top: 16vh;
    display: flex;
    flex-direction: column;
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        padding-top: 20px;
    }
`

const StyledProductTitle = styled(Title)<ProductProps>`
    margin-top: 30px;
    font-size: 36px;
    transform: translateY(-100%);
    opacity: 0;
    animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.4s' : '.2s'};
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        font-size: 24px;
        margin-top: 20px;
    }
`

const StyledProductDescription = styled(Text)<ProductProps>`
    font-size: 14px;
    margin-top: 15px;
    opacity: 0;
    animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.5s' : '.3s'};
    width: 80%;
    @media (max-width: ${(props) => props.theme.screen.desktopMin}) {
        width: 100%;
    }
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        font-size: 12px;
    }
`

const StyledProductPrice = styled.div<ProductProps>`
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    grid-gap: 20px;
    p {
        opacity: 0;
        animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
        &:first-child {
            animation-delay: ${props => props.delay ? '1.6s' : '.4s'};
            ${props => fluidRange({
                prop: 'font-size',
                fromSize: `24px`,
                toSize: `56px`,
                },
                props.theme.screen.tablet,
                props.theme.screen.desktop,
            )}
            font-weight: 300;
        }
        &:last-child {
            animation-delay: ${props => props.delay ? '1.7s' : '.5s'};
            ${props => fluidRange({
                prop: 'font-size',
                fromSize: `24px`,
                toSize: `36px`,
                },
                props.theme.screen.tablet,
                props.theme.screen.desktop,
            )}
            font-weight: 300;
            margin-bottom: 8px;
            @media (max-width: ${(props) => props.theme.screen.tablet}) {
                margin-bottom: 2px;
            }
        }
    }
`

const StyledProductLabel = styled(Text)<ProductProps>`
    opacity: 0;
    font-weight: 500;
    margin-top: 15px;
    font-size: 16px;
    animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.8s' : '.6s'};
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        font-size: 14px;
    }
`

const StyledProductFooter = styled.div<ProductProps>`
    display: flex;
    opacity: 0;
    margin-top: 30px;
    grid-gap: 15px;
    animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.9s' : '.7s'};
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        margin-top: 20px;
    }
    & > * {
        &:first-child {
            @media (max-width: ${(props) => props.theme.screen.tablet}) {
                display: none;
            }
        }
    }
`

const StyledProductButton = styled(Button)<ProductProps>`
    opacity: 0;
    animation: ${FadeY} 1s ${props => props.theme.transition.timing} forwards;
    animation-delay: ${props => props.delay ? '1.8s' : '.6s'};
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
        animation-delay: ${props => props.delay ? '1.7s' : '.5s'};
    }
`

const Product: FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [localCount, setLocalCount] = useState<number>(1);
    const {appearAnimate} = useSelector(getAnimationSelector);
    const [delay, setDelay] = useState<boolean>(false);
    const [product, setProduct] = useState<{
        title: string;
        desktopImage: string;
        id: string;
        detailImage: string;
        phoneImage: string;
        description: string;
        price: number;
        oldprice: number;
        count: number;
    }>();

    const onAddToCart = () => {
        if(product){
            product.count = localCount;
            const item: CartItem = product;
            dispatch(addItem(item));
        }
    }
    useEffect(() => {
        appearAnimate && setDelay(true);
    }, [appearAnimate])

    useEffect(() => {
        async function fetchProduct(){
            try {
                const { data } = await axios.get(`https://62bcc3246b1401736c008049.mockapi.io/items/${id}`);
                setProduct(data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [])
    
    if(!product){
        return <StyledProduct withoutFooter={true}/>
    }

    return (
        <StyledProduct withoutFooter={true}>
            <StyledProductImage delay={delay}>
                <Picture desktop={ product.detailImage } phone={ product.desktopImage } alt={ product.title } />
            </StyledProductImage>
            <StyledProductContent>
                <StyledProductStock delay={delay}>In stock</StyledProductStock>
                <StyledProductTitle delay={delay}>{ product.title }</StyledProductTitle>
                <StyledProductDescription delay={delay}>{ product.description }</StyledProductDescription>
                <StyledProductPrice delay={delay}>
                    <Price>{ product.price } €</Price>
                    <Price old>{ product.oldprice } €</Price>
                </StyledProductPrice>
                <StyledProductLabel uppercase={true} delay={delay}>Price for 1 pound</StyledProductLabel>
                <StyledProductFooter delay={delay}>
                    <Counter onPlus={() => setLocalCount(localCount + 1)} onMinus={() => setLocalCount(localCount - 1)} count={localCount} />
                    <StyledProductButton outlined={true} animated={true} onClick={onAddToCart} delay={delay}>
                        <AnimatedWord text={"ADD_TO_CART"} />
                    </StyledProductButton>
                </StyledProductFooter>
            </StyledProductContent>
        </StyledProduct>
    )
    
}

export default Product;