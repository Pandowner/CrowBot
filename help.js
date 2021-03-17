const { MessageEmbed } = require("discord.js"), 
fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    var embed = new MessageEmbed()
    .setAuthor(`🔹 Commande administratif`)
    .setColor(db.color)
    .setDescription(`Partie administratif du Bot, dont seul l'owner peux modifier / interagir avec les commandes de cette catégorie.
    
> [Liste des commandes](https://v9qx)`)
.addField("`bot`", `[Alias:](http://apobot) \`botinfo\`,\`abonnement\` \n - Affiche les informations de votre abonnement.`)
.addField("`setavatar`", `[Alias:](http://apobot) \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `[Alias:](http://apobot) \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`prefix`", `[Alias:](http://apobot) \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`stream`", `[Alias:](http://apobot) \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du Bot`)
.addField("`color`", `[Alias:](http://apobot) \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du Bot.`)
message.channel.send(embed)
var embed2 = new MessageEmbed()
.setAuthor(`🔹 Gestion de serveur`)
.setColor(db.color)
.setDescription(`Partie Gestion de serveur, les personnes ayant les permissions administrateur sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://v9qx)`)
.addField("`giveaway`", `[Alias:](http://apobot) \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `[Alias:](http://apobot) \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `[Alias:](http://apobot) \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `[Alias:](http://apobot) \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](http://apobot) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `[Alias:](http://apobot) \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminée)`)
.addField("`autorole`", `[Alias:](http://apobot) \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)
message.channel.send(embed2)
var embed3 = new MessageEmbed()
.setAuthor(`🔹 Modération de serveur`)
.setColor(db.color)
.setDescription(`Partie Modération de serveur, les personnes ayant les rôles préfinis sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://v9qx)`)
.addField("`mpanel`", `[Alias:](http://apobot) \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs.`)
.addField("`mute`", `[Alias:](http://apobot) \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `[Alias:](http://apobot) \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `[Alias:](http://apobot) \`b\` \n - Bannis la personne.`)
.addField("`unban`", `[Alias:](http://apobot) \`ub\`\n - Débannir une personne`)
.addField("`nuke`", `[Alias:](http://apobot) \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `[Alias:](http://apobot) \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
message.channel.send(embed3)
var embed4 = new MessageEmbed()
.setAuthor(`🔹 Catégorie fun`)
.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://v9qx)`)
.addField("`kiss`", `[Alias:](http://apobot) \`❌\` \n - Fais un bisous.`)
.addField("`fight`", `[Alias:](http://apobot) \`❌\` \n - Combat une personne`)
.addField("`hug`", `[Alias:](http://apobot) \`❌\` \n - Fais un calin a une personne.`)
message.channel.send(embed4)
var embed5 = new MessageEmbed()
.setAuthor(`🔹 Catégorie utilitaires`)
.setColor(db.color)
.setDescription(`C'est des catégories utile au serveur, certains commande sont accesible a tout le monde.
    
> [Liste des commandes](https://v9qx)`)
.addField("`vc`", `[Alias:](http://apobot) \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur.`)
.addField("`la`", `[Alias:](http://apobot) \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `[Alias:](http://apobot) \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `[Alias:](http://apobot) \`aide\` \n - Affiche la liste des commandes`)
.setFooter(`Apo Bot • Version: ${config.bot.version} • ⚠️ Ceci est une pre-release, cette version n'est pas stable`)
message.channel.send(embed5)
};


module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement ApoBot",
  };