const array[
    {
      "recipeName": "Croissant",
  “RecipeDesc": "coco and banana",
  "instructions": "melt coco and banana",
  "ingredients": [
     {
  "ingredientName":"coco",
  "measure":"bottle",
  "qty"100
    },
    {
  "ingredientName":"banana",
  "measure":"boll",
  "qty":200
     }
    ]
   },
    
    {
      "recipeName": "PASTE",
  “RecipeDesc": "coco and banana",
  "instructions": "melt coco and banana",
  "ingredients": [
     {
  "ingredientName":"coco",
  "measure":"bottle",
  "qty"100
    },
    {
  "ingredientName":"banana",
  "measure":"boll",
  "qty":200
     }
    ]
   }
  ]


  db.recipes.updateOne(
    { recipeName: "Croissant" },
    {
      $set: { "recipeName": "Croissant month"}
    }
 );
 
 db.recipes.find();
 










  
  