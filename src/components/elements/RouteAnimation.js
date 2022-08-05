import styled, { css } from 'styled-components'
import React, { useEffect, useRef } from 'react';
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
    fill: ${props => props.theme.colors.grey5};
    ${props => props.reverse && css`
        transform: rotate(0deg);
    `}
`

const RouteAnimation = ({ animation, menuOpened }) => {
    const firstRenderRef = useRef(true);
    const overlayPath = useRef();
    let isAnimating = false;

    useEffect(() => {
        if (menuOpened === firstRenderRef.current || animation === firstRenderRef.current)
            overlayAnimation(false);
            
        else if(animation === firstRenderRef.current)
            overlayAnimation(true);
        
    }, [animation, menuOpened, firstRenderRef])

    const overlayAnimation = () => {
        if ( isAnimating ) return;
        isAnimating = true;
        
        gsap.timeline({
            onComplete: () => isAnimating = false
        })
        .set(overlayPath.current, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(overlayPath.current, { 
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        }, 0)
        .to(overlayPath.current, { 
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
        })

        .set(overlayPath.current, { 
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        })
        .to(overlayPath.current, { 
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(overlayPath.current, { 
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
        })
    }

    return (
        <StyledRouteAnimation>
            <StyledRouteAnimationOverlay
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                reverse={animation}
            >
                <path vectorEffect="non-scaling-stroke" ref={overlayPath} d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
            </StyledRouteAnimationOverlay>
        </StyledRouteAnimation>
    )
}

export default RouteAnimation;