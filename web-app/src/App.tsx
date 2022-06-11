import React from 'react';
import './App.css';
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import MainContainer from "./container/index"

function App() {
  const {loading, error, apiData} = useSelector((state : any) => state.bitcoin, shallowEqual)
  // console.log("=============", loading, error, apiData )
  return (
    <>
    <MainContainer />
    </>
  );
}

export default App;
