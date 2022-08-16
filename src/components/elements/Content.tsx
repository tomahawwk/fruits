import styled from 'styled-components'
import { fluidRange } from 'polished'

interface Props {
  grey?: boolean;
  bottom?: boolean;
  desktop?: boolean;
}

export default styled.div<Props>`
    ${props => fluidRange({
       prop: 'padding-left',
       fromSize: `${props.theme.unit.phone}px`,
       toSize: `${props.theme.unit.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}

    ${props => fluidRange({
       prop: 'padding-right',
       fromSize: `${props.theme.unit.phone}px`,
       toSize: `${props.theme.unit.desktop}px`,
     },
     props.theme.screen.phone,
     props.theme.screen.desktop,
    )}
    width: 100%;
`;