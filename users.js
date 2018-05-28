const express = require('express');  
const router = express.Router(); 



router.put('/:name', (req,res, next) => { 
      res.send('Hey my name is Stéphane' + req.params.name);
})

router.delete('/:id(\\d+)',(req,res) => { 
res.send('Hey it\'s a DELETE ID ' + req.params.id);  
}); 
 

module.exports = router; 
