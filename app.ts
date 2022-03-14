import express from "express";

const App = express();

// for parsing body
App.use(express.urlencoded({ extended: true }));
// for parsing application/json
App.use(express.json());

export { App };
