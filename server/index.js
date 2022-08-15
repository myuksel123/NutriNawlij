const path = require('path');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { resolveSoa } = require('dns');
const { Client } = require("pg");
const { prependOnceListener } = require('process');


app.use(cors());
let VitaminA;
let VitaminB1;
let VitaminB2;
let VitaminB3;
let VitaminB5;
let VitaminB6;
let VitaminB7;
let VitaminB9;
let VitaminB12;
let VitaminC;
let VitaminD;
let VitaminE;
let VitaminK;
let Calcium;
let Phos;
let Mag;
let Sod;
let Chlo;
let Pot;
let Sul;
let Ir;
let Mang;
let Cop;
let Zi;
let Io;
let Flo;
let Sel;


async function run(){

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "food",
  password: "admin",
  port: 5432,
});

client.connect();

//Vitamin A Query
client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin A, RAE' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminA = res;
    //console.log(VitaminA);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

//Vitamin B1
client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Thiamin' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB1 = res;
   // console.log(VitaminB1);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Riboflavin' AND food_nutrition.amount >5
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB2 = res;
   // console.log(VitaminB2);
  }
  else{
    console.log(err.message);
  }
  client.end;
})


client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Niacin' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB3 = res;
   //console.log(VitaminB3);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Pantothenic acid' AND food_nutrition.amount >2
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB5 = res;
   //console.log(VitaminB5);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin B-6' AND food_nutrition.amount >1
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB6 = res;
   //console.log(VitaminB6);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Biotin' AND food_nutrition.amount >0
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB7 = res;
   //console.log(VitaminB7);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Folate, total' AND food_nutrition.amount >30
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB9 = res;
   //console.log(VitaminB9);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin B-12' AND food_nutrition.amount >5
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminB12 = res;
   //console.log(VitaminB12);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin C, total ascorbic acid' AND food_nutrition.amount >12
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminC = res;
   //console.log(VitaminC);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin D (D2 + D3)' AND food_nutrition.amount >1
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminD = res;
   //console.log(VitaminD);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin E' AND food_nutrition.amount >0
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminE = res;
   //console.log(VitaminE);
  }
  else{
    console.log(err.message);
  }
  client.end;
})


client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Vitamin K (phylloquinone)' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   VitaminK = res;
   //console.log(VitaminK);
  }
  else{
    console.log(err.message);
  }
  client.end;
})


client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Calcium, Ca' AND food_nutrition.amount >50
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   Calcium = res;
   //console.log(Calcium);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Phosphorus, P' AND food_nutrition.amount >50
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
   Phos = res;
   //console.log(Phos);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Magnesium, Mg' AND food_nutrition.amount >50
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Mag = res;
   //console.log(Mag);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Sodium, Na' AND food_nutrition.amount >50
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Sod = res;
   //console.log(Sod);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Chlorine, Cl' AND food_nutrition.amount >50
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Chlo = res;
   //console.log(Chlo);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Potassium, K' AND food_nutrition.amount >100
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Pot = res;
   //console.log(Pot);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Sulfur, S' AND food_nutrition.amount >0
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Sul = res;
   //console.log(Sul);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Iron, Fe' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Ir = res;
   //console.log(Ir);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Manganese, Mn' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Mang = res;
  // console.log(Mang);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Copper, Cu' AND food_nutrition.amount >1
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Cop = res;
   //console.log(Cop);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Zinc, Zn' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Zi = res;
  // console.log(Zi);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Iodine, I' AND food_nutrition.amount >0
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Io = res;
   //console.log(Io);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Fluoride, F' AND food_nutrition.amount >0
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Flo = res;
   //console.log(Flo);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

client.query(`Select "Nutrients".name, "Nutrients".unit,
food_nutrition.amount, food.description from public."Nutrients"
 INNER JOIN public.food_nutrition ON food_nutrition.nutrient_id = "Nutrients".id
 INNER JOIN public.food ON food.fdc_id = food_nutrition.fdc_id
  WHERE "Nutrients"."name" = 'Selenium, Se' AND food_nutrition.amount >10
  Order by food_nutrition.amount desc`, (err,res)=>{
  if(!err){
    Sel = res;
   //console.log(Sel);
  }
  else{
    console.log(err.message);
  }
  client.end;
})

}

run();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/catalog", (req,res)=>{
  res.send(obj);
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});