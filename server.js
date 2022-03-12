const Aoijs = require("aoi.js")
const TOKEN = process.env.token;
require("dotenv").config();

const bot = new Aoijs.Bot({
token: process.env.token, 
prefix: process.env.prefix 
})
bot.status({
  text: "Bot dev By Snipeur060",
  type: "PLAYING",
  status: "dnd",
  time: 12
})


bot.loadCommands('./command/')


