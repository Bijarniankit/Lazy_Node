const Router = require('express');
const router = Router();
                                      
let grocery_list = [
  {   "item":"milk",
        "quantity":2
    },
  {
        "item":"cereal",
        "quantity":1
    },
  {
        "item":"pop-tarts",
        "quantity":1
    },
];



router.get('/grocery', (req,res) =>{
    // res.cookie('visited', true, {  // didnt  understand ths part
    //     maxAge: 10000,
    // });
    res.json(grocery_list);
});

router.get("/grocery/:item",(req,res) =>{
        const { item } =req.params;
        const grocery_item = grocery_list.find((g) => g.item === item); 
        res.send(grocery_item)
        
        // this is more  of a rookie way to show a specific item but it 
        // can only be used to show an item by using index value
        // if(index>=0 && index <=grocery_list.length)
        //    {  res.json(grocery_list[index-1]);
        //    }
        //  else{
        //     req.send("item not found");
        //  }  

});

router.post('/grocery', (req,res)=>{
    console.log(req.body);
    grocery_list.push(req.body);
    res.json(grocery_list);
});

router.put('/grocery', (req,res)=>{
    grocery_list=[];
    grocery_list.push(req.body);
    
    res.json(grocery_list);
});



router.delete("/grocery/:id",(req,res) =>{
    const index =parseInt(req.params.id);
    if(index>=0 && index <=grocery_list.length)
       {  grocery_list.splice(index-1,1);
        res.json("Updated grocery list:",grocery_list)
       }
     else{
        res.send("item not found");
     }  

});router.delete("/grocery",(req,res) => {
    grocery_list=[];
    res.json(grocery_list)
});




module.exports = router;