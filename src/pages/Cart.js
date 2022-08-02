import React from 'react';
import styled from 'styled-components';

import Page from '../components/blocks/Page';
import PageHead from '../components/blocks/PageHead';
import Section from '../components/blocks/Section';
import Basket from '../components/blocks/Basket';

import Content from '../components/elements/Content';

const StyledCart = styled(Page)`
    
`

const Cart = (props) => {
    return (
        <StyledCart>
            <PageHead
                title="Cart"
                subtitle="basket"
                back={{ name: "Catalog", url: "/catalog" }}
                next={{ name: "Home", url: "/" }}
            />
            <Section grey>
                <Content>
                    <Basket></Basket>
                </Content>
            </Section>
        </StyledCart>
    )
}

export default Cart;