const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923123462476" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923123462476";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_15_01_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCVzhxNm5QME9XSnVqY291ckJHS1k0YTRVVGRsNWpZaHhlQUxHTjI4VlNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0QXRzdWMyclFYMkx4bGg4MlNBWGZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4YWFmNTMxLWQ1YzItNDI4OS05OGIxLTcwYTYxMWExMWZjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxNTcsXG4gICAgICA4MixcbiAgICAgIDE0MSxcbiAgICAgIDE3NixcbiAgICAgIDIxMixcbiAgICAgIDE0NSxcbiAgICAgIDExMCxcbiAgICAgIDEwNCxcbiAgICAgIDc5LFxuICAgICAgOTcsXG4gICAgICAyNDQsXG4gICAgICAyMTcsXG4gICAgICA0OSxcbiAgICAgIDE3MSxcbiAgICAgIDM4LFxuICAgICAgOTMsXG4gICAgICAxNDksXG4gICAgICAxNjUsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDI5LFxuICAgICAgMTU5LFxuICAgICAgMTMwLFxuICAgICAgMTEzLFxuICAgICAgNzQsXG4gICAgICAxMjMsXG4gICAgICAxMjEsXG4gICAgICA3LFxuICAgICAgMTUxLFxuICAgICAgMTIsXG4gICAgICAxMjIsXG4gICAgICAyMDEsXG4gICAgICAxODYsXG4gICAgICAzMyxcbiAgICAgIDE5NCxcbiAgICAgIDEwMCxcbiAgICAgIDE2OCxcbiAgICAgIDEyOCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1S0pDNEtITlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTIzNDYyNDc2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ0OTE1NDQ0NzM2NTg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2lCcDY0QkVQRFQ2THdHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIYVF4MjBWMVhGZkp2SHF0SEhENXFkMm1maSt1SXdKYjZlTkE3Vyt6YTI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIno1ZzBIWU9OMVhkVjV5LzhzREVKbVNKSjFMa1ZDNXpITmtBL1phRHpYTlc4Ymg4VFloTVphM3ZpbG1oc0x3aDd3Y1RRUmpQQklrU0hyeDYxREJydEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJSNkIzZE9jTk01QWZjNFoySnZ3a2l0ajM2NEFSb0N5eFFGMnQ5blBsZ09KWE5ITkxRZUFzd2RnTkFBQTF1dHBySkNZSlBLdzRwVHV6NW1HSHh5aGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEyMzQ2MjQ3NjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODE1NjUzNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
