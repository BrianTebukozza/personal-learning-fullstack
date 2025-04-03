const express = require('express');
// import express from 'express';

const app = express();

app.get("/", (req,res) => {
    res.send
})

app.listen(3200, () => {
    console.log("Server started at http://localhost:3200");
});
