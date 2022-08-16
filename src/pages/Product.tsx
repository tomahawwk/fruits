import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import Page from '../components/blocks/Page';

import Title from '../components/elements/Title';
import Content from '../components/elements/Content';

const StyledProduct = styled(Page)`
    width: 100%;
    min-height: 100vh;
`

const Product: FC = (props) => {
    const [product, setProduct] = useState<{
        title: string;
        id: string;
    }>();
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
        return <div>Loading...</div>
    }

    return (
        <StyledProduct>
            <Content>
                <Title t1>{product.title}</Title>
            </Content>
        </StyledProduct>
    )
    
}

export default Product;