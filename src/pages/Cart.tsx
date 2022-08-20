import React from 'react';
import styled from 'styled-components';

import { Page, PageHead, Section, Basket } from '../components/blocks';

import { Content } from '../components/elements';

const StyledCart = styled(Page)``

const Cart = () => {
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