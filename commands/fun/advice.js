/**
 * @file fun command
 * @author Dontbesotoxic
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const { prefix } = require("../../config.json");
const fetch = require('node-fetch');

// Deconstructing MessageEmbed to create embeds within this command
const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "advice",
    description: "Gives you good Advice",
    aliases: ["Advice"],
    usage: "[Advice]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args) {
    const data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

        const embed = new MessageEmbed()
        .setTitle("Advice")
        
        .setDescription(data.slip.advice)
        .setColor("RANDOM")

        await message.channel.send({ embeds: [embed] })
}
}