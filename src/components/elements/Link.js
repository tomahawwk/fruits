import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components'

export default styled(Link)`
  text-decoration: none;
  
  //Primary link
  ${props => props.primary && css`
    color: ${props => props.color || props.theme.colors.light};
  `}

  ${props => props.plus && css`
    color: ${props => props.color || props.theme.colors.light};
  `}

  //Arrow link
  ${props => props.arrow && css`
    color: ${props => props.color || "red"};
  `}
`;
