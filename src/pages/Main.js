import styled from 'styled-components'

import CardGrid from '../components/blocks/CardGrid';
import Card from '../components/blocks/Card';
import Section from '../components/blocks/Section';
import Categories from '../components/blocks/Categories';

import Content from '../components/elements/Content';

const StyledMain = styled(Section)`
    width: 100%;
`

const Main = (props) => {
    console.log(props.items)
    return (
        <StyledMain hero grey>
            <Content>
                <Categories />
                <CardGrid>
                    {props.items.map(item => ( 
                        <Card key={item.key} {...item} />
                    ))}
                </CardGrid>
            </Content>
        </StyledMain>
    )
}

export default Main;
