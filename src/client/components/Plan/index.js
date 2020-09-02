import React from 'react'
import {Button, ButtonGroup } from '@material-ui/core/';
import {Container, Caption, SectorButtom} from './styles'

export const Plan = ({ onSubmit }) => {
  const handleChange = (e) => {
    onSubmit({
        val: e.currentTarget.getAttribute('value')
    })
  };

  return (
    <Container>
    <Caption>
      Select Fee
    </Caption>
    <SectorButtom>        
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group" onChange={handleChange}>
        <Button value="0.5" onClick={handleChange}>0,50%</Button>
        <Button value="0.3" onClick={handleChange}>0,30%</Button>
        <Button value="0.1" onClick={handleChange}>0,10%</Button>
      </ButtonGroup>
    </SectorButtom>
  </Container>
  )
};