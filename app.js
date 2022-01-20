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
    let resp = await axios.get('https://api.nasa.gov/planetary/apod?api_key=tbPsHv73APCeifSzJOgY9igFFVpfUVjToit22uEV')
    return resp.data;
}
//to login 
client.login('OTMzNjcxNDAzOTY4OTM4MDA0.Yek7QQ.brW86mc8klB25BS6KEq_0g7UsQY'); 