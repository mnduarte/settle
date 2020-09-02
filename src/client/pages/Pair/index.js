import React from 'react';
import { SelectPlan } from '../../container/SelectPlan';
import { ListPair } from '../../container/ListPair';
import { Container, SectorPlan, SectorPair } from './styles'

export const Pair = () => (    
    <Container>
        <SectorPlan>
            <SelectPlan />
        </SectorPlan>
        <SectorPair>
            <ListPair />
        </SectorPair>
    </Container>
)