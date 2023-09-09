import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281977815539', 'Myuko Dev', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281977815539'
global.packname = 'GuraBotz 3 - MD By'
global.author = '© Myuko'
global.namebot = '​GuraBotz 3 - MD'
global.wm = '© Gura By Myuko'
global.stickpack = 'GuraBotz 3 - MD By'
global.stickauth = '© Myuko'
global.fotonya = 'https://telegra.ph/file/3c025e2497a5bc8f773d7.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/@thisapin_'
global.sgh = 'https://github.com/KAZOTUBOTZ'
global.sgc = 'https://chat.whatsapp.com/GIZavmvJSZ13W9X9qFCa7z'
// Donasi
global.psaweria = 'https://sociabuzz.com/myukodev'
global.ptrakterr = 'https://trakteer.id/myukodev'
global.povo = '081977815539'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = '4b884384e3773477bd9166ba' //api.itsrose.life // apikey sudah prem cma ga di kustom aja
global.xyro = 'MboBZsHdYb'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "MboBZsHdYb",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
