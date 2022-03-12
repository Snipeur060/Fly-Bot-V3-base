const aoijs = require("aoi.js")
require("dotenv").config();

const bot = new aoijs.Bot({
token: process.env.token, 
prefix: process.env.prefix,
intents: "all"
})
const voice = new aoijs.Voice(bot, {
  cache: {
    cacheType: "Memory",//Disk | None
    enabled: true,
  },
}); 
//Events
bot.onMessage()

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})


bot.status({
  text: "V3 FlyBot By Snipeur060",
  type: "PLAYING",
  status: "dnd",
  time: 12
})
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")
