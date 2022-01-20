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
    let title = `**${data.title}**\n`;
    let explanation = `*${data.explanation}*\n`;
    let imageURL = `*url* : ${data.url} \n`;
    let copyright = `**copyright** : ${data.copyright}\n`;
    switch (content) {
        case ".quasar": message.reply('Hello there,this is quasar!\n*Send*\n **.title**\nto get title\n**.url**\nto get image\n**.expln**\nto get explanation\n**.cpyrt**\nto get copyright details\n**.apod**\nto get all details\n'); break;
        case ".url": message.reply(imageURL); break;
        case ".title": message.reply(title); break;
        case ".expln": message.reply(explanation); break;
        case ".cpyrt": message.reply(copyright); break;
        case ".apod": message.reply(title + explanation + copyright + imageURL); break;
        default: break;
    }




})


async function getAPOD() {
    let resp = await axios.get('https://api.nasa.gov/planetary/apod?api_key=tbPsHv73APCeifSzJOgY9igFFVpfUVjToit22uEV')
    return resp.data;

}
//to login 
client.login(process.env.CLIENT_TOKEN || process.env.discord_token); 