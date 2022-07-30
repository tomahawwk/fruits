import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import { fluidRange } from 'polished'

import Section from './Section';
import Content from '../elements/Content';
import Title from '../elements/Title';
import Text from '../elements/Text';

const StyledHero = styled.div`
    height: 100vh;
    position: relative;
`

const StyledHeroContainer = styled(Section)`
    padding: 0;
    height: 100%;
    .swiper {
        width: 100%;
        height: 100%;
        color: white;
        position: relative;
        z-index: 2;
    }

    .swiper-slide{
        opacity: 1!important;
    }

    .slide-title, .slide-description > div {
        overflow: hidden;
    }

    .slide-description{
        display: grid;
        grid-gap: 5px;
        color: ${props => props.theme.colors.grey5};
    }

    .slide-pagination > div, .slide-title > div, .slide-description p {
        transition-duration: ${props => props.theme.transition.duration};
        transition-timing-function: ${props => props.theme.transition.function};
        transform: translateY(-100%);
        transition-delay: 0s;
    }

    .swiper-slide-active {
        .slide-pagination > div, .slide-title > div, .slide-description p {
            transform: translateY(0);
        }

        .slide-image img {
            opacity: 1;
            transform: translateY(0);
            &:nth-child(1){
                transition-delay: .7s;
            }
            &:nth-child(2){
                transition-delay: .8s;
            }
            &:nth-child(3){
                transition-delay: .9s;
            }
        }

        .slide-pagination > div {
            transition-delay: .4s;
        }

        .slide-title > div {
            transition-delay: .5s;
        }

        .slide-description div{
            &:nth-child(1) p{
                transition-delay: .6s;
            }
            &:nth-child(2) p{
                transition-delay: .7s;
            }
            &:nth-child(3) p{
                transition-delay: .8s;
            }
        }
    }
`

const StyledSlider = styled(Swiper)`
    @media (max-width: ${props => props.theme.screen.desktop}){
        display: none;
    }
`

const StyledSlide = styled(Content)`
    height: 100%;
    width: 56%;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-right: 50px;
    
`

const StyledSlideContent = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 18px;
    height: 150px;
    align-self: center;
`

const StyledSlidePagination = styled.div`
    font-size: 14px;
    overflow: hidden;
    
    div {
        display: flex;
    }

    span{
        letter-spacing: 0.04em;
        &:first-child {
            color: ${props => props.theme.colors.grey5}; 
            &:after{
                margin: 0 3px;
                content: '/';
            }   
        }
    }
    ${props => props.active && css`
        opacity: 1;
    `}
`

const StyledSlideImage = styled(MouseParallaxContainer)`
    position: relative;
    width: 100%;
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    img{
        object-fit: contain;
        position: absolute;
        transform: translateY(-20px);
        transition-duration: .3s;
        transition-timing-function: ${props => props.theme.transition.function};
        opacity: 0;
        transition-delay: 0s;
    }
`

const StyledHeroTitle = styled(Content)`
    width: 44%;
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-gap: 20px;
    p {
        font-size: 14px;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    .title{
        position: relative;
        display: inline;
        p {
            font-size: 34px;
            margin-left: 10px;
        }
    }
    @media (max-width: ${props => props.theme.screen.desktop}){
        right: initial;
        width: 100%;
        ${props => fluidRange({
            prop: 'padding-left',
            fromSize: `${props.theme.unit.phone}px`,
            toSize: `${props.theme.unit.desktop}px`,
            },
            props.theme.screen.phone,
            props.theme.screen.desktop,
        )}
    }
`

const slides = [
    { 
        title: "Avocado",
        description: [
            "A healthy lifestyle that ",
            "includes nutritious food"
        ],
        image: [
            { src: "./images/slider/1-1.png", location: [23, 40], width: 60, height: 60, parallax: [0.008, 0.008] },
            { src: "./images/slider/1-2.png", location: [53, 15], width: 65, height: 32, parallax: [0.013, 0.013] },
            { src: "./images/slider/1-3.png", location: [30, 15], width: 15, height: 15, parallax: [0.004, 0.004] },
        ]
    },
    { 
        title: "Ripe mango",
        description: [
            "Ripe mangoes are juicy,",
            "fleshy, and delicious"
        ],
        image: [
            { src: "./images/slider/2-2.png", location: [36, 17], width: 25, height: 25, parallax: [0.006, 0.006] },
            { src: "./images/slider/2-1.png", location: [40, 15], width: 52, height: 52, parallax: [0.008, 0.008] },
            { src: "./images/slider/2-3.png", location: [30, 55], width: 28, height: 28, parallax: [0.012, 0.012] },
            { src: "./images/slider/2-4.png", location: [20, 45], width: 20, height: 20, parallax: [0.013, 0.013] },
        ]
    }
]

const Hero = (props) => {
    return (
        <StyledHero>
            <StyledHeroContainer grain>
                <StyledSlider
                    effect="fade"
                    slidesPerView={1}
                    speed="1500"
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade]}
                    >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <StyledSlide>
                                <StyledSlideContent>
                                    <StyledSlidePagination className='slide-pagination'>
                                        <div>
                                            <span>0{ index + 1 }</span>
                                            <span>0{ slides.length }</span>
                                        </div>
                                    </StyledSlidePagination>
                                    <div className='slide-title'>
                                        <Title>{ slide.title }</Title>
                                    </div>
                                    <div className='slide-description'>
                                        {slide.description.map((row, index) => (
                                        <div key={index}><p>{row}</p></div>
                                        ))}
                                    </div>
                                </StyledSlideContent>
                                <StyledSlideImage className='slide-image' useWindowMouseEvents={true}>
                                    {slide.image.map((image, index) => (
                                        <MouseParallaxChild factorX={image.parallax[0]} factorY={image.parallax[1]} key={index}>
                                            <img src={image.src} alt="" style={{ 
                                                top: `${image.location[0]}%`,
                                                left: `${image.location[1]}%`,
                                                width: `${image.width}%`,
                                                height: `${image.height}%`
                                            }}/>
                                        </MouseParallaxChild>
                                    ))}
                                </StyledSlideImage>
                            </StyledSlide>
                        </SwiperSlide>
                    ))}
                </StyledSlider>
                <StyledHeroTitle>
                    <Title t1 className="title">Fruit<Text yellowLabel >Premium</Text><br/>Delivery</Title>
                    <div>
                    <Text>React fruits offers convenient fresh produce</Text>
                    <Text>No grocery store shopping required!</Text>
                    </div>
                </StyledHeroTitle>
            </StyledHeroContainer>
        </StyledHero>
    )
}

export default Hero;
