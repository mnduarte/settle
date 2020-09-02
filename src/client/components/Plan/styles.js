import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-areas: "left right";
`
export const Caption = styled.div`  
    font-size: 1.5em;  
    grid-area: left;
`
export const SectorButtom = styled.div`    
    grid-area: right;
`