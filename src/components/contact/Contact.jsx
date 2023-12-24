import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/actions/dataActions"

export const Contact = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.data.message);
  useEffect(() => {
    dispatch(fetchData());
  },[dispatch])
  let display = "";
  if(typeof message === "object" && message !== null){
    display = JSON.stringify(message);
  }else{
    display = message;
  }
  return (
    <div>
      <h1>From React Redux Server</h1>
      <p>Message from the backend: {display}</p>
    </div>
  )
}