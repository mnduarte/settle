import React from 'react'
import { useDispatch } from 'react-redux'
import { setFee } from '../store/Pair/action'
import { Plan } from '../components/Plan'

export const SelectPlan = () => {
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        dispatch(setFee(e.val));
    }

    return(
        <Plan onSubmit={onSubmit}/>
    )
}

