import React, { css } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate';

const StyledPagination = styled(ReactPaginate)`
    color: white;
    display: flex;
    grid-gap: 5px;
    list-style: none;
    margin-top: 35px;
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        margin-top: 20px;
    }
    .previous, .next{
        display: none;
    }

    a{
        width: 45px;
        height: 45px;
        display: flex;
        text-align: center;
        color: white;
        justify-content: center;
        align-items: center;
        ;
        letter-spacing: 0.04em;
        border: 1px solid rgba(255,255,255,.1);
        transition-duration: ${props => props.theme.transition.duration};;
        font-size: 12px;
        &:hover {
            border: 1px solid rgba(255,255,255,1);
        }
        @media (max-width: ${props => props.theme.screen.tabletMin}){
            width: 35px;
            height: 35px;
            font-size: 10px;
        }
    }
    
    li.selected{
        a{
            border: 1px solid rgba(255,255,255,1);
        }
    }
`


const Pagination = ({ onChangePage }) => {
    const { currentPage } = useSelector(state => state.filter);
    return (
        <StyledPagination
            breakLabel="..."
            onPageChange={e => onChangePage(e.selected + 1)}
            pageRangeDisplayed={10}
            pageCount={2}
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination;