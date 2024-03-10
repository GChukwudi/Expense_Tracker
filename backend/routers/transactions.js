const { addIncome } = require('../controllers/income');
const { getIncome } = require('../controllers/income');
const { deleteIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome)
        .get('/get-income', getIncome)
        .delete('/delete-income/:id', deleteIncome)


module.exports = router;