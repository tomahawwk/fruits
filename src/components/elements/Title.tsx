import styled, { css } from 'styled-components';
import { fluidRange } from 'polished';

interface Props {
  size?: string;
  t1?: boolean;
  t2?: boolean;
}

export default styled.div<Props>`
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || props.theme.colors.light};
  text-transform: uppercase;
  letter-spacing: 0.07em;
  ${(props) =>
    props.t1 &&
    css`
      ${(props) =>
        fluidRange(
          {
            prop: 'font-size',
            fromSize: `36px`,
            toSize: `64px`,
          },
          props.theme.screen.tablet,
          props.theme.screen.desktop,
        )}
      text-transform: initial;
      font-weight: 600;
    `}

  ${(props) =>
    props.t2 &&
    css`
      ${(props) =>
        fluidRange(
          {
            prop: 'font-size',
            fromSize: `28px`,
            toSize: `48px`,
          },
          props.theme.screen.tablet,
          props.theme.screen.desktop,
        )}
      text-transform: initial;
      font-weight: 600;
    `}
`;
