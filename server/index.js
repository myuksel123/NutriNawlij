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



/*
Select avg(Pctrank) OVER (PARTITION BY public.foodinfo.description)
as theAvg, * from public.foodinfo
WHERE "name"='Calcium, Ca' AND amount>0 ORDER BY theAvg desc;
*/


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
  console.log(req.body)
  string = `Select AVG(Pctrank) OVER (PARTITION BY public.foodinfo.description)
  as theAvg, * from public.foodinfo
  WHERE "name"= `;
  let count =0;
  
    if(req.body.vitA){
      string = string + `'Vitamin A, RAE' `;
      count ++;
    }
    if(req.body.vitB1){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Thiamin' `;
      count++;;
    }
    if(req.body.vitB2){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Riboflavin' `;
      count++;
    }
    if(req.body.vitB3){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Niacin' `;
      count++;
    }
    if(req.body.vitB5){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Pantothenic acid' `;
      count++
    }
    if(req.body.vitB6){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Vitamin B-6' `;
      count++;
    }
    if(req.body.vitB7){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Biotin' `;
      count++;
    }
    if(req.body.vitB9){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Folate, Total' `;
      count++;
    }
    if(req.body.vitB12){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Vitamin B-12' `;
      count++;
    }
    if(req.body.vitC){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Vitamin C, total ascorbic acid' `;
      count++;
    }
    if(req.body.vitD){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Vitamin D (D2 + D3)' `;
      count++;
    }
    if(req.body.vitE){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Vitamin E' `;
      count++;
    }
    if(req.body.vitK){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Vitamin K (phylloquinone)' `;
      count++;
    }
    if(req.body.Calcium){
      if(count >0){
        string = string + 'OR "name" = '
      }
      string = string + `'Calcium, Ca' `;
      count++;
    }

if(req.body.Phos){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Phosphorus, P' `;
  count++;
}

if(req.body.Phos){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Phosphorus, P' `;
  count++;
}
if(req.body.Mag){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Magnesium, Mg' `;
  count++;
}
if(req.body.Sod){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Sodium, Na' `;
  count++;
}
if(req.body.Chlo){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Chlorine, Cl' `;
  count++;
}
if(req.body.Chlo){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Chlorine, Cl' `;
  count++;
}
if(req.body.Pot){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Potassium, K' `;
  count++;
}
if(req.body.Sul){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Sulfur, S' `;
  count++;
}
if(req.body.Ir){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Iron, Fe' `;
  count++;
}
if(req.body.Mang){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Manganese, Mn' `;
  count++;
}
if(req.body.Cop){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Copper, Cu' `;
  count++;
}
if(req.body.Zi){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Zinc, Zn' `;
  count++;
}
if(req.body.Io){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Iodine, I' `;
  count++;
}
if(req.body.Sel){
  if(count >0){
    string = string + 'OR "name" = '
  }
  string = string + `'Selenium, Se' `;
  count++;
}




string = string + `ORDER BY theAvg desc FETCH FIRST 5000 ROWS ONLY;`;

data = await run(string);
res.send(data);
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

