/**
 * @file fun command
 * @author Dontbesotoxic
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const em = require('../../assets/json/emojis.json');

const { prefix } = require("../../config.json");
const fetch = require('node-fetch');

// Deconstructing MessageEmbed to create embeds within this command
const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "avatar",
    description: "see the avatar of the user",
    aliases: ["av", "pfp", "displayprofile"],
    usage: "[avatar <user>]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args) {


        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new MessageEmbed()
            .setColor(0x333333)
            .setFooter(`Avatar | \©️${new Date().getFullYear()}`)
            .setAuthor(`${user.username}'s Avatar`)
            .setImage(
                `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
        );
            
        message.channel.send({ embeds: [avatarEmbed] });

    }
};
