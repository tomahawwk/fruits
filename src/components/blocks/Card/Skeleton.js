import React from "react"
import styled from 'styled-components'
import ContentLoader from "react-content-loader"

const StyledContentLoader = styled(ContentLoader)`
    width: 100%;
    height: 43vh;
    opacity: .05;
`

const Skeleton = () => (
  <StyledContentLoader 
    speed={2}
    viewBox="0 0 160 217"
    backgroundColor="#F9F3DF"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="50%"/>
    <rect x="0" y="53%" rx="3" ry="3" width="100%" height="12%"/> 
    <rect x="40%" y="83%" rx="3" ry="3" width="60%" height="16%"/> 
    <rect x="0" y="83%" rx="3" ry="3" width="37%" height="16%"/> 
    <rect x="0" y="68%" rx="3" ry="3" width="100%" height="12%"/>
  </StyledContentLoader>
)

export default Skeleton;