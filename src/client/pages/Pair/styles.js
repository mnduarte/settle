import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 0.3fr 1.5fr;
    grid-template-areas: "top"
                         "bot";
`
export const SectorPlan = styled.div`
    grid-area: top;
    display: flex;
    align-items: center;
`
export const SectorPair = styled.div`
    grid-area: bot;
`

