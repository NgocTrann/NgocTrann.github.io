const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.login("MTE5NTk3MTE1MzA4NTM1NDEzNQ.Gclufu.G6tRC5zlyFFzmqhCIMuh9z25AVFibkrYkFd8ck")

client.on('ready', () => {
    console.log("ready")

    function loopmessage(ChannelID) {
        setInterval(() => {

            client.guilds.cache.get('1193615891397607424').channels.cache.get('1195971504639311883').send("Test!")


        }, 1000);

    };

    loopmessage();

})
