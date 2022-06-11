import React from "react"
import css from "./index.module.css"

const Durations = (props :any) => {

    const {onClickDuration} = props
    return(
        <>
        <div className={css.main}>
           <div className={css.container}>
            <div onClick={() => onClickDuration('24')}>24H</div>
            <div onClick={() => onClickDuration('7')}>1W</div>
            <div onClick={() => onClickDuration('1')}>1M</div>
           </div>
        </div>
        </>
    )
}

export default Durations