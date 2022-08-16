import styled, {css} from 'styled-components'
import {FC, CSSProperties} from 'react'

const StyledAnimatedWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    div:first-child{
      span{
        transform: skewX(30deg) translateY(-100%);
      }
    }
    div:last-child{
      span{
        transform: skewX(0) translateY(-100%);
      }
    }
  }
`

const StyledAnimatedWordWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

interface WordPartProps {
  bottom?: boolean;
  top?: boolean;
}

const StyledAnimatedWordPart = styled.div<WordPartProps>`
  display: inline-flex;
  left: 0;
  grid-gap: 0.07em;
  ${props => props.bottom && css`
    position: absolute;
    left: 0;
    top: 100%;
  `}

  span{
    will-change: transform;
    transition: transform .5s cubic-bezier(.67,.01,.27,1);
  }
`

type Symbol = {
  text: string;
  style: CSSProperties;
}

interface Props {
  text: string;
}

const AnimatedWord: FC<Props> = ({ text }) => {
  const array: Symbol[] = [];

  Array.from(text).forEach((el, index) => {
    if(el === "_")
      el = "&nbsp;"

    array.push({
      text: el,
      style: {
        transitionDelay: `${0.025 * index}s`
      }
    })
  })

  return (
    <StyledAnimatedWord>
      <StyledAnimatedWordWrapper>
        <StyledAnimatedWordPart top>
          {array.map((symbol, index) => 
            <span key={`symbol-${index}`} style={symbol.style} dangerouslySetInnerHTML={{__html: symbol.text}}></span>     
          )}
        </StyledAnimatedWordPart>
        <StyledAnimatedWordPart bottom>
          {array.map((symbol, index) => 
            <span key={`symbol-${index}`} style={symbol.style} dangerouslySetInnerHTML={{__html: symbol.text}}></span>   
          )}
        </StyledAnimatedWordPart>
      </StyledAnimatedWordWrapper>
    </StyledAnimatedWord>
  )
}

export default AnimatedWord;