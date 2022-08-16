const path = require('path');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { Client } = require("pg");
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


let data;
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "admin",
  port: 5432,
});

client.connect();

const run = (string)=> new Promise((resolve, reject) =>{
  console.log(string);
  client.query(string, (err,res)=>{
    if(!err){
      data = res;
     //console.log(data);
     resolve(data);
    }
    else{
      console.log(err.message);
      reject(err);
    }
    client.end;
  })

  })

let string; 

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.post('/data', async function(req,res){
  string = `Select "Nutrients".name, "Nutrients".unit,
  food_nutrition.amount, food.description from public."Nutrients"
   INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
   INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
    WHERE "Nutrients"."name" = `;
  let count =0;
  
    if(req.body.vitA){
      string = string + `'Vitamin A, RAE' `;
      count ++;
    }
    if(req.body.vitB1){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'THIAMIN' `;
      count++;;
    }
    if(req.body.vitB2){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Riboflavin' `;
      count++;
    }
    if(req.body.vitB3){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Niacin' `;
      count++;
    }
    if(req.body.vitB5){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Pantothenic Acid' `;
      count++
    }
    if(req.body.vitB6){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Vitamin B-6' `;
      count++;
    }
    if(req.body.vitB7){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Biotin' `;
      count++;
    }
    if(req.body.vitB9){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Folate, Total' `;
      count++;
    }
    if(req.body.vitB12){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Vitamin B-12' `;
      count++;
    }
    if(req.body.vitC){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Vitamin C, total ascorbic acid' `;
      count++;
    }
    if(req.body.vitD){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Vitamin D (D2 + D3)' `;
      count++;
    }
    if(req.body.vitE){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Vitamin E' `;
      count++;
    }
    if(req.body.vitK){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Vitamin K (phylloquinone)' `;
      count++;
    }
    if(req.body.Calcium){
      if(count >0){
        string = string + 'OR "Nutrients"."name" = '
      }
      string = string + `'Calcium, Ca' `;
      count++;
    }

if(req.body.Phos){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Phosphorus, P' `;
  count++;
}

if(req.body.Phos){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Phosphorus, P' `;
  count++;
}
if(req.body.Mag){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Magnesium, Mg' `;
  count++;
}
if(req.body.Sod){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Sodium, Na' `;
  count++;
}
if(req.body.Chlo){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Chlorine, Cl' `;
  count++;
}
if(req.body.Chlo){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Chlorine, Cl' `;
  count++;
}
if(req.body.Pot){
  if(count >0){
    string = string + 'OR "Nutrients"."name" = '
  }
  string = string + `'Potassium, K' `;
  count++;
}
string = string + `AND food_nutrition.amount >0
Order by food_nutrition.amount desc`;

data = await run(string);
res.send(data);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

