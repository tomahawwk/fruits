import { useEffect, useState, FC } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getAnimationSelector } from '../redux/animation/selectors';

import { Page } from '../components/blocks';

import { Title, Content } from '../components/elements';
import { zoomIn, scaleYOut } from '../components/helpers/Animations';

interface StyledProps {
    delay?: boolean;
}

const StyledProduct = styled(Page)`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.grey2};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const StyledProductImage = styled.div<StyledProps>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
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
        animation: ${scaleYOut} 1.6s ${props => props.theme.transition.timing} forwards;
        animation-delay: ${props => props.delay ? '1.2s' : '0s'};
        transform-origin: bottom;
        z-index: 1;
    }
`

const StyledProductStock = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.04em;
    display: flex;
    grid-gap: 10px;
    &:before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: ${props => props.theme.colors.green};
    }
`

const StyledProductContent = styled(Content)`
    padding-top: 16vh;
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
`

const Product: FC = () => {
    const {appearAnimate} = useSelector(getAnimationSelector);
    const [delay, setDelay] = useState<boolean>(false);
    const [product, setProduct] = useState<{
        title: string;
        desktopImage: string;
        id: string;
        detailImage: string;
    }>();

    useEffect(() => {
        appearAnimate && setDelay(true);
    }, [appearAnimate])

    const { id } = useParams();

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
        return <StyledProduct>Loading...</StyledProduct>
    }

    return (
        <StyledProduct withoutFooter={true}>
            <StyledProductImage delay={delay}>
                <img src={product.detailImage} alt={product.title}/>
            </StyledProductImage>
            <StyledProductContent>
                <StyledProductStock>In stock</StyledProductStock>
                <Title>{product.title}</Title>
            </StyledProductContent>
        </StyledProduct>
    )
    
}

export default Product;