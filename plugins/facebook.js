const { facebookdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => { await m.reply('■■■■■■■■■■■□□□ LOADING')
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdlv2(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { quality, url, isVideo } of result) 
conn.sendFile(m.chat, url, `facebook.${isVideo ? '' : 'mp4'}`, wm, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

module.exports = handler