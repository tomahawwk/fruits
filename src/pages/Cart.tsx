import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getAnimationSelector } from '../redux/animation/selectors';

import { Page, PageHead, Section, Basket } from '../components/blocks';

import { Content } from '../components/elements';

const StyledCart = styled(Page)``

const Cart = () => {
    const {appearAnimate} = useSelector(getAnimationSelector);
    const [delay, setDelay] = useState<boolean>(false);

    useEffect(() => {
        appearAnimate && setDelay(true);
    }, [appearAnimate])

    return (
        <StyledCart>
            <PageHead
                title="Cart"
                subtitle="basket"
                back={{ name: "Catalog", url: "/catalog" }}
                next={{ name: "Home", url: "/" }}
                background="./images/mobile-backgrounds/2.jpg"
                delay={delay}
            />
            <Section grey>
                <Content>
                    <Basket delay={delay}/>
                </Content>
            </Section>
        </StyledCart>
    )
}

export default Cart;