import { Telegraf } from "telegraf";
import { Extra } from "telegraf";
import dotenv from 'dotenv';
import { getBunnies, getCat, getDog, getDuck, getFox, starter } from './functions/animals';
import { lingo } from './functions/lingo';
import { easteregg, getInsult, getQuotes, greet, stickerPhotoReply } from "./functions/utils";
import { getMeme, getMemeCommands } from "./functions/memes";
import { googleSearch, imageSearch } from "./functions/google-search";
import { getGif } from "./functions/giphy";
import { wordSearch } from "./functions/dictionary";
import { councils } from "./functions/councils";
import { cc, fmc, gnsc, sntc, ssc } from "./functions/councils/clubs";
import { listDevs, aswini, yashr, devansh, eshaan, ankura, saumya, apoorve, shubhangi, ravidev, aadeesh, divyansh, sanskar, anshuman, mohitk, hitansh, debarati, mihir, manan, jayesh, ayushi, sriraj, soumyo, atharva, yashp, danish, jeevesh, chirayu, ankurp, sahil, tarun, somesh, raideva, ashwat, mohits } from "./functions/devs";

dotenv.config();
const bot = new Telegraf(process.env.TOKEN);

bot.start( async (ctx) => {
    console.log(ctx.from.first_name, ": /start");
    const name = ctx.message.from ? ctx.message.from.first_name : 'no-name-on-telegram.jpeg';
    const caption = '***Aaiyee aapkaa intezaar tha!***\n\nHey ***'+name+'***! \n\nType /help for list of commands';
    await ctx.replyWithAnimation('https://thumbs.gfycat.com/UnsungShallowDrafthorse-max-14mb.gif', Extra.caption(caption).markdown());
});

bot.catch((err, ctx) => {
    console.log('Error, ', ctx.from.first_name, " - ", err)
    console.log(err.message)
    const errMsg = "Did not quite get what you said, please contact @aswinitalks for the issue!";
    ctx.reply(errMsg);
});

bot.help(async(ctx) => {
    console.log(ctx.from.first_name, ": /help")

    const helpMsg = "<strong>HELP-101</strong>\n\n/councils - Info about all councils and clubs!\n\n/dict or /dictionary - Search the meaning of any word you want! \n\n/lingo - College ki lingo! \n\n/animals - Henlo human, do me a click, get a phomto!\n\n/meme or /memes - Who does not like memes?\n\n/google - Search anything!\n\n/image - image search! directly from your chat window!\n\n/gif - Search for <s>GFs</s> GIFs\n\n/insult - burnol khareed lena pehle (also, trigger warning)\n\n/quotes - random quotes from tv series and movies\n\n/dev or /devs - list of Dev Group members\n\n/help - For all available function\n\n/party - To get parties (samosa, pizza..)\n\n(👀 there is an easter egg somewhere in this bot, try to find that command, if you do, a gift awaits you)";
    try {
        await ctx.replyWithHTML(helpMsg);
    } catch (e) {
        console.log(e)
        await ctx.reply('Facing server issues, try again later.\nSorry for inconvenience.')
    }
});

bot.command('animals', async(ctx) => starter(ctx));
bot.command('dog', async(ctx) => getDog(ctx));
bot.command('cat', async(ctx) => getCat(ctx));
bot.command('fox', async(ctx) => getFox(ctx));
bot.command('duck', async(ctx) => getDuck(ctx));
bot.command('bunny', async(ctx) => getBunnies(ctx));

bot.command('lingo', async(ctx) => lingo(ctx));
bot.command('dict', async(ctx) => wordSearch(ctx));
bot.command('dictionary', async(ctx) => wordSearch(ctx));

bot.command('meme', async(ctx) => getMemeCommands(ctx));
bot.command('memes', async(ctx) => getMemeCommands(ctx));
bot.command('randomMeme', (ctx) => getMeme(ctx, 'memes'));
bot.command('wholesomeMeme', (ctx) => getMeme(ctx, 'wholesomememes'));
bot.command('indianMeme', (ctx) => getMeme(ctx, 'IndianMeyMeys'));
bot.command('memeEconomy', (ctx) => getMeme(ctx, 'MemeEconomy'));
bot.command('happynewyear', async(ctx) => easteregg(ctx));
bot.command('historyMeme', (ctx) => getMeme(ctx, 'HistoryMemes'));
bot.command('animeMeme', async(ctx) => getMeme(ctx, 'Animemes'));
bot.command('toorealMeme', async(ctx) => getMeme(ctx, '2meirl4meirl'));
bot.command('cheems', async(ctx) => getMeme(ctx, 'dogelore'));
bot.command('herapheri', async(ctx) => getMeme(ctx, 'HeraPheriMemes'));

bot.command('google', async(ctx) => googleSearch(ctx));
bot.command('image', async(ctx) => imageSearch(ctx));

bot.command('gif', async(ctx) => getGif(ctx))

bot.command('quotes', async(ctx) => getQuotes(ctx))

bot.command('councils', async(ctx) => councils(ctx));
bot.command('sntc', async(ctx) => sntc(ctx));
bot.command('ssc', async(ctx) => ssc(ctx));
bot.command('cc', async(ctx) => cc(ctx));
bot.command('gnsc', async(ctx) => gnsc(ctx));
bot.command('fmc', async(ctx) => fmc(ctx));

bot.command('easteregg', async(ctx) => {
    console.log(ctx.from.first_name, ": /easteregg")
    ctx.replyWithMarkdown("This is not the easter egg, but here is a hint:\n\n Hint lies in the video: [Easter egg](https://youtu.be/i1EU-_Qe_28)")
})

bot.command('egg', async(ctx) => {
    await ctx.replyWithAnimation('https://media.tenor.com/images/8306606f621e5913fc2b8b23f15f923b/tenor.gif', Extra.caption('Wow smarty pants! Such intelligence much wow -_-'))
})

bot.command('easter', async(ctx) => {
    await ctx.replyWithAnimation('https://media.tenor.com/images/97a9068561ba6c9b6d7089dbdc0a1db9/tenor.gif', Extra.caption('Nikal, pehli fursat mai nikal'))
})

bot.command('ganja', async(ctx) => {
    ctx.replyWithPhoto('https://i.ytimg.com/vi/j6aeSSKv7Sg/maxresdefault.jpg', Extra.caption('SS taken, reporting to DOSA!')) 
})

bot.command('party', async(ctx) => {
    await ctx.replyWithAnimation('https://media.tenor.com/images/96242c142ff4426682f63d1bf63515ac/tenor.gif', Extra.caption('Such gullibility'))
})

bot.command('insult', async(ctx) => getInsult(ctx));

bot.command('dev', async(ctx) => listDevs(ctx));
bot.command('devs', async(ctx) => listDevs(ctx));

// connect you function to the command here.
bot.command('aswini', async (ctx) => aswini(ctx));
bot.command('yashr', async (ctx) => yashr(ctx));
bot.command('devansh', async (ctx) => devansh(ctx));
bot.command('eshaan', async (ctx) => eshaan(ctx));
bot.command('ankura', async (ctx) => ankura(ctx));
bot.command('saumya', async (ctx) => saumya(ctx));
bot.command('apoorve', async (ctx) => apoorve(ctx));
bot.command('shubhangi', async (ctx) => shubhangi(ctx));
bot.command('ravidev', async (ctx) => ravidev(ctx));
bot.command('aadeesh', async (ctx) => aadeesh(ctx));
bot.command('divyansh', async (ctx) => divyansh(ctx));
bot.command('sanskar', async (ctx) => sanskar(ctx));
bot.command('anshuman', async (ctx) => anshuman(ctx));
bot.command('mohitk', async (ctx) => mohitk(ctx));
bot.command('hitansh', async (ctx) => hitansh(ctx));
bot.command('debarati', async (ctx) => debarati(ctx));
bot.command('mihir', async (ctx) => mihir(ctx));
bot.command('manan', async (ctx) => manan(ctx));
bot.command('jayesh', async (ctx) => jayesh(ctx));
bot.command('ayushi', async (ctx) => ayushi(ctx));
bot.command('sriraj', async (ctx) => sriraj(ctx));
bot.command('soumyo', async (ctx) => soumyo(ctx));
bot.command('atharva', async (ctx) => atharva(ctx));
bot.command('yashp', async (ctx) => yashp(ctx));
bot.command('danish', async (ctx) => danish(ctx));
bot.command('jeevesh', async (ctx) => jeevesh(ctx));
bot.command('chirayu', async (ctx) => chirayu(ctx));
bot.command('ankurp', async (ctx) => ankurp(ctx));
bot.command('sahil', async (ctx) => sahil(ctx));
bot.command('tarun', async (ctx) => tarun(ctx));
bot.command('somesh', async (ctx) => somesh(ctx));
bot.command('raideva', async (ctx) => raideva(ctx));
bot.command('ashwat', async (ctx) => ashwat(ctx));
bot.command('mohits', async (ctx) => mohits(ctx));


bot.on('message', async(ctx) => greet(ctx));
bot.on(['sticker', 'photo'], async(ctx) => stickerPhotoReply(ctx));

if (process.env.NODE_ENV === 'production') {
    console.log('Running bot in production environment:')
    module.exports = (req, resp) => {
        if (req.method === 'POST') bot.handleUpdate(req.body, resp)
        else resp.status(200).send('Hello world :)!')
    };
} else {
    console.log('Running bot in development environment:')
    bot.launch();
}
