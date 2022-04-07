const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Information about the next param')
		.addSubcommand((subcommand) =>
			subcommand
				.setName('user')
				.setDescription('Information about you')
				.addUserOption(option => option.setName('target').setDescription('The user')),
		),
	async execute(interaction) {
		console.log(interaction);
		await interaction.reply('Test');
	},
};