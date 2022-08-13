function App(){
    let vitaminA=false;
    function buttonClicked() {
        console.log('this happened');
        vitaminA= !vitaminA;
        const vitA = document.getElementById('VitaminA');
        if(vitaminA){
        vitA.style.background = 'red';
        }
        else{
            vitA.style.background='gray';
        }
        }
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
            <button onClick = {buttonClicked}id = "VitaminA">A</button>
            <button>B1(thiamine)</button>
            <button>B2(riboflavin)</button>
            <button>B3(niacin)</button>
            <button>B5(pantothenic acid)</button>
            <button>B6(pyridoxine)</button>
            <button>B7(biotin)</button>
            <button>B9(folate)</button>
            <button>B12(cobalamin)</button>
            <button>C</button>
            <button>D</button>
            <button>E</button>
            <button>K</button>
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