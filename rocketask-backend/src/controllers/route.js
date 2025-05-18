'use strict';

const { Router } = require('express');
const userRoute = require('./users/userRouter');
const taskRoute = require('./tasks/taskRouter');
const router = Router();

const init = () => {
    router.use('/users', userRoute);
    router.use('/tasks', taskRoute);
    return router;
};

module.exports = {init};
