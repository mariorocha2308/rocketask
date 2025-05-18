'use strict';

const router = require('express').Router();
const taskService = require("./taskService");
const { verifyToken } = require('../../helpers/verifyToken');

router.use(verifyToken)

/* GET max no: of strings. */
router.post('/', async function (req, res) {
    try {
        //refirect to service
        const response = await taskService.postDocument(req);
        res.send({ data: response });
    } catch (error) {
        res.status(error.status || 500).send({ errors: [ error ] });
    }
});

router.put('/:id', async function (req, res) {
    try {
        //refirect to service
        const response = await taskService.putDocumentById(req);
        res.send({ data: response });
    } catch (error) {
        res.status(error.status || 500).send({ errors: [ error ] });
    }
});

module.exports = router;
