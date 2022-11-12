let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
const axios = require ("axios")
const fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }
  
   if(!text && !m.quoted) return conn.reply(m.chat, `*❏ Silahkan Baca petunjuk dibawah ini:*\n\n• \`\`\`\Tag user:\`\`\`\ contoh *${usedPrefix}profile @Tag*\n\n• \`\`\`\Tambahkan nomor:\`\`\`\ contoh *${usedPrefix}profile 60142871298*\n\n• \`\`\`\Cek Profilemu Sendiri:\`\`\`\ Balas pesanmu sendiri dan ketik *${usedPrefix}profile*\n\n• \`\`\`\Cek profile orang lain:\`\`\`\Balas pesan orang lain dan ketik *${usedPrefix}profile*`, m)
    if(isNaN(number)) return conn.reply(m.chat, `*❏ Silahkan Baca petunjuk dibawah ini:*\n\n• \`\`\`\Tag user:\`\`\`\ contoh *${usedPrefix}profile @Tag*\n\n• \`\`\`\Tambahkan nomor:\`\`\`\ contoh *${usedPrefix}profile 60142871298*\n\n• \`\`\`\Cek Profilemu Sendiri:\`\`\`\ Balas pesanmu sendiri dan ketik *${usedPrefix}profile*\n\n• \`\`\`\Cek profile orang lain:\`\`\`\Balas pesan orang lain dan ketik *${usedPrefix}profile*`, m)
    if(number.length > 15) return conn.reply(m.chat, `*❏ Silahkan Baca petunjuk dibawah ini:*\n\n• \`\`\`\Tag user:\`\`\`\ contoh *${usedPrefix}profile @Tag*\n\n• \`\`\`\Tambahkan nomor:\`\`\`\ contoh *${usedPrefix}profile 60142871298*\n\n• \`\`\`\Cek Profilemu Sendiri:\`\`\`\ Balas pesanmu sendiri dan ketik *${usedPrefix}profile*\n\n• \`\`\`\Cek profile orang lain:\`\`\`\Balas pesan orang lain dan ketik *${usedPrefix}profile*`, m) 
 let pp = './src/avatar_contact.png'
  try {
  	//pp = await conn.updateProfilePicture(text)
		if(text) {
			var who = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var who = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var who = number + '@s.whatsapp.net'
			} 
			//let pp = './src/avatar_contact.png'
			pp = await conn.profilePictureUrl(who, 'image')
		} catch (e) {
					//pp = 'https://telegra.ph/file/32ffb10285e5482b19d89.jpg'
		//} catch (e) {
  } finally {
  	if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == who) : {}
	let number = who.split('@')[0]
	//let pp = await conn.updateProfilePicture(who)
	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
    let now = new Date() * 1
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    const expmin = exp - min
    const math = max - exp
    let username = conn.getName(who)
   // let buffer = await getBuffer(pp)
    let prem = global.prems.includes(who.split`@`[0])
    let jodoh = `Berpacaran @${pasangan.split`@`[0]}`
    let str = `
➡️Nama: ${username} ${registered ? '(' + name + ') ': ''}(@${who.split`@`[0]})${about ? '\n➡️Tentang: ' + about : ''}
➡️Status: ${pasangan ? jodoh : 'Jomblo' }
➡️Nomor: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
➡️Link: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
➡️Exp: TOTAL ${exp.toLocaleString().replace(/,/g, '.')} \n
(${expmin.toLocaleString().replace(/,/g, '.')} / ${xp.toLocaleString().replace(/,/g, '.')}) \n[${math <= 0 ? `Siap untuk naik level ketik *${usedPrefix}levelup* untuk naik level` : `${math.toLocaleString().replace(/,/g, '.')} Exp lagi untuk naik level`}]
➡️Level: ${level}
➡️Role: *${role}*
➡️Limit: ${limit.toLocaleString().replace(/,/g, '.')}
➡️Coin: ${money.toLocaleString().replace(/,/g, '.')}
➡️Terdaftar: ${registered ? 'Ya (' + new Date(regTime) + ')': 'Tidak'}
➡️Premium: ${premium ? 'Ya' : 'Tidak'}
➡️Kadaluarsa Premium: ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : '*Tidak diatur expired premium!*'}${lastclaim > 0 ? '\n➡️Last Claim: ' + new Date(lastclaim) : ''}
`.trim()
     let mentionedJid = [who]
 	conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid: conn.parseMention(str) }})
 }
}
handler.help = ['profile [@user]']
handler.tags = ['info']
handler.command = /^profile$/i
handler.limit = true
handler.register = false

module.exports = handler

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
  
  const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}