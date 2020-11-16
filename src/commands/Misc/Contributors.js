const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class ContributorsCommand extends Command {
    constructor() {
        super('contributors', {
           aliases: ['contributors', 'contrib'],
           category: 'Miscellaneous',
           description: 'Shows users who have contributed to rada.'
        });
    }

    async exec(message) {
        let contributors = [
            `[${this.client.users.cache.get('443166863996878878').tag}](https://github.com/brys0) \`[${this.client.users.cache.get('443166863996878878').id}]\`` // Brys
        ]
        for (let i = 0; i < contributors.length; i++);
        let embed = new MessageEmbed()
            .setColor(this.client.color)
            .setTitle(`Contributors`)
            .setThumbnail(this.client.avatar)
            .setDescription(contributors.map((e, i) => `**${i+1}.** ${e}`).join('\n'))
            .addField('How to contribute', `To contribute to ${this.client.user.username}, submit a PR to our Github repo [here](https://github.com/Iskawo/Rada)`)
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp()
        return message.channel.send(embed);
    }
}

module.exports = ContributorsCommand;