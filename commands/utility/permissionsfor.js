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
    name: "permissionsfor",
    description: "see the permissions of the user",
    aliases: ["permissions", "perms", "pf", "pfor"],
    usage: "[pf<user>]",
    cooldown: 5,

    /**
     * @description Executes when the command is called by command handler.
     * @author Dontbesotoxic
     * @param {Object} message The Message Object of the command.
     * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
     */

    async execute(message, args) {




        let member = ''

        if (!member.match(/\d{17,19}/)) {
            member = message.author.id || message.mentions.users.first()

            member = await message.guild.members
                .fetch(member.match(/\d{17,19}/)[0])
                .catch(() => null);

            if (!member) {
                return message.channel.send(`\\${em.error} | User not found.`);
            };
            const color = require('../../config.json').Colour;

            const sp = member.permissions.serialize();
            const cp = message.channel.permissionsFor(member).serialize();

            const perm = new MessageEmbed()
                .setColor(member.displayColor || color)
                .setTitle(`${member.displayName}'s Permissions`)
                .setFooter(`Permissions | \©️${new Date().getFullYear()}`)
                .setDescription([
                    '\\♨️ - This Server',
                    '\\#️⃣ - The Current Channel',
                    '```properties',
                    '♨️ | #️⃣ | Permission',
                    '========================================',
                    `${Object.keys(sp).map(perm => [
                        sp[perm] ? '✔️ |' : '❌ |',
                        cp[perm] ? '✔️ |' : '❌ |',
                        perm.split('_').map(x => x[0] + x.slice(1).toLowerCase()).join(' ')
                    ].join(' ')).join('\n')}`,
                    '```'
                ].join('\n'))
            message.channel.send({ embeds: [perm] });

        }
    }
};
