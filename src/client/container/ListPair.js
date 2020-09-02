import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPairs } from '../store/Pair/action'
import { Grid } from '../components/Grid'
import { Loading } from '../components/Loading'

export const ListPair = () => {
    const {pairs, fee, loading, error} = useSelector(store => store.pairReducer)
    const dispatch = useDispatch();
    
    useEffect(function () {        
        dispatch(getPairs())
    }, [])

    return(
        <Fragment>        
            <Loading loading={loading} />
            {
                pairs.length > 0 && <Grid 
                                        title={'Pairs'}
                                        data={pairs}
                                        fee={fee}
                                    />           
            }
        </Fragment>
    )
}

