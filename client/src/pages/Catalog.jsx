import React from "react";
import {useState,useEffect} from 'react';

const Catalog = (props) =>{
    console.log(props);
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);
    useEffect(()=>{
    fetch("/catalog").then(
        res=>res.json())
        .then(data=>setData(data));
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