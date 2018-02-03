const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("ready" () => {
 console.log(`Logged in as ${client.user.name}`);
});

client.on("message", message => {
if(message.content.startsWith(config.prefix + "ping")) {
 message.reply("Pong!");
}
});

client.login(config.token);
