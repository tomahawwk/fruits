import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components'

export default styled(Link)`
  text-decoration: none;
  position: relative;
  //Primary link
  ${props => props.primary && css`
    color: ${props => props.color || props.theme.colors.light};
  `}

  // Plus link
  ${props => props.plus && css`
    color: ${props => props.color || props.theme.colors.light};
  `}

  //Arrow link
  ${props => props.arrow && css`
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.function};
    svg {
      will-change: transform;
      width: 30px;
      height: 30px;
      transition-duration: inherit;
      transition-timing-function: inherit;
      fill: ${props => props.theme.colors.grey5};
    }
    &:hover {
      transform: scale(.9);
      svg {
        fill: white;
      }
    }
  `}

  // Icon link
  ${props => props.icon && css`
        width: ${props => props.width || "15px"};
        height: ${props => props.height || "15px"};
        display: block;
        svg{
            transition-duration: ${props => props.theme.transition.duration};;
            width: 100%;
            height: 100%;
            fill: ${props => props.theme.colors.light};
        }
    `}
`;
