/**
 * @file fun command
 * @author Dontbesotoxic
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const em = require('../../assets/json/emojis.json');
const color = require('../../config.json').color;
const { prefix } = require("../../config.json");
const fetch = require('node-fetch');
const _ = require('lodash');


// Deconstructing MessageEmbed to create embeds within this command
const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "listrole",
    description: "list all roles",
    aliases: ["roles", "lr", "listroles"],
    usage: "[roles>]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args) {

        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
        if (rolemap.length > 1024) rolemap = "To many roles to display";
        if (!rolemap) rolemap = "No roles";
        const rolesembed = new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`💮 ${message.guild.name} Roles List`)
            .setFooter(`Listrole | \©️${new Date().getFullYear()}`)
            .addField("Role List", rolemap)

        message.channel.send({ embeds: [rolesembed] });
    }
};