

const randomPuppy = require('random-puppy')

const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
module.exports = {
    name: "meme",
    description: "Gives you a meme",
    aliases: ["meme"],
    usage: "[meme]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args, client) {
        const config = require("../../config.json");
        const subReddits = ['dankmemes', 'AdviceAnimals', 'MemeEconomy', 'ComedyCemetery','terriblefacebookmemes']//You can have name of any subreddit here
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)


        const embed = new MessageEmbed()
            .setColor("0099ff")
            .setImage(img)
            .setTitle(`Meme from ${random} subreddit`)
            .setURL(`https://reddit.com/r/${random}`)
            .setFooter('Please wait for the meme to load...')
        
        await message.channel.send({ embeds: [embed] })    }
}