require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6288238792468"
global.namaowner = "ReyzXdzz"

//======== Setting Bot & Link ========//
global.namabot = "REYZXDZZ BOT V2" 
global.namabot2 = "REYZXDZZ BOT V2"
global.foother = "© Copyright Reyzxdzz Official"
global.idsaluran = "-"
global.linkgc = ''
global.linksaluran = ""
global.linkyt = '-'
global.linktele = ""
global.packname = "Created By"
global.author = "Reyzxdzz Bot"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://pusat.panellstoree.com"
global.apikey = "ptla_eqZdqMgG7V9qeJWs6Z39Nul4gKyGA535nGzqh40CtRE"
global.capikey = "ptlc_3q9CUeCIctS5toRCXIG0RmSuxbZDmJMIlLIlhkVQMAb"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "088238792468"
global.gopay = "088238792468"
global.ovo = ""
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "-"
global.apitoken1 = "---"
global.tld1 = "-"

//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})