const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('عليكم السلام');
  }
});

client.on('message', msg => {
  if (msg.content === 'يابن المتناكه') {
    msg.reply('اهو انت اللي ابن متناكه');
  }
});

client.on('message', msg => {
  if (msg.content === 'كسمك') {
    msg.reply('كسمك انت!');
  }
});


client.on('message', msg => {
  if (msg.content === 'اوووف احح') {
    msg.reply('حاطوو صححح');
  }
});

client.login('NDQzNjc4NDY1ODE2Nzg5MDEz.DdSFJQ.b1vS8G-aGYwVHQYR-tqs54zy32E');