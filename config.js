import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281230690468', 'xf4isal', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281230690468'
global.packname = 'x-Bot - MD By'
global.author = '© x-Media'
global.namebot = '​x-Bot x-Media MD'
global.wm = '© x-Media By xfaisal'
global.stickpack = 'x-Media - MD'
global.stickauth = '©Smart AI'
global.fotonya = 'https://telegra.ph/file/3c025e2497a5bc8f773d7.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/@xf4isal_'
global.sgh = 'https://github.com/xf4isal'
global.sgc = 'https://chat.whatsapp.com/-'
// Donasi
global.psaweria = 'none'
global.ptrakterr = 'none'
global.povo = 'none'
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
