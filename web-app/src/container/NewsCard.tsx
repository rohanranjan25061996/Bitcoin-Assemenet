import React from "react";
import css from "./index.module.css"


const NewsCard = (props : any) => {
    const {data} = props
    return(
        <>
        <h1 className={css.title}>Bitcoin Cash News</h1>
        <div className={css.new_main}>
            {data && data.map((item : any) => {
               return(
                <>
                <div className={css.card}>
                    <img src = {item.thumbnail} />
                    <h5>{item.title}</h5>
                    <span>3 days ago</span>
                </div>
                </>
               )
            } )}
        </div>
        </>
    )
}

export default NewsCard