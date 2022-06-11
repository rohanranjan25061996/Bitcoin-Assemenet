import React, { useEffect } from "react"
import { shallowEqual } from "react-redux"
import {getData, getTimeData, getNewsData} from "../redux/actionType"
import {useAppDispatch, useAppSelector} from "../component/Hooks"
import * as helper from "../utils/helper"
import Chart from "./Chart"

const MainContainer = () => {
    const {loading, error, apiData, timeData, newsData} = useAppSelector((state : any) => state.bitcoin, shallowEqual)
    const dispatch = useAppDispatch()

    useEffect(() => {
       dispatch( getData() )
       dispatch( getNewsData() )
    }, [])

    const onClickDuration = (time : String) => {
        dispatch( getTimeData(time) )
    }

    return(
        <>
        {timeData.length > 0 && <Chart data = {helper.refineData(timeData)} onClickDuration = {onClickDuration} />}
        </>
    )
}

export default MainContainer