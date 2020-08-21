const express = require('express');
const router = express.Router();
const billingCycle = require("../models/BillingCycleSchema");

router.get("/", (req, res) => {
    res.status(404).json({Nome : "Guilherme Ferreira"});
});

router.post("/", (req, res) => {
    var result = billingCycle.create(req.body);
    res.status(201).json(result);
});

module.exports = router;