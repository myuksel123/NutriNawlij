import React from "react";
import Axios from "axios";
import {useState,useEffect} from 'react';

function Catalog(props){
    console.log(props);
    const [data, setData] = useState({});
    useEffect(()=>{
    fetch("/catalog").then(
        res=>res.json())
        .then(data=>setData(data));
    },[]);
    console.log(data);
    return(
        <div>

        </div>
    );
}
export default Catalog;