import React  from 'react';
import {Table, Caption, THead, TBody, TableTr, TableTh, TableTd} from './styles'

export const Grid = ({title, data, fee}) => {
    
    return(
        <Table>
            <Caption>
                {title}
            </Caption>
            <THead>            
            <TableTr>
                <TableTh scope="col">Pair</TableTh>
                <TableTh scope="col">Rate</TableTh>
                <TableTh scope="col">Fee %</TableTh>
                <TableTh scope="col">Fee amount</TableTh>
                <TableTh scope="col">Total</TableTh>
            </TableTr>
            </THead>
            <TBody>        
                {
                    data.map(item => {
                        let feeAmount = ( item.rate * fee ) / 100
                        let total = item.rate + feeAmount

                        return(                    
                            <TableTr key={item.id}>
                                <TableTd data-label="pair">{item.pair}</TableTd>
                                <TableTd data-label="rate">{item.rate.toFixed(2)} </TableTd>
                                <TableTd scope="col" data-label="fee">{fee}</TableTd>
                                <TableTd scope="col" data-label="fee amount">{feeAmount.toFixed(4)}</TableTd>
                                <TableTd scope="col" data-label="total">{total.toFixed(4)}</TableTd>
                            </TableTr>
                        )
                    })           
                }   
            </TBody>
        </Table>
    )
}