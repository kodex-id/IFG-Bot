let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.caklontong[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Soal: ${json.soal}
\n
Waktu Habis: *${(timeout / 1000).toFixed(2)} detik* \n\n
Ketik ${usedPrefix}calo untuk bantuan atau tekan tombol Bantuan dibawah.\n\n
Hadiah: ${poin} Exp

`.trim()
    conn.caklontong[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', '.calo', m),
        json, poin,
        setTimeout(() => {
            if (conn.caklontong[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, wm, 'Cak Lontong', '.caklontong', conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.limit = true

module.exports = handler