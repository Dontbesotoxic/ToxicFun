/**
 * @file fun command
 * @author Dontbesotoxic
 * @since 1.0.0
 */

// Deconstructing prefix from config file to use in help command
const config = require("../../config.json");
const { prefix } = require("../../config.json");
const fetch = require('node-fetch');


// Deconstructing MessageEmbed to create embeds within this command
const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "purge",
    description: "purge messages",
    aliases: ["purge", "prune"],
    usage: "[purge amount]",
    cooldown: 1,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args) {
        const { commands } = message.client;
        const mod = config.Moderation_role


        if (message.author.id !== config.Owner_ID && !message.member.roles.cache.has(config.Moderation_role)) {
            return message.channel.send("You do not have permission to use this command!")
        }
        else {
            if (!args[0]) return message.channel.send("Please specify an amount of messages to delete!")
            if (args[0] > 100) return message.channel.send("Please specify an amount of messages less than 100!")
            if (args[0] < 2) return message.channel.send("Please specify an amount of messages greater than 1!")
            message.channel.bulkDelete(args[0])
                .then(() => {
                    message.channel.send(`Successfully purged ${args[0]} messages!`)
                }
                )
        }    

   


    }
}