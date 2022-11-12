let axios = require('axios');
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://vt.tiktok.com/ZSRqLXGFo/`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendFile(m.chat, res.video, ' ', `TIKTOK DOWNLOADER\n\n████████▀▀▀████
████████────▀██
████████──█▄──█
███▀▀▀██──█████
█▀──▄▄██──█████
█──█████──█████
█▄──▀▀▀──▄█████
███▄▄▄▄▄███████ \n\n${global.wm}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i
handler.group = true

module.exports = handler