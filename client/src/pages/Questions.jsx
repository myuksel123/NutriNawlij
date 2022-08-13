import { render } from "react-dom";
import React, { useState } from 'react'
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

    const [vitB8,setVitB8] = useState(false);
    const [vitB8Color,setVitB8Color] = useState('gray');

    const [vitB9,setVitB9] = useState(false);
    const [vitB9Color,setVitB9Color] = useState('gray');

    const [vitB10,setVitB10] = useState(false);
    const [vitB10Color,setVitB10Color] = useState('gray');

    const [vitB11,setVitB11] = useState(false);
    const [vitB11Color,setVitB11Color] = useState('gray');

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
            <div class = "scale">
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
            <button >B7(biotin)</button>
            <button  >B9(folate)</button>
            <button >B12(cobalamin)</button>
            <button >C</button>
            <button >D</button>
            <button >E</button>
            <button >K</button>
            </div>
            <div class ="section">
            <h1>Minerals</h1>
            <button>Calcium</button>
            <button>Phosphorus</button>
            <button>Magnesium</button>
            <button>Sodium</button>
            <button>Chloride</button>
            <button>Potassium</button>
            <button>Sulfur</button>
            <button>Iron</button>
            <button>Manganese</button>
            <button>Copper</button>
            <button>Zinc</button>
            <button>Iodine</button>
            <button>Flouride</button>
            <button>Selenium</button>
            </div>
        </div>
    </div>
    <div id="restrictions">
        <h1>Do any of these apply to you?</h1>
        <button>Vegan</button>
        <button>Vegetarian</button>
        <button>Halal</button>
        <button>Kosher</button>
        <form action ="source.js" method = "post">
            <label  for="Allergies">Allergies:</label>
            <input type="text" id="allergies" name="allergies"></input>
        <button>Select</button>
            </form>
    </div>
    <div class = "footer">
    <a href ="catalog.html">
        <button>Next</button>
        </a>
    </div>
        </div>
    );
}
export default App;