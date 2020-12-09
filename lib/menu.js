const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🎬*CREATOR*

🍁 *${prefix}cooltext*
🍁 *${prefix}sticker*
🍁 *${prefix}stickergif*
🍁 *${prefix}stickergiphy*
🍁 *${prefix}meme*
🍁 *${prefix}quotemaker*
🍁 *${prefix}nulis*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
👳‍♂️🧕*ISLAM*

🍁 *${prefix}infosurah*
🍁 *${prefix}surah*
🍁 *${prefix}tafsir*
🍁 *${prefix}ALaudio*
🍁 *${prefix}jsolat*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🎗*HAVE FUN*  (Group)

🍁 *${prefix}simisimi*
🍁 *${prefix}katakasar*
🍁 *${prefix}klasmen*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🗂*DOWNLOAD*

🍁 *${prefix}ytmp3*
🍁 *${prefix}ytmp4*
🍁 *${prefix}facebook*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🎀*PRIMBON*

🍁 *${prefix}cekzodiak*
🍁 *${prefix}artinama*
🍁 *${prefix}cekjodoh*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🔍*SEARCH ANY*

🍁 *${prefix}dewabatch*
🍁 *${prefix}images*
🍁 *${prefix}sreddit*
🍁 *${prefix}resep*
🍁 *${prefix}stalkig*
🍁 *${prefix}wiki*
🍁 *${prefix}cuaca*
🍁 *${prefix}chord*
🍁 *${prefix}lirik*
🍁 *${prefix}ss*
🍁 *${prefix}play*
🍁 *${prefix}movie*
🍁 *${prefix}whatanime*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🍻*RANDOM TEKS*

🍁 *${prefix}motivasi*
🍁 *${prefix}howgay*
🍁 *${prefix}fakta*
🍁 *${prefix}pantun*
🍁 *${prefix}katabijak*
🍁 *${prefix}quote*
🍁 *${prefix}cerpen*
🍁 *${prefix}cersex*
🍁 *${prefix}puisi*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🍻*RANDOM IMAGES*

🍁 *${prefix}anime*
🍁 *${prefix}kpop*
🍁 *${prefix}memes*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
👥*PUBLIC COMMAND*

🍁 *${prefix}tts*
🍁 *${prefix}translate*
🍁 *${prefix}resi*
🍁 *${prefix}covidindo*
🍁 *${prefix}ceklokasi*
🍁 *${prefix}shortlink*
🍁 *${prefix}bapakfont*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🤖*ABOUT BOT*

🍁 *${prefix}tnc*
🍁 *${prefix}donasi*
🍁 *${prefix}botstat*
🍁 *${prefix}ownerbot*
🍁 *${prefix}join*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

_-_-_-_-_-_-_-_-_-_-_-_-_-_

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
👤*OWNER BOT*

🍁 *${prefix}ban* - banned
🍁 *${prefix}bc* - promosi
🍁 *${prefix}leaveall* - keluar semua grup
🍁 *${prefix}clearall* - hapus semua chat
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🍁 *${prefix}add*
🍁 *${prefix}kick* @tag
🍁 *${prefix}promote* @tag
🍁 *${prefix}demote* @tag
🍁 *${prefix}mutegrup*
🍁 *${prefix}tagall*
🍁 *${prefix}setprofile*
🍁 *${prefix}del*
🍁 *${prefix}welcome*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
🍁 *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
*Hai, Mau Donasi? Silahkan baca di bawah ini!*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*Donasi hanya via :*
Telkomsel : 082138919622
Dana : 082138919622
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

Terimakasih. -Vicky`
}
