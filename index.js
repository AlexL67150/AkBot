const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function (message) 
{
    if (message.content.includes ("AkBot"))
    {
        message.channel.send('On parle de moi ?! :stuck_out_tongue_winking_eye:')
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("Akbot"))
    {
        message.channel.send('On parle de moi ?! :stuck_out_tongue_winking_eye:')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/')
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("akbot"))
    {
        message.channel.send('On parle de moi ?! :stuck_out_tongue_winking_eye:')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j1-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/1')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j2-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/2')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j3-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/3')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j4-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/4')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j5-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/5')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j6-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/6')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!j7-ldc')
    {
        message.channel.send('https://www.clashofstats.com/clans/*midnights*-929VRGPC/wars/cwl/round/7')
    }
})

bot.login(process.env.TOKEN);

bot.on('message', function (message) 
{
    if (message.content === '!fcc')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc1')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/1')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc2')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/2')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc3')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/3')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc4')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/4')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc5')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/5')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc6')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/6')
    }
})

bot.on('message', function (message) 
{
    if (message.content === '!fcc7')
    {
        message.channel.send('https://www.clashofstats.com/clans/french-clanclan-QPGVJVJC/wars/cwl/round/7')
    }
})

bot.login(process.env.FCCTOKEN);
