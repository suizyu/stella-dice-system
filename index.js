const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log("ready...");
});

client.on('message',message => {
  if (message.author.bot) {
    return;
  }

  let channel = message.channel;
  let author = message.author.username;

  //メンションする返信
  if (message.content.match(/おはよ/)) {
    let repy_text = `おはようございます、${author}さん。`;
    message.reply(repy_text)
      .then(meg => console.log(`Sent message ${repy_text}`))
      .catch(console.error);
    return;
  }

  //メンションは行われない返信
  if (message.content.match(/^そんな/)) {
      message.channel.send("そんな！");
  }

  if (message.content.match(/discord.gg/)) {
      message.delete(100);
  }
});

client.login(process.env.BOT_TOKEN);