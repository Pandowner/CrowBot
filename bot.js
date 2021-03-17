const { MessageEmbed } = require("discord.js"), 
fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
   let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8")),
   config = require("./../../config.json"),
   owner = await client.users.fetch(config.bot.owner)
    var embed = new MessageEmbed()
    .setAuthor(`🔹 Informations à propos de ${client.user.username}`)
    .setColor(db.color)
    .setDescription(`Voici les informations à propos de votre abonnement.`)
    .addField(`🔹 Type d'abonnement:`, `[${config.login.type}](http://ApoBot)`, true)
    .addField(`🔹 Durée de l'abonnement:`, `[${config.login.date}](http://ApoBot)`, true)
    .addField(`🔹 Acheteur de l'abonnement:`, `[${owner.username}#${owner.discriminator}](http://ApoBot) (\`${owner.id}\`)`, true)
    message.channel.send(embed)
};


module.exports.help = {
    name: "bot",
    aliases: ['botinfo','abonnement'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement ApoBot",
  };
