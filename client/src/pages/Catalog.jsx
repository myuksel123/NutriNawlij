import { checkPropTypes } from "prop-types";
import React from "react";
import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'

const Catalog = (props) =>{
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);
    const location = useLocation();
    console.log(props.location.state);
    useEffect(()=>{
        if(props.VitaminA){
    fetch("/VitaminA").then(
        res=>res.json())
        .then(data=>setData(data));
    }
    }, []);

    useEffect(()=>{
        if(props.VitaminB1){
    fetch("/VitaminB1").then(
        res=>res.json())
        .then(data=>setData(data));
    }
    }, []);

    for(let i=0; i<data.length; i++)
    results.push(data[i].name + `\n`);
    return(
        <div>
            {results}
        </div>
    );
}
export default Catalog;