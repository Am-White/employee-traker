const { resourceLimits } = require("worker_threads");
const mysql = require("mysql");
const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const cTable = require("console.table");

const db = require("./db");
const connection = require("./db/connection");