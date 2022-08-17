import React from "react";
import {useState,useEffect} from 'react';


const Catalog = (props) =>{

    //post data to SQL?
    const[data,setData] = useState([]);
    const[results,setResults]=useState([]);
    console.log(JSON.stringify(props.location.state))
    useEffect(()=>{
    fetch('/data',{
        method: 'post',

        body: JSON.stringify(props.location.state),

        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        }
    
    }).then(res=>res.json()).then(data=>setData(data));
    }, []);
    console.log(data);

 for(let i=0; i<data.length; i++){
    results.push(<div class ="options">{data[i].description} has {
       data[i].amount} {data[i].unit} {data[i].name}  per 100g</div>);
    }

    return(
        <div>
            {results}
        </div>
    );
}
export default Catalog;