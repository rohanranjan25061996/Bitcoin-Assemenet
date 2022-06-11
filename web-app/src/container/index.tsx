import React, { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {getData} from "../redux/actionType"
import {useAppDispatch, useAppSelector} from "../component/Hooks"

const MainContainer = () => {
    const {loading, error, apiData} = useAppSelector((state : any) => state.bitcoin, shallowEqual)
    const dispatch = useAppDispatch()

    useEffect(() => {
       dispatch( getData() )
    }, [])

    useEffect(() => {
        if(apiData){
            console.log("======apiData=====", apiData)
        }
    }, [apiData])
    return(
        <>
        </>
    )
}

export default MainContainer