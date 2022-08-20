const path = require("path");
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const { Client } = require("pg");
const {Pool} = require("pg");
//const pool = require("./db");

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.static(path.join(__dirname+'/client/build')));
/*if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.resolve('/home/meryem/repos/NutriNear2' +'/client/build')));
}*/

let data;

//const devConfig = `postgresql://postgres:admin
//@localhost:5432/food`;
const devConfig = ({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "admin",
  port: 5432,
});

const proConfig = `postgres://lxblmbdkotwtif:987d2473a75325f2a2ca714433f0b239f8ba41ae676d293cb565d77cb9d49b82@ec2-44-205-63-142.compute-1.amazonaws.com:5432/d3f2p1m8l1ubc0`;

const pool = new Pool({
  connectionString:
/* process.env.NODE_ENV === "production" ? */proConfig, //:devConfig,
ssl: true

}   );


/*
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "admin",
  port: 5432,
});
*/


/*const run = (string)=> new Promise((resolve, reject) =>{
  console.log(string);
  pool.query(string, (err,res)=>{
    if(!err){
      data = res;
     resolve(data);
    }
    else{
      console.log(err.message);
      reject(err);
    }
   //client.end;
  })

  })
*/
let string; 
console.log(__dirname);


app.post('/data', async function(req,res){
  console.log(req.body)
  string = `Select * from herofood
  WHERE `;
  let count =0;
  
    if(req.body.vitA){
      string = string +`"name" = `;
      string = string + `'Vitamin A, RAE' `;
      count ++;
    }
    if(req.body.vitB1){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Thiamin' `;
      count++;;
    }
    if(req.body.vitB2){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Riboflavin' `;
      count++;
    }
    if(req.body.vitB3){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Niacin' `;
      count++;
    }
    if(req.body.vitB5){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Pantothenic acid' `;
      count++
    }
    if(req.body.vitB6){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Vitamin B-6' `;
      count++;
    }
    if(req.body.vitB7){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Biotin' `;
      count++;
    }
    if(req.body.vitB9){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Folate, Total' `;
      count++;
    }
    if(req.body.vitB12){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Vitamin B-12' `;
      count++;
    }
    if(req.body.vitC){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Vitamin C, total ascorbic acid' `;
      count++;
    }
    if(req.body.vitD){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Vitamin D (D2 + D3)' `;
      count++;
    }
    if(req.body.vitE){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Vitamin E' `;
      count++;
    }
    if(req.body.vitK){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Vitamin K (phylloquinone)' `;
      count++;
    }
    if(req.body.Calcium){
      if(count >0){
        string = string + 'OR '
      }
      string = string +`"name" = `;
      string = string + `'Calcium, Ca' `;
      count++;
    }

if(req.body.Phos){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Phosphorus, P' `;
  count++;
}

if(req.body.Phos){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Phosphorus, P' `;
  count++;
}
if(req.body.Mag){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Magnesium, Mg' `;
  count++;
}
if(req.body.Sod){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Sodium, Na' `;
  count++;
}
if(req.body.Chlo){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Chlorine, Cl' `;
  count++;
}
if(req.body.Chlo){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Chlorine, Cl' `;
  count++;
}
if(req.body.Pot){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Potassium, K' `;
  count++;
}
if(req.body.Sul){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Sulfur, S' `;
  count++;
}
if(req.body.Ir){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Iron, Fe' `;
  count++;
}
if(req.body.Mang){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Manganese, Mn' `;
  count++;
}
if(req.body.Cop){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Copper, Cu' `;
  count++;
}
if(req.body.Zi){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Zinc, Zn' `;
  count++;
}
if(req.body.Io){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Iodine, I' `;
  count++;
}
if(req.body.Sel){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Selenium, Se' `;
  count++;
}
if(req.body.Protein){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Protein' `;
  count++;
}
if(req.body.Saturated){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Fatty acids, total saturated' `;
  count++;
}
if(req.body.MonoUnsaturated){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Fatty acids, total monounsaturated' `;
  count++;
}
if(req.body.PolyUnsaturated){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Fatty acids, total polyunsaturated' `;
  count++;
}
if(req.body.Starch){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Starch' `;
  count++;
}
if(req.body.Fiber){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Fiber, total dietary' `;
  count++;
}
if(req.body.Sugar){
  if(count >0){
    string = string + 'OR '
  }
  string = string +`"name" = `;
  string = string + `'Sugars, total including NLEA' `;
  count++;
}



if(count>0){
  string = string + `AND `;
}
string = string + `amount>0 ORDER BY numvitamins desc,theavg desc, description 
FETCH FIRST 5000 ROWS ONLY;`;
//data = await run(string);
try{
data = await pool.query(string);
}
catch(err){
  console.log(err);
}
res.send(data);

})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

