import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'
import Catalog from './Catalog';

function App(){
    const [vitA,setVitA] = useState(false);
    const [vitAColor,setVitAColor] = useState('gray');

    const [vitB1,setVitB1] = useState(false);
    const [vitB1Color,setVitB1Color] = useState('gray');

    const [vitB2,setVitB2] = useState(false);
    const [vitB2Color,setVitB2Color] = useState('gray');

    const [vitB3,setVitB3] = useState(false);
    const [vitB3Color,setVitB3Color] = useState('gray');

    const [vitB5,setVitB5] = useState(false);
    const [vitB5Color,setVitB5Color] = useState('gray');

    const [vitB6,setVitB6] = useState(false);
    const [vitB6Color,setVitB6Color] = useState('gray');

    const [vitB7,setVitB7] = useState(false);
    const [vitB7Color,setVitB7Color] = useState('gray');

    const [vitB9,setVitB9] = useState(false);
    const [vitB9Color,setVitB9Color] = useState('gray');

    const [vitB12,setVitB12] = useState(false);
    const [vitB12Color,setVitB12Color] = useState('gray');

    const [vitC,setVitC] = useState(false);
    const [vitCColor,setVitCColor] = useState('gray');

    const [vitD,setVitD] = useState(false);
    const [vitDColor,setVitDColor] = useState('gray');

    const [vitE,setVitE] = useState(false);
    const [vitEColor,setVitEColor] = useState('gray');

    const [vitK,setVitK] = useState(false);
    const [vitKColor,setVitKColor] = useState('gray');

    const [Calcium,setCalcium] = useState(false);
    const [CalciumColor,setCalciumColor] = useState('gray');

    const [Phos,Phosset] = useState(false);
    const [PhosColor,setPhosColor] = useState('gray');

    const [Mag,Magset] = useState(false);
    const [MagColor,setMagColor] = useState('gray');

    const [Sod,Sodset] = useState(false);
    const [SodColor,setSodColor] = useState('gray');

    const [Chlo,Chloset] = useState(false);
    const [ChloColor,setChloColor] = useState('gray');

    const [Pot,Potset] = useState(false);
    const [PotColor,setPotColor] = useState('gray');

    const [Sul,Sulset] = useState(false);
    const [SulColor,setSulColor] = useState('gray');

    const [Ir,Ironset] = useState(false);
    const [IrColor,setIrColor] = useState('gray');

    const [Mang,Mangset] = useState(false);
    const [MangColor,setMangColor] = useState('gray');

    const [Cop,Copset] = useState(false);
    const [CopColor,setCopColor] = useState('gray');

    const [Zi,Ziset] = useState(false);
    const [ZiColor,setZiColor] = useState('gray');

    const [Io,Ioset] = useState(false);
    const [IoColor,setIoColor] = useState('gray');

    const [Flo,Floset] = useState(false);
    const [FloColor,setFloColor] = useState('gray');

    const [Sel,Selset] = useState(false);
    const [SelColor,setSelColor] = useState('gray');

    const [Vegn,Vegnset] = useState(false);
    const [VegnColor,setVegnColor] = useState('gray');

    const [Vege,Vegeset] = useState(false);
    const [VegeColor,setVegeColor] = useState('gray');

    const [Hal,Halset] = useState(false);
    const [HalColor,setHalColor] = useState('gray');

    const [Kosh,Koshset] = useState(false);
    const [KoshColor,setKoshColor] = useState('gray');

  
    return(
        <div>
            <div id = "macros">
    <div class = "header">Macros</div>
    <div class = "options">
        <div class = "macro">
        <div class = "scale">
            How much protein?
            </div>  
        </div>

        <div class = "macro">
            How much of each fat?
            <div id = "scale">
                Unsaturated
            </div>
            <div class = "scale">
                Omega-3s
            </div>
            <div class = "scale">
                Saturated
            </div>
            <div class = "scale">
                Omega-6s
            </div>
        </div>

        <div class = "macro">
            How much of each Carb?
            <div class = "scale">
                Starches (Complex Carbohydrates)
            </div>
            <div class = "scale">
            </div>
        </div>

    </div>
    </div>

    <div id="micros">
        <div className ="header">Micros</div>
        <h2>Select the ones you want to get more of</h2>
        <div className = "choice">
            <div className ="section">
            <h1>Vitamins</h1>

            <button onClick={() => {
        const bool = !vitA;
        setVitA(bool);
          bool ? setVitAColor("red")  : setVitAColor("gray");
        }} 
         style={{ backgroundColor: vitAColor }}>A</button>

            <button onClick ={() => {
        const bool = !vitB1;
        setVitB1(!vitB1);
          bool ? setVitB1Color("red")  : setVitB1Color("gray");   
        }} 
         style={{ backgroundColor: vitB1Color }} >B1(thiamine)</button>

            <button  onClick ={() => {
        const bool = !vitB2;
        setVitB2(!vitB2);
          bool ? setVitB2Color("red")  : setVitB2Color("gray");   
        }} 
         style={{ backgroundColor: vitB2Color }}>B2(riboflavin)</button>

            <button  onClick ={() => {
        const bool = !vitB3;
        setVitB3(!vitB3);
        bool ? setVitB3Color("red")  : setVitB3Color("gray");   
        console.log(vitB3);
        }} 
         style={{ backgroundColor: vitB3Color }}>B3(niacin)</button>
            
            <button  onClick ={() => {
        const bool = !vitB5;
            setVitB5(!vitB5); 
          bool ? setVitB5Color("red")  : setVitB5Color("gray");  
        }} 
         style={{ backgroundColor: vitB5Color }}>B5(pantothenic acid)</button>


            <button onClick ={() => {
        const bool = !vitB6;
            setVitB6(!vitB6); 
          bool ? setVitB6Color("red")  : setVitB6Color("gray");  
        }} 
         style={{ backgroundColor: vitB6Color }}>B6(pyridoxine)</button>

            <button onClick ={() => {
        const bool = !vitB7;
            setVitB7(!vitB7); 
          bool ? setVitB7Color("red")  : setVitB7Color("gray");  
        }} 
         style={{ backgroundColor: vitB7Color }} >B7(biotin)</button>

            <button onClick ={() => {
        const bool = !vitB9;
            setVitB9(!vitB9); 
          bool ? setVitB9Color("red")  : setVitB9Color("gray");  
        }} 
         style={{ backgroundColor: vitB9Color }} >B9(folate)</button>

            <button onClick ={() => {
        const bool = !vitB12;
            setVitB12(!vitB12); 
          bool ? setVitB12Color("red")  : setVitB12Color("gray");  
        }} 
         style={{ backgroundColor: vitB12Color }}>B12(cobalamin)</button>

            <button onClick={() => {
        const bool = !vitC;
        setVitC(bool);
          bool ? setVitCColor("red")  : setVitCColor("gray");
        }} 
         style={{ backgroundColor: vitCColor }} >C</button>
         
            <button onClick={() => {
        const bool = !vitD;
        setVitD(bool);
          bool ? setVitDColor("red")  : setVitDColor("gray");
        }} 
         style={{ backgroundColor: vitDColor }}  >D</button>

            <button onClick={() => {
        const bool = !vitE;
        setVitE(bool);
          bool ? setVitEColor("red")  : setVitEColor("gray");
        }} 
         style={{ backgroundColor: vitEColor }}>E</button>

            <button onClick={() => {
        const bool = !vitK;
        setVitK(bool);
          bool ? setVitKColor("red")  : setVitKColor("gray");
        }} 
         style={{ backgroundColor: vitKColor }}>K</button>
            </div>

            <div class ="section">
            <h1>Minerals</h1>

            <button onClick={() => {
        const bool = !Calcium;
        setCalcium(bool);
          bool ? setCalciumColor("red")  : setCalciumColor("gray");
        }} 
         style={{ backgroundColor: CalciumColor }}>Calcium</button>

            <button onClick={() => {
        const bool = !Phos;
        Phosset(bool);
          bool ? setPhosColor("red")  : setPhosColor("gray");
        }} 
         style={{ backgroundColor: PhosColor }}>Phosphorus</button>

            <button onClick={() => {
        const bool = !Mag;
        Magset(bool);
          bool ? setMagColor("red")  : setMagColor("gray");
        }} 
         style={{ backgroundColor: MagColor }}>Magnesium</button>

            <button onClick={() => {
        const bool = !Sod;
        Sodset(bool);
          bool ? setSodColor("red")  : setSodColor("gray");
        }} 
         style={{ backgroundColor: SodColor }}>Sodium</button>

            <button  onClick={() => {
        const bool = !Chlo;
        Chloset(bool);
          bool ? setChloColor("red")  : setChloColor("gray");
        }} 
         style={{ backgroundColor: ChloColor }}>Chloride</button>

            <button onClick={() => {
        const bool = !Pot;
        Potset(bool);
          bool ? setPotColor("red")  : setPotColor("gray");
        }} 
         style={{ backgroundColor: PotColor }}>Potassium</button>

            <button onClick={() => {
        const bool = !Sul;
        Sulset(bool);
          bool ? setSulColor("red")  : setSulColor("gray");
        }} 
         style={{ backgroundColor: SulColor }}>Sulfur</button>

            <button onClick={() => {
        const bool = !Ir;
        Ironset(bool);
          bool ? setIrColor("red")  : setIrColor("gray");
        }} 
         style={{ backgroundColor: IrColor }}>Iron</button>

            <button onClick={() => {
        const bool = !Mang;
        Mangset(bool);
          bool ? setMangColor("red")  : setMangColor("gray");
        }} 
         style={{ backgroundColor: MangColor }}>Manganese</button>

            <button onClick={() => {
        const bool = !Cop;
        Copset(bool);
          bool ? setCopColor("red")  : setCopColor("gray");
        }} 
         style={{ backgroundColor: CopColor }}>Copper</button>

            <button onClick={() => {
        const bool = !Zi;
        Ziset(bool);
          bool ? setZiColor("red")  : setZiColor("gray");
        }} 
         style={{ backgroundColor: ZiColor }}>Zinc</button>

            <button onClick={() => {
        const bool = !Io;
        Ioset(bool);
          bool ? setIoColor("red")  : setIoColor("gray");
        }} 
         style={{ backgroundColor: IoColor }}>Iodine</button>

            <button onClick={() => {
        const bool = !Flo;
        Floset(bool);
          bool ? setFloColor("red")  : setFloColor("gray");
        }} 
         style={{ backgroundColor: FloColor }}>Flouride</button>

            <button onClick={() => {
        const bool = !Sel;
        Selset(bool);
          bool ? setSelColor("red")  : setSelColor("gray");
        }} 
         style={{ backgroundColor: SelColor }}>Selenium</button>

            </div>

        </div>
    </div>
    <div id="restrictions">
        <h1>Do any of these apply to you?</h1>

        <button onClick={() => {
        const bool = !Vegn;
        Vegnset(bool);
          bool ? setVegnColor("red")  : setVegnColor("gray");
        }} 
         style={{ backgroundColor: VegnColor }}>Vegan</button>

        <button onClick={() => {
        const bool = !Vege;
        Vegeset(bool);
          bool ? setVegeColor("red")  : setVegeColor("gray");
        }} 
         style={{ backgroundColor: VegeColor }}>Vegetarian</button>

        <button onClick={() => {
        const bool = !Hal;
        Halset(bool);
          bool ? setHalColor("red")  : setHalColor("gray");
        }} 
         style={{ backgroundColor: HalColor }}>Halal</button>

        <button onClick={() => {
        const bool = !Kosh;
        Koshset(bool);
          bool ? setKoshColor("red")  : setKoshColor("gray");
        }} 
         style={{ backgroundColor: KoshColor }}>Kosher</button>

        <form action ="source.js" method = "post">
            <label  for="Allergies">Allergies:</label>
            <input type="text" id="allergies" name="allergies"></input>
        <button>Select</button>
            </form>
    </div>
    <NavLink to="/catalog"><button>
    Next</button>
    </NavLink>
    <div id="Catalog">
    <Catalog id="Catalog" VitaminA = {vitA}/>
    </div>
        </div>
    );
}
export default App;