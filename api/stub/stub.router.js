const router = require('express').Router();
const controller = require('./stub.controller');

//Get Stubs
router.get('/', function(req, res){
    try {
        let reqParams = req;

        controller.getStub({} ,function (err, result) {
            if (err) {
                console.error('Error in GET of stub, ERROR::', err);
                res.status(400).send({error: 'Something went wrong, please try later..!'});
                return;
            }
            res.send(result);
            return;
        })
    } catch (err) {
        console.error('Unexpected error in GET of stub, ERROR::', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
        return;
    }
});

//Add new stub
router.post('/add-stub', (req, res) => {
    try {
        controller.addNewStub(req.body, (err, result) => {
            if(err){
                console.error('Error in adding stubs, and here is the error \n', err);
                res.status(400).send({error: 'Error in adding stubs'});
            }
            res.send(result);
        });
    } catch (err) {
        console.error('stubs.router: Some error in post request (/stubs/add-stub)', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    }
});

module.exports = router;