import styled, { css } from 'styled-components';

interface Props {
  size?: string;
  clamp?: string;
  uppercase?: boolean;
  yellowLabel?: boolean;
  height?: number;
}

export default styled.p<Props>`
  font-size: ${(props) => props.size || '11px'};
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  line-height: 1.7;
  display: inline-block;
  ${(props) =>
    props.clamp &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: ${props.clamp};
    `}
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
      font-size: 9px;
      font-weight: 600;
      white-space: nowrap;
    `}

  ${(props) =>
    props.yellowLabel &&
    css`
      color: ${props.theme.colors.yellow};
      font-family: ${props.theme.fonts.secondary};
    `}
  @media (max-width: ${(props) => props.theme.screen.tabletMin}) {
    font-size: ${(props) => props.size || '9px'};
  }
`;
