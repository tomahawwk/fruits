import styled, { css } from 'styled-components'
import React, { useContext, useEffect} from 'react';
import AppContext from '../../context';
import { gsap } from "gsap";
import Section from './Section';

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 12;
    pointer-events: none;
`

const StyledMenuOverlay = styled.svg`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: ${props => props.theme.colors.light};
`

const StyledMenuContent = styled(Section)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    transition-delay: 1s;
    z-index: 0;
    
    ${props => props.open && css`
        opacity: 1;
    `}
`

const Menu = (props) => {
    const { menuOpened } = useContext(AppContext);
    useEffect(() => {
        overlayAnimation(); 
    }, [menuOpened]);

    let isAnimating = false;
    const overlayAnimation = () => {
        if ( isAnimating ) return;
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
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
    }

    return (
        <StyledMenu>
            <StyledMenuOverlay
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path vector-effect="non-scaling-stroke" className="overlay__path" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
            </StyledMenuOverlay>
            <StyledMenuContent open={menuOpened} grain></StyledMenuContent>
        </StyledMenu>
    )
}

export default Menu;