const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
module.exports = {
    name: "ban",
    description: "ban a user",
    aliases: ["ban", "b","pce"],
    usage: "[ban user]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

     execute(message, args,client) {
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Unspecified";

        const target = message.mentions.members.first() || (args[0]);

        if (!target) {
            return message.reply(
                `**${message.author.username}**, Please mention the person who you want to ban.`)
                .then((msg) => setTimeout(() => msg.delete(), 2300))
            
        }

        if (target.id === message.author.id) {
            return message.reply(
                `**${message.author.username}**, You can not ban yourself!`)
                    .then((msg) => setTimeout(() => msg.delete(), 2300))
          
        }
        if (target.id === message.guild.ownerId) {
            return message.reply("You cannot Ban The Server Owner")
            .then((msg) => setTimeout(() => msg.delete(), 2300));
        }

        let embed = new MessageEmbed()
            .setTitle("Action : Ban")
            .setDescription(`Banned ${target} (${target.id})\nReason: ${reason}`)
            .setColor("#ff2050")
            .setThumbnail(target.avatarURL)
            .setFooter(`Banned by ${message.author.tag}`);

        target
            .ban({
                reason: reason,
            })
            .then(() => {
                message.channel.send({ embeds: [embed] });
            });

        }
};    
