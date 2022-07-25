import styled, { css } from 'styled-components'
import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../context';
import { gsap } from "gsap";

const StyledRouteAnimation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 13;
    pointer-events: none;
`

const StyledRouteAnimationOverlay = styled.svg`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    z-index: 1;
    fill: ${props => props.theme.colors.light};
    ${props => props.reverse && css`
        transform: rotate(0deg);
    `}
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        fill: ${props => props.theme.colors.yellow};
    }
`

const RouteAnimation = (props) => {
    const { routeAnimation, menuOpened } = useContext(AppContext);
    const [reverse, setReverse] = useState(true);
    const firstRenderRef = useRef(true);
    let isAnimating = false;

    useEffect(() => {
        if (menuOpened === firstRenderRef.current || routeAnimation === firstRenderRef.current)
            overlayAnimation(false);
            
        else if(routeAnimation === firstRenderRef.current)
            overlayAnimation(true);
        
    }, [routeAnimation, menuOpened, firstRenderRef])

    const overlayAnimation = (reverseFlag) => {
        if ( isAnimating ) return;
        console.log("ove")
        setReverse(reverseFlag);
        isAnimating = true;
        const overlayPath = document.querySelector('.overlay__path');
        
        gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
                //menuWrap.classList.add('menu-wrap--open');
            }
        })
        // // title elements
        // .to([title.main, title.sub], { 
        //     duration: 0.8,
        //     ease: 'power3.in',
        //     y: -200,
        //     stagger: 0.05
        // }, 0.2)
        .set(overlayPath, { 
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
            onComplete: () => {
                //menuWrap.classList.add('menu-wrap--open');
            }
        })
    }

    return (
        <StyledRouteAnimation>
            <StyledRouteAnimationOverlay
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                reverse={routeAnimation}
            >
                <path vectorEffect="non-scaling-stroke" className="overlay__path" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
            </StyledRouteAnimationOverlay>
        </StyledRouteAnimation>
    )
}

export default RouteAnimation;