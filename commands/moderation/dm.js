const { MessageAttachment } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
module.exports = {
    name: "dm",
    description: "dm a user",
    aliases: ["dm", "msg", "pm"],
    usage: "[dm <user> <text>]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    execute(message, args, client) {
        const config = require("../../config.json");
        if (!message.member.roles.cache.has(config.Moderation_role)) {
            return message.channel.send("You do not have permission to use this command!")
                .then((msg) => setTimeout(() => msg.delete(), 2300))
        }




let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
if (!user)
    return message.channel.send(
        `You did not mention a user, or you gave an invalid ID`
    );
if (!args.slice(1).join(" "))
    return message.channel.send("Please specify your message");
user.user
    .send(args.slice(1).join(" "))
    .catch(() => message.channel.send("ERR :x: - I was unable to DM that user, could be because they have closed their DMs or blocked me :("))
    .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    },
  };