import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react'
import Catalog from './Catalog';

function App(){
    const [vitA,setVitA] = useState(false);
    const [vitAColor,setVitAColor] = useState('greenyellow');

    const [vitB1,setVitB1] = useState(false);
    const [vitB1Color,setVitB1Color] = useState('greenyellow');

    const [vitB2,setVitB2] = useState(false);
    const [vitB2Color,setVitB2Color] = useState('greenyellow');

    const [vitB3,setVitB3] = useState(false);
    const [vitB3Color,setVitB3Color] = useState('greenyellow');

    const [vitB5,setVitB5] = useState(false);
    const [vitB5Color,setVitB5Color] = useState('greenyellow');

    const [vitB6,setVitB6] = useState(false);
    const [vitB6Color,setVitB6Color] = useState('greenyellow');

    const [vitB7,setVitB7] = useState(false);
    const [vitB7Color,setVitB7Color] = useState('greenyellow');

    const [vitB9,setVitB9] = useState(false);
    const [vitB9Color,setVitB9Color] = useState('greenyellow');

    const [vitB12,setVitB12] = useState(false);
    const [vitB12Color,setVitB12Color] = useState('greenyellow');

    const [vitC,setVitC] = useState(false);
    const [vitCColor,setVitCColor] = useState('greenyellow');

    const [vitD,setVitD] = useState(false);
    const [vitDColor,setVitDColor] = useState('greenyellow');

    const [vitE,setVitE] = useState(false);
    const [vitEColor,setVitEColor] = useState('greenyellow');

    const [vitK,setVitK] = useState(false);
    const [vitKColor,setVitKColor] = useState('greenyellow');

    const [Calcium,setCalcium] = useState(false);
    const [CalciumColor,setCalciumColor] = useState('greenyellow');

    const [Phos,Phosset] = useState(false);
    const [PhosColor,setPhosColor] = useState('greenyellow');

    const [Mag,Magset] = useState(false);
    const [MagColor,setMagColor] = useState('greenyellow');

    const [Sod,Sodset] = useState(false);
    const [SodColor,setSodColor] = useState('greenyellow');

    const [Chlo,Chloset] = useState(false);
    const [ChloColor,setChloColor] = useState('greenyellow');

    const [Pot,Potset] = useState(false);
    const [PotColor,setPotColor] = useState('greenyellow');

    const [Sul,Sulset] = useState(false);
    const [SulColor,setSulColor] = useState('greenyellow');

    const [Ir,Ironset] = useState(false);
    const [IrColor,setIrColor] = useState('greenyellow');

    const [Mang,Mangset] = useState(false);
    const [MangColor,setMangColor] = useState('greenyellow');

    const [Cop,Copset] = useState(false);
    const [CopColor,setCopColor] = useState('greenyellow');

    const [Zi,Ziset] = useState(false);
    const [ZiColor,setZiColor] = useState('greenyellow');

    const [Io,Ioset] = useState(false);
    const [IoColor,setIoColor] = useState('greenyellow');

    const [Flo,Floset] = useState(false);
    const [FloColor,setFloColor] = useState('greenyellow');

    const [Sel,Selset] = useState(false);
    const [SelColor,setSelColor] = useState('greenyellow');

    const [Protein,setProtein] = useState(false);
    const [ProteinColor,setProteinColor] = useState('greenyellow');

    const [Saturated,setSaturated] = useState(false);
    const [SaturatedColor,setSaturatedColor] = useState('greenyellow');

    const [PolyUnsaturated,setPolyUnsaturated] = useState(false);
    const [PolyUnsaturatedColor,setPolyUnsaturatedColor] = useState('greenyellow');

    const [MonoUnsaturated,setMonoUnsaturated] = useState(false);
    const [MonoUnsaturatedColor,setMonoUnsaturatedColor] = useState('greenyellow');

    const [Starch,setStarch] = useState(false);
    const [StarchColor,setStarchColor] = useState('greenyellow');

    const [Sugar,setSugar] = useState(false);
    const [SugarColor,setSugarColor] = useState('greenyellow');

    const [Fiber,setFiber] = useState(false);
    const [FiberColor,setFiberColor] = useState('greenyellow');

    return(
        <div id = 'questionspage' class ="body">
            <div id = "macros">
    <div class = "header">Macros</div>
    <div class = "options">
        
        <div class = "macro">
            <h4>Fats</h4>
          <div class = "buttons">
            <button class = "button" onClick={() => {
        const bool = !PolyUnsaturated;
        setPolyUnsaturated(bool);
          bool ? setPolyUnsaturatedColor("lightcyan")  : setPolyUnsaturatedColor("greenyellow");
        }} 
         style={{ backgroundColor: PolyUnsaturatedColor}}>Poly-Unsaturated</button>

<button class = "button" onClick={() => {
        const bool = !MonoUnsaturated;
        setMonoUnsaturated(bool);
          bool ? setMonoUnsaturatedColor("lightcyan")  : setMonoUnsaturatedColor("greenyellow");
        }} 
         style={{ backgroundColor: MonoUnsaturatedColor}}>Mono-Unsaturated</button>

             <button class = "button" onClick={() => {
        const bool = !Saturated;
        setSaturated(bool);
          bool ? setSaturatedColor("lightcyan")  : setSaturatedColor("greenyellow");
        }} 
         style={{ backgroundColor: SaturatedColor }}>Saturated</button>

        </div>
        </div>


        <div class = "macro">
          <h4>Protein</h4>
          <div class = "buttons">
        <button class = "button" onClick={() => {
        const bool = !Protein;
        setProtein(bool);
          bool ? setProteinColor("lightcyan")  : setProteinColor("greenyellow");
        }} 
         style={{ backgroundColor: ProteinColor }}>Protein</button> 
        </div>
          </div>
          

        <div class = "macro">
          <h4>Carbohydrates</h4>
          <div class = "buttons">
             
           <button class = "button" onClick={() => {
        const bool = !Starch;
        setStarch(bool);
          bool ? setStarchColor("lightcyan")  : setStarchColor("greenyellow");
        }} 
         style={{ backgroundColor: StarchColor}}>Starches 
         (Complex Carohydrates)</button>
         
<button class = "button" onClick={() => {
        const bool = !Fiber;
        setFiber(bool);
          bool ? setFiberColor("lightcyan")  : setFiberColor("greenyellow");
        }} 
         style={{ backgroundColor: FiberColor }}>Fiber</button>

<button class = "button" onClick={() => {
        const bool = !Sugar;
        setSugar(bool);
          bool ? setSugarColor("lightcyan")  : setSugarColor("greenyellow");
        }} 
         style={{ backgroundColor: SugarColor }}>Sugar</button>
</div>
        </div>

    </div>
    </div>

    <div id="micros">
        <div className ="header">Micros</div>
        <div className = "choice">
            <div className ="section">
            <h1>Vitamins</h1>

            <button class = "button" onClick={() => {
        const bool = !vitA;
        setVitA(bool);
          bool ? setVitAColor("lightcyan")  : setVitAColor("greenyellow");
        }} 
         style={{ backgroundColor: vitAColor }}>A</button>

            <button class = "button"  onClick ={() => {
        const bool = !vitB1;
        setVitB1(!vitB1);
          bool ? setVitB1Color("lightcyan")  : setVitB1Color("greenyellow");   
        }} 
         style={{ backgroundColor: vitB1Color }} >B1(thiamine)</button>

            <button class = "button"  onClick ={() => {
        const bool = !vitB2;
        setVitB2(!vitB2);
          bool ? setVitB2Color("lightcyan")  : setVitB2Color("greenyellow");   
        }} 
         style={{ backgroundColor: vitB2Color }}>B2(riboflavin)</button>

            <button class = "button" onClick ={() => {
        const bool = !vitB3;
        setVitB3(!vitB3);
        bool ? setVitB3Color("lightcyan")  : setVitB3Color("greenyellow");   
        console.log(vitB3);
        }} 
         style={{ backgroundColor: vitB3Color }}>B3(niacin)</button>
            
            <button class = "button" onClick ={() => {
        const bool = !vitB5;
            setVitB5(!vitB5); 
          bool ? setVitB5Color("lightcyan")  : setVitB5Color("greenyellow");  
        }} 
         style={{ backgroundColor: vitB5Color }}>B5(pantothenic acid)</button>


            <button class = "button" onClick ={() => {
        const bool = !vitB6;
            setVitB6(!vitB6); 
          bool ? setVitB6Color("lightcyan")  : setVitB6Color("greenyellow");  
        }} 
         style={{ backgroundColor: vitB6Color }}>B6(pyridoxine)</button>

            <button class = "button" onClick ={() => {
        const bool = !vitB7;
            setVitB7(!vitB7); 
          bool ? setVitB7Color("lightcyan")  : setVitB7Color("greenyellow");  
        }} 
         style={{ backgroundColor: vitB7Color }} >B7(biotin)</button>

            <button class = "button" onClick ={() => {
        const bool = !vitB9;
            setVitB9(!vitB9); 
          bool ? setVitB9Color("lightcyan")  : setVitB9Color("greenyellow");  
        }} 
         style={{ backgroundColor: vitB9Color }} >B9(folate)</button>

            <button class = "button" onClick ={() => {
        const bool = !vitB12;
            setVitB12(!vitB12); 
          bool ? setVitB12Color("lightcyan")  : setVitB12Color("greenyellow");  
        }} 
         style={{ backgroundColor: vitB12Color }}>B12(cobalamin)</button>

            <button class = "button" onClick={() => {
        const bool = !vitC;
        setVitC(bool);
          bool ? setVitCColor("lightcyan")  : setVitCColor("greenyellow");
        }} 
         style={{ backgroundColor: vitCColor }} >C</button>
         
            <button class = "button" onClick={() => {
        const bool = !vitD;
        setVitD(bool);
          bool ? setVitDColor("lightcyan")  : setVitDColor("greenyellow");
        }} 
         style={{ backgroundColor: vitDColor }}  >D</button>

            <button class = "button" onClick={() => {
        const bool = !vitE;
        setVitE(bool);
          bool ? setVitEColor("lightcyan")  : setVitEColor("greenyellow");
        }} 
         style={{ backgroundColor: vitEColor }}>E</button>

            <button class = "button" onClick={() => {
        const bool = !vitK;
        setVitK(bool);
          bool ? setVitKColor("lightcyan")  : setVitKColor("greenyellow");
        }} 
         style={{ backgroundColor: vitKColor }}>K</button>
            </div>

            <div class ="section">
            <h1>Minerals</h1>

            <button class = "button" onClick={() => {
        const bool = !Calcium;
        setCalcium(bool);
          bool ? setCalciumColor("lightcyan")  : setCalciumColor("greenyellow");
        }} 
         style={{ backgroundColor: CalciumColor }}>Calcium</button>

            <button class = "button" onClick={() => {
        const bool = !Phos;
        Phosset(bool);
          bool ? setPhosColor("lightcyan")  : setPhosColor("greenyellow");
        }} 
         style={{ backgroundColor: PhosColor }}>Phosphorus</button>

            <button class = "button" onClick={() => {
        const bool = !Mag;
        Magset(bool);
          bool ? setMagColor("lightcyan")  : setMagColor("greenyellow");
        }} 
         style={{ backgroundColor: MagColor }}>Magnesium</button>

            <button class = "button" onClick={() => {
        const bool = !Sod;
        Sodset(bool);
          bool ? setSodColor("lightcyan")  : setSodColor("greenyellow");
        }} 
         style={{ backgroundColor: SodColor }}>Sodium</button>

            <button class = "button" onClick={() => {
        const bool = !Chlo;
        Chloset(bool);
          bool ? setChloColor("lightcyan")  : setChloColor("greenyellow");
        }} 
         style={{ backgroundColor: ChloColor }}>Chloride</button>

            <button class = "button" onClick={() => {
        const bool = !Pot;
        Potset(bool);
          bool ? setPotColor("lightcyan")  : setPotColor("greenyellow");
        }} 
         style={{ backgroundColor: PotColor }}>Potassium</button>

            <button class = "button" onClick={() => {
        const bool = !Sul;
        Sulset(bool);
          bool ? setSulColor("lightcyan")  : setSulColor("greenyellow");
        }} 
         style={{ backgroundColor: SulColor }}>Sulfur</button>

            <button class = "button" onClick={() => {
        const bool = !Ir;
        Ironset(bool);
          bool ? setIrColor("lightcyan")  : setIrColor("greenyellow");
        }} 
         style={{ backgroundColor: IrColor }}>Iron</button>

            <button class = "button" onClick={() => {
        const bool = !Mang;
        Mangset(bool);
          bool ? setMangColor("lightcyan")  : setMangColor("greenyellow");
        }} 
         style={{ backgroundColor: MangColor }}>Manganese</button>

            <button class = "button" onClick={() => {
        const bool = !Cop;
        Copset(bool);
          bool ? setCopColor("lightcyan")  : setCopColor("greenyellow");
        }} 
         style={{ backgroundColor: CopColor }}>Copper</button>

            <button class = "button" onClick={() => {
        const bool = !Zi;
        Ziset(bool);
          bool ? setZiColor("lightcyan")  : setZiColor("greenyellow");
        }} 
         style={{ backgroundColor: ZiColor }}>Zinc</button>

            <button class = "button" onClick={() => {
        const bool = !Io;
        Ioset(bool);
          bool ? setIoColor("lightcyan")  : setIoColor("greenyellow");
        }} 
         style={{ backgroundColor: IoColor }}>Iodine</button>

            <button class = "button" onClick={() => {
        const bool = !Flo;
        Floset(bool);
          bool ? setFloColor("lightcyan")  : setFloColor("greenyellow");
        }} 
         style={{ backgroundColor: FloColor }}>Flouride</button>

            <button class = "button" onClick={() => {
        const bool = !Sel;
        Selset(bool);
          bool ? setSelColor("lightcyan")  : setSelColor("greenyellow");
        }} 
         style={{ backgroundColor: SelColor }}>Selenium</button>

            </div>

        </div>
    </div>
    <Link
     to={{
      pathname:"../catalog",
      state: {vitA,vitB1,vitB2,vitB3,vitB5,vitB6,vitB7,vitB9,
      vitB12,vitC,vitD,vitE,vitK,Calcium,Phos,Mag,Sod,Chlo,Pot,Sul,Ir,
    Mang,Cop,Zi,Io,Sel,Protein,MonoUnsaturated,Saturated,PolyUnsaturated,Starch,Fiber,Sugar},
     }}><button class = "next">
    To the Results!</button>
    </Link>
  
        </div>
    );
}
export default App;