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
let countfood=0;
let previous = "";
let nutritiousinfo = [];
let nutritionamount =[];
let nutritionunit = [];
 for(let i=0; i<data.rowCount; i++){
    if(i ==0 || data.rows[i].description ==previous){
        nutritiousinfo.push(data.rows[i].name);
        nutritionamount.push(data.rows[i].amount);
        nutritionunit.push(data.rows[i].unit);
    }
    else{
    let string = `<div>` +previous+ `</div>`;
    let mydiv = document.createElement('div');
    for(let j=0; j<nutritiousinfo.length;j++){
        string = string + `<div>` +nutritiousinfo[j] +
        `: ` + nutritionamount[j] +` `+
        nutritionunit[j] + '</div>';
    }
    mydiv.innerHTML = string;
    mydiv.classList = "fooditem";
    document.getElementById('hello').appendChild(mydiv);
    nutritiousinfo=[];
    nutritionamount =[];
    nutritionunit =[];
    nutritiousinfo.push(data.rows[i].name);
    nutritionamount.push(data.rows[i].amount);
    nutritionunit.push(data.rows[i].unit);
    countfood++;
    }
    previous = data.rows[i].description;
}

    return(
        <div id='hello'>
            {results}
        </div>
    );
}
export default Catalog;