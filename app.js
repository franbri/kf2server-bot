require('dotenv').config()
var spawn = require('child_process').spawn;
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    var prc = spawn('echo',  ['Fran']);
    prc.stdout.setEncoding('utf8');
    prc.stdout.on('data', async function (data) {
        var str = data.toString()
        var lines = str.split(/(\r?\n)/g);
        console.log(lines.join(""));
        await interaction.reply(lines.join(""));
    });
    
    prc.on('close', function (code) {
        console.log('process exit code ' + code);
    });
  }
});

client.login(process.env.TOKEN);



