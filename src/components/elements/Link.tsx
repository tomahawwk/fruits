import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface Props {
  primary?: number;
  icon?: number;
  plus?: boolean;
  arrow?: number;
  arrowicon?: number;
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

  //ArrowIcon link
  ${(props) =>
    props.arrowicon &&
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
  ${(props) =>
    props.arrow &&
    css`
      text-transform: uppercase;
      color: white;
      display: flex;
      white-space: nowrap;
      align-items: center;
      grid-gap: 15px;
      font-size: 12px;
      letter-spacing: 0.12em;
      transition-duration: ${(props) => props.theme.transition.duration};
      transition-timing-function: ${(props) => props.theme.transition.function};
      svg {
        will-change: transform;
        width: 32px;
        height: 32px;
        transition-duration: inherit;
        transition-timing-function: inherit;
        fill: white;
      }
      &:hover {
        svg{
          transform: translateX(5px);
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
