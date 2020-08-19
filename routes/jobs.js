
const express   = require('express');
const router    = express.Router();
const Job       = require('../models/Job');


//form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
})

//detalhe da vagas
router.get('/view/:id', (req, res) => Job.findOne({
    where: { id: req.params.id}
}).then(job => {

    res.render('view', {
        job
    });

}).catch(error => console.log(error)));

    

//add job via post request
router.post('/add', (req, res) => {
    
    let {title, salary, company, description, email, new_job} = req.body;


    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error));

});

module.exports = router