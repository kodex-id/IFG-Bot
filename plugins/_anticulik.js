let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Maaf, tidak menerima undangan grup 🙏

Best Regards: *Owner* ${conn.user.name}
`
    this.reply(m.chat, teks, m)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler