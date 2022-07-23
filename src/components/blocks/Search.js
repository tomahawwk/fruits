import styled from 'styled-components'

const StyledSearch = styled.button`
    
`

const Search = ({ value, setValue }) => {
    return (
        <StyledSearch>
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search fruit" />
        </StyledSearch>
    )
}

export default Search;