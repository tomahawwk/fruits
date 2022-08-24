import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getAnimationSelector } from '../redux/animation/selectors';

import { Page, PageHead, Section } from '../components/blocks';
import { Content, Title } from '../components/elements';

const ArticlesSection = styled(Section)`
    z-index: 1;
    @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
        min-height: 30vh;
        padding-top: 60px;
    }
`

const Articles = () => {
    const {appearAnimate} = useSelector(getAnimationSelector);
    const [delay, setDelay] = useState<boolean>(false);
    
    useEffect(() => {
        appearAnimate && setDelay(true);
    }, [appearAnimate])

    return (
        <Page>
            <PageHead
                title="Articles"
                subtitle="about us"
                back={{ name: "Catalog", url: "/catalog" }}
                next={{ name: "Home", url: "/" }}
                background="./images/mobile-backgrounds/1.jpg"
                delay={delay}
            />
            <ArticlesSection grey>
                <Content>
                    <Title>Coming soon :)</Title>
                </Content>
            </ArticlesSection>
        </Page>
    )
}

export default Articles;