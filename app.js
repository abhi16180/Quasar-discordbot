require('dotenv').config(); //initialize dotenv

const { default: axios } = require('axios');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js'); //import discord.js


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});


client.on('messageCreate', async message => {
    let data = await getAPOD();
    let content = message.content;
    switch (content) {
        case "/quasar_help": message.reply('Hello there,this is quasar,type apod to get astronomy picture of the day!!'); break;
        case "apod": message.reply(data.url); break;
        default: break;
    }




})


async function getAPOD() {
    let resp = await axios.get(process.env.url)
    return resp.data;
}
//to login 
client.login(process.env.CLIENT_TOKEN); 