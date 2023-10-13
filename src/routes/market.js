const Router = require ('express');
const router = Router();

const supermarket =[
    {   
        "id": 1,
        "Store" : "jiomart",
        "miles" : 0.6,
    },
    {
        "id": 2,
        "Store" : "jio mart",
        "miles" : 2.6,
    },
    {
        "id": 3,
        "Store" : "India mart", 
        "miles" : 5.8,
    },
    {
        "id": 4,
        "Store" : "D mart",
        "miles" : 1.8,
    },
];


router.get("/market",(req,res) => {
    const {miles} = req.query;
    const parsedmiles = parseInt(miles);
    if (!isNaN(parsedmiles)){
        const filtered = supermarket.filter((s) => s.miles <= parsedmiles);
        res.send(filtered);
    }
    else
        res.send(supermarket);
});





module.exports = router;