'use strict';

const router = require('express').Router();
const userService = require("./userService");

/* GET max no: of strings. */
router.post('/auth', async function (req, res) {
    try {
        //refirect to service
        const response = await userService.auth(req);
        res.send({ data: response });
    } catch (error) {
        res.status(error.status || 500).send({ errors: [ error ] });
    }
});

module.exports = router;
