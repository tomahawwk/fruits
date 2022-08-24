import styled from 'styled-components';
import { FadeYDown } from '../components/helpers/Animations'

import { Page, Hero, Section, CardGrid, Card } from '../components/blocks';
import { Content, Link, SectionHead, Title } from '../components/elements';
import { ArrowNextIcon } from '../components/elements/Icons';
import { Fruit } from '../redux/fruits/types';

import { OrderSteps } from '../components/blocks';

const StyledMain = styled(Page)`
    width: 100%;
`

const MainSectionHead = styled(SectionHead)`
    animation: ${FadeYDown} 1s ${props => props.theme.transition.function} forwards;
    opacity: 0;
    animation-delay: .5s;
    a {
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            display: none;
        }
    }
`

const Main = () => {
    const bestsellers = [
        {
            category: '1',
            description: "Tangerines are smaller and less rounded than common oranges. The taste is considered less sour, as well as sweeter and stronger, than that of an orange. A ripe tangerine is firm to slightly soft, and pebbly-skinned with no deep grooves, as well as orange in color. The peel is thin, with little bitter white mesocarp.",
            desktopImage: "images/cards/3.jpg",
            id: "5",
            index: 1,
            key: 5,
            oldprice: 52,
            phoneImage: "images/cards-mobile/3.png",
            price: 48,
            rating: 4,
            title: "Tangerine",
            quantity: 0,
            count: 0,
        },
        {
            category: '3',
            description: "A berry is a small, pulpy, and often edible fruit. Typically, berries are juicy, rounded, brightly colored, sweet, sour or tart, and do not have a stone or pit, although many pips or seeds may be present.",
            desktopImage: "images/cards/6.jpg",
            id: "6",
            index: 2,
            key: 6,
            oldprice: 37,
            phoneImage: "images/cards-mobile/6.png",
            price: 24,
            rating: 4,
            title: "Blackberrie",
            quantity: 0,
            count: 0,
        },
        {
            category: '1',
            description: "Apples are an incredibly nutritious fruit that offers multiple health benefits. They're rich in fiber and antioxidants. Eating them is linked to a lower risk of many chronic conditions, including diabetes, heart disease, and cancer. Apples may also promote weight loss and improve gut and brain health.",
            desktopImage: "images/cards/11.jpg",
            id: "11",
            index: 3,
            key: 11,
            oldprice: 55,
            phoneImage: "images/cards-mobile/11.png",
            price: 46,
            rating: 3,
            title: "Apple",
            quantity: 0,
            count: 0,
        },
        {
            category: '1',
            description: "Garnet derives from Old French grenat by metathesis, from Medieval Latin granatum as used in a different meaning 'of a dark red color'. This derivation may have originated from pomum granatum, describing the color of pomegranate pulp, or from granum, referring to 'red dye, cochineal'.",
            desktopImage: "images/cards/7.jpg",
            id: "8",
            index: 4,
            key: 8,
            oldprice: 64,
            phoneImage: "images/cards-mobile/7.png",
            price: 57,
            rating: 8,
            title: "Garnet",
            quantity: 0,
            count: 0,
        },
        {
            category: '2',
            description: "Coconut is the fruit of a tropical palm plant. It has a hard shell, edible white flesh and clear liquid, sometimes referred to as “water,” which is often used as a beverage. Coconut flesh or “meat” is aromatic, chewy in texture and rich in taste.",
            desktopImage: "images/cards/4.jpg",
            id: "3",
            index: 5,
            key: 3,
            oldprice: 84,
            phoneImage: "images/cards-mobile/4.png",
            price: 62,
            rating: 7,
            title: "Coconut",
            quantity: 0,
            count: 0,
        }
    ]

    return (
        <StyledMain>
            <Hero />
            <Section>
                <Content>
                    <MainSectionHead>
                        <Title t3={true}>Bestsellers</Title>
                        <Link to="/catalog" arrow={+true}>
                            <span>Go to catalog</span>
                            <ArrowNextIcon />
                        </Link>
                    </MainSectionHead>
                    <CardGrid>{ bestsellers.map((item: Fruit) => (<Card key={item.index} {...item} />)) }</CardGrid>
                </Content>
            </Section>
            <OrderSteps />
            {/* <Section>
                <Content>
                    <MainSectionHead>
                        <Title t3={true}>Articles</Title>
                        <Link to="/catalog" arrow={+true}>
                            <span>Go to articles</span>
                            <ArrowNextIcon />
                        </Link>
                    </MainSectionHead>
                </Content>
            </Section> */}
            
        </StyledMain>
    )
}

export default Main;