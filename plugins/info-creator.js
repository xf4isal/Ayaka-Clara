import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `xf4isal `, `My Skill Just Copas`, `pubgfais2r@gmail.com`, `Indonesia`, `instagram.com/@xf4isal_`, `Developer x-Media - MD`]
  ], m)
  } 

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler
