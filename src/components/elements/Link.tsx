import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface Props {
  primary?: number;
  icon?: number;
  plus?: boolean;
  arrow?: number;
  height?: number;
  color?: string;
  width?: number;
}

export default styled(Link)<Props>`
  text-decoration: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  //Primary link
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.theme.colors.light};
    `}

  // Plus link
  ${(props) =>
    props.plus &&
    css`
      color: ${(props) => props.theme.colors.light};
    `}

  //Arrow link
  ${(props) =>
    props.arrow &&
    css`
      transition-duration: ${(props) => props.theme.transition.duration};
      transition-timing-function: ${(props) => props.theme.transition.function};
      svg {
        will-change: transform;
        width: 30px;
        height: 30px;
        transition-duration: inherit;
        transition-timing-function: inherit;
        fill: ${(props) => props.theme.colors.grey5};
      }
      &:hover {
        transform: scale(0.9);
        svg {
          fill: white;
        }
      }
    `}

  // Icon link
  ${(p) =>
    p.icon &&
    css`
      width: 15px;
      height: 15px;
      display: block;
      svg {
        transition-duration: ${(props) => props.theme.transition.duration};
        width: 100%;
        height: 100%;
        fill: ${(props) => props.theme.colors.light};
      }
    `}
`;
