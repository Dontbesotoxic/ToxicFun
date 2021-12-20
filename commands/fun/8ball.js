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
    name: "8ball",
    description: "let 8 ball answer your question",
    aliases: ["8ball"],
    usage: "[8ball <msg>]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args) {
        const { commands } = message.client;
        if (args.length == 0)
            return message.channel
                .send("`Usage: 8ball <msg>`")
                .then((msg) => setTimeout(() => msg.delete(), 2300));

        var fortunes = [
            "Yes.",
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes definelty.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now...",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good...",
            "Very doubtful.",
        ];


        const embed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("8ball Answer!")
            .setDescription(fortunes[Math.floor(Math.random() * fortunes.length)])
            .setFooter(`Requested by ${message.author.tag}`);

        await message.channel.send({ embeds: [embed] })
        
            
        
    },
};
