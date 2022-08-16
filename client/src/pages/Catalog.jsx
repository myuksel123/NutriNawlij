import { checkPropTypes } from "prop-types";
import React from "react";
import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'


const Catalog = (props) =>{
    const [VitaminA, setVitaminA] = useState([]);
    const [VitaminB1, setVitaminB1] = useState([]);
    const [VitaminB2, setVitaminB2] = useState([]);
    const [VitaminB3, setVitaminB3] = useState([]);
    const [VitaminB5, setVitaminB5] = useState([]);
    const [VitaminB6, setVitaminB6] = useState([]);
    const [VitaminB7, setVitaminB7] = useState([]);
    const [VitaminB9, setVitaminB9] = useState([]);
    const [VitaminB12, setVitaminB12] = useState([]);
    const[Calcium,setCalcium]=useState([]);
    const[Phosphorus,setPhosporus]=useState([]);
    const [Magnesium,setMagnesium] = useState([]);
    const [Sod,Sodset] = useState([]);
    const [Chlo,Chloset] = useState([]);
    const [Pot,Potset] = useState([]);
    const [Sul,Sulset] = useState([]);
    const [Ir,Ironset] = useState([]);
    const [Mang,Mangset] = useState([]);
    const [Cop,Copset] = useState([]);
    const [Zi,Ziset] = useState([]);
    const [Io,Ioset] = useState([]);
    const [Flo,Floset] = useState([]);
    const [Sel,Selset] = useState([]);


    const[data,setData] = useState([]);
    const [results, setResults] = useState([]);
    //console.log(props.location.state);

    useEffect(()=>{
        if(props.location.state.vitA){
    fetch("/VitaminA").then(
        res=>res.json())
        .then(VitaminA=>setVitaminA(VitaminA));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.vitB1){
    fetch("/VitaminB1").then(
        res=>res.json())
        .then(VitaminB1=>setVitaminB1(VitaminB1));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.vitB2){
    fetch("/VitaminB2").then(
        res=>res.json())
        .then(VitaminB2=>setVitaminB2(VitaminB2));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.vitB3){
    fetch("/VitaminB3").then(
        res=>res.json())
        .then(VitaminB3=>setVitaminB3(VitaminB3));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.vitB5){
    fetch("/VitaminB5").then(
        res=>res.json())
        .then(VitaminB5=>setVitaminB5(VitaminB5));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.vitB6){
    fetch("/VitaminB6").then(
        res=>res.json())
        .then(VitaminB6=>setVitaminB6(VitaminB6));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.vitB7){
    fetch("/VitaminB7").then(
        res=>res.json())
        .then(VitaminB7=>setVitaminB7(VitaminB7));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.vitB9){
    fetch("/VitaminB9").then(
        res=>res.json())
        .then(VitaminB1=>setVitaminB9(VitaminB9));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.vitB12){
    fetch("/VitaminB12").then(
        res=>res.json())
        .then(VitaminB12=>setVitaminB12(VitaminB12));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Calcium){
    fetch("/Calcium").then(
        res=>res.json())
        .then(Calcium=>setCalcium(Calcium));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Phos){
    fetch("/Phosphorus").then(
        res=>res.json())
        .then(Phosphorus=>setPhosporus(Phosphorus));
    }
    }, []);


    useEffect(()=>{
        if(props.location.state.Mag){
    fetch("/Magnesium").then(
        res=>res.json())
        .then(Magnesium=>setMagnesium(Magnesium));
    }
    }, []);


    useEffect(()=>{
        if(props.location.state.Sod){
    fetch("/Sodium").then(
        res=>res.json())
        .then(Sod=>Sodset(Sod));
    }
    }  , []);


    useEffect(()=>{
        if(props.location.state.Chlo){
    fetch("/Chloride").then(
        res=>res.json())
        .then(Chlo =>Chloset(Chlo));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Pot){
    fetch("/Potassium").then(
        res=>res.json())
        .then(Pot =>Potset(Pot));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Sul){
    fetch("/Sulfur").then(
        res=>res.json())
        .then(Sul =>Sulset(Sul));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Ir){
    fetch("/Iron").then(
        res=>res.json())
        .then(Ir =>Ironset(Ir));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Mang){
    fetch("/Manganese").then(
        res=>res.json())
        .then(Mang =>Mangset(Mang));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.Cop){
    fetch("/Copper").then(
        res=>res.json())
        .then(Cop =>Copset(Cop));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.Zi){
    fetch("/Zinc").then(
        res=>res.json())
        .then(Zi =>Ziset(Zi));
    }
    }, []);
    
    useEffect(()=>{
        if(props.location.state.Io){
    fetch("/Iodine").then(
        res=>res.json())
        .then(Io =>Ioset(Io));
    }
    }, []);

    useEffect(()=>{
        if(props.location.state.Sel){
    fetch("/Selenium").then(
        res=>res.json())
        .then(Sel =>Selset(Sel));
    }
    }, []);

    if(props.location.state.vitA){
    for(let i =0; i<VitaminA.rowCount;i++){
        data.push({
            description: VitaminA.rows[i].description,
            amount: VitaminA.rows[i].amount,
            unit: VitaminA.rows[i].unit,
            name: "Vitamin A",
        })
    }
}

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