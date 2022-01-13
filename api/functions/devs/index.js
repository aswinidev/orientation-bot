/* Devs add you commands here to get listed in bot dev list. */
// Add your and command in this list.
// Then make a similar function for you command and connect that function to the command in root index.js

const DEVS = [
    'P Aswini Kumar : /aswini',
    'Yash Raj : /yashr',
    'Devansh Mishra : /devansh',
    'Eshaan Agarwal : /eshaan',
    'Ankur Agrawal : /ankura',
    'Saumya Kushwaha : /saumya',
    'Apoorve Shukla : /apoorve',
    'Shubhangi Choudhary : /shubhangi',
    'Ravidev Pandey : /ravidev',
    'Aadeesh Oswal : /aadeesh',
    'Divyansh Srivastava : /divyansh',
    'Sanskar Santosh Totla : /sanskar',
    'Anshuman Maurya : /anshuman',
    'Mohit Kumar Sharma : /mohitk',
    'Hitansh Shah : /hitansh',
    'Debarati Bandopadhyay : /debarati',
    'Mihir Kumar Badkur : /mihir',
    'Manan Rathi : /manan',
    'Jayesh Dewangan : /jayesh',
    'Ayushi Gupta : /ayushi',
    'Sriraj : /sriraj',
    'Soumyajyoti Dey : /soumyo',
    'Atharva Bhatt : /atharva',
    'Yash Prakash : /yashp',
    'Danish Ahmed Mirza : /danish',
    'Jeevesh Garg : /jeevesh',
    'Chirayu Mittal : /chirayu',
    'Ankur Patil : /ankurp',
    'Sahil Saini : /sahil',
    'Tarun Arora : /tarun',
    'Somesh Ranjan : /somesh',
    'Devashish Rai : /raideva',
    'Ashwat : /ashwat',
    'Mohit Sharma : /mohits',
]
export const listDevs = async(ctx) => {
    let reply = 'Following people are part of COPS dev group.\n\n'
    reply += DEVS.join('\n')
    reply += '\n\nList may not be complete.'
    try {
        ctx.reply(reply);
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}

// aswini, yashr, devansh, eshaan, ankura, saumya, apoorve, shubhangi, ravidev, aadeesh, divyansh, sanskar, anshuman, mohitk, hitansh, debarati, mihir, manan, jayesh, ayushi, sriraj, soumyo, atharva, yashp, danish, jeevesh, chirayu, ankurp, sahil, tarun, somesh, raideva, ashwat, mohits

export const aswini = async(ctx) => {
    try {
      await ctx.replyWithMarkdown(`Hi future <developers/>! I am Aswini. You can find me at github [aswinidev](github.com/aswinidev) or you can ping me at [@aswinitalks](https://www.instagram.com/aswinitalks/) or you could just message me here @aswinitalks (Yeah I am not creative with my username selection :grin:). Lets chat!!`);
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}

export const yashr = async(ctx) => {
    try {
        await ctx.reply('Hey folks! You can find me at Github:https://github.com/tiger-yash or Telegram:@Tiger_Yash')
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}

export const devansh = async(ctx) => {
  try {
      await ctx.reply('Hey everyone! You can find me at https://github.com/devansh12b2 telegram :@Dev1226')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const eshaan = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me at https://github.com/eshaanagarwal or on telegram as @eshaanagarwal')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const ankura = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me at https://github.com/Ankur-Agrawal-ece20 or on telegram as @Ankur10k36')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const saumya = async(ctx) => {
  try {
      await ctx.reply('Hello! You can find me at github:https://github.com/S-kus or ping me on telegram @saumya_k')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const apoorve = async(ctx) => {
  try {
      await ctx.reply('Hey guys! You can find me at https://github.com/shukapurv or can pm on telegram @shukapurv')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const shubhangi = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me at https://github.com/shubhangi013 or ping me on telegram @shubhangi013')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const ravidev = async(ctx) => {
  try {
      await ctx.reply('Henlo bois and grills. I am Ravidev Pandey and you can find me at GitHub: https://github.com/Literal-Eval Or at telegram: @ravidi_shaikh')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const aadeesh = async(ctx) => {
  try {
      await ctx.reply('Hey everyone! You can find me at https://github.com/Aadeesh11 telegram :@Aadeesh11')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const divyansh = async(ctx) => {
  try {
      await ctx.reply('Hello peeps!  You can find me at github: https://github.com/Divyansh013 or ping me on telegram @divyansh2208')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const sanskar = async(ctx) => {
  try {
      await ctx.reply('Hey everyone! You can find me at https://github.com/it-is-skywalkerl or on telegram as @sanskarst')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const anshuman = async(ctx) => {
  try {
      await ctx.reply('Hello everyone! I am Anshuman Maurya and you can find me at GitHub:  ttps://github.com/IamEzio Or at telegram: @IamEzio')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const mohitk = async(ctx) => {
  try {
      await ctx.reply('Hello everyone! You can find me at Github:https://github.com/MohitSharma-21 or Telegram:@M_o_h_i_t_21')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const hitansh = async(ctx) => {
  try {
      await ctx.reply('Hey everyone! I am Hitansh, you can find me at https://github.com/Hitansh-Shah or on Telegram at @hitansh_123')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const debarati = async(ctx) => {
  try {
      await ctx.reply('Hey everyone! I am Debarati, you can find me at GitHub: https://github.com/debarati-06 Or on Telegram: @debarati_06')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const mihir = async(ctx) => {
  try {
      await ctx.reply('Hey Everyone! I am Mihir, you can find me at https://github.com/mihir02badkur or on telegram at @mihir02badkur')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const manan = async(ctx) => {
  try {
      await ctx.reply('Hey peeps! I’m Manan Rathi and you can find me at https://github.com/Manan-Rathi Or on Telegram at @Manan_Rathi')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const jayesh = async(ctx) => {
  try {
      await ctx.reply('Hey Everyone! I am Jayesh, you can find me at https://github.com/jyshdewangan or on telegram at @jyshdewangan')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const ayushi = async(ctx) => {
  try {
      await ctx.reply('Hey Everyone! I am Ayushi Gupta, you can find me at  https://github.com/ayushigupta931 or on telegram at @ayuGupta_04')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const sriraj = async(ctx) => {
  try {
      await ctx.reply('Hey Everyone! I am Sriraj, you can find me at https://github.com/Sriraj-dev or on telegram at @Sriraj')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const soumyo = async(ctx) => {
  try {
      await ctx.reply('Hey Everyone! You can find me on github at https://github.com/soumyo123-prog and On telegram at @Spunky')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const atharva = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me at https://github.com/atharvabhatt200 or on telegram as @atharvabhatt')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const yashp = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me at https://github.com/yash2002109 or ping me on telegram @yash_yp')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const danish = async(ctx) => {
  try {
      await ctx.reply('Hey guys! You can find me on GitHub at https://github.com/try-catch-stack or on telegram at @DanishM7')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}


export const jeevesh = async(ctx) => {
  try {
      await ctx.reply(' Hey, Everyone! You can find me on Github at https://github.com/JeeveshGarg or on telegram at @JeeveshGarg')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const chirayu = async(ctx) => {
  try {
      await ctx.reply('Hey guys! I am Chirayu Mittal. You can find me on GitHub at https://github.com/chirayumit001 or @chirayumit001')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const ankurp = async(ctx) => {
  try {
      await ctx.reply('Heyya guys, I am Ankur Patil a tech enthusiast, you can find me wandering on Github: https://github.com/ankur12-1610 or on telegram at @itsank')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const sahil = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me here: https://github.com/sahilsaini110 or ping me on telegram @ItsSahilsaini')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const tarun = async(ctx) => {
  try {
      await ctx.reply('Hey everyone! You can find me at https://github.com/Tarun-Arora or @Tarun_0304')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const somesh = async(ctx) => {
  try {
      await ctx.reply('Hello everyone! I am Somesh Ranjan and you can find me at GitHub: https://github.com/somesh202 Or at telegram: @somesh_1569')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const raideva = async(ctx) => {
  try {
      await ctx.reply('Hello everyone! You can find me at https://github.com/raideva or @raideva')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const ashwat = async(ctx) => {
  try {
      await ctx.reply('Hey! You can find me at https://github.com/nerdylucifer or on telegram as @iamaks287')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}

export const mohits = async(ctx) => {
  try {
      await ctx.reply('Hello everyone! You can find me at Github:https://github.com/MohitSharma-21 or Telegram:@M_o_h_i_t_21')
  } catch (e) {
      console.log('error =', e.message)
      await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
      return
  }
}