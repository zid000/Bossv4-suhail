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


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_04_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMSxcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4LFxuICAgICAgICA2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICA0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiekRPUHpWVXNSNDhOeWpyaHkxcmh5cmhuRGJNdUM0RE1mOTdXWEVYQjl3RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA4MDYyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ2QzcyNEIwMjNBMUUyMjc4OTJCNThDN0UzMDRFRjc4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNzczNDYzOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDgwNjIxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUM3M0E3Rjg4RjlFNTRCRTFGRUM3QjA2ODE4Qjg4QTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM3NzM0NjM5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVySEVqVElzUUl5ZXNiYXUyNkdPamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzNhZWEwYjgtNWFkNS00ZTZjLTgyNTAtNGE3MzlmNzdhY2I4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDI0OCxcbiAgICAgIDc4LFxuICAgICAgMjMxLFxuICAgICAgMjQzLFxuICAgICAgMjIwLFxuICAgICAgMTU5LFxuICAgICAgMTQyLFxuICAgICAgODAsXG4gICAgICA4OSxcbiAgICAgIDgyLFxuICAgICAgOCxcbiAgICAgIDksXG4gICAgICA0NyxcbiAgICAgIDk3LFxuICAgICAgMjE4LFxuICAgICAgMTQ3LFxuICAgICAgODYsXG4gICAgICAyMTEsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTYzLFxuICAgICAgNDgsXG4gICAgICAyMjksXG4gICAgICAyMTAsXG4gICAgICAxODksXG4gICAgICAxNDYsXG4gICAgICAxNTAsXG4gICAgICAxMDgsXG4gICAgICAyNCxcbiAgICAgIDIwMyxcbiAgICAgIDY4LFxuICAgICAgMjcsXG4gICAgICAyMzcsXG4gICAgICAxNSxcbiAgICAgIDE5MixcbiAgICAgIDE2MSxcbiAgICAgIDI0NCxcbiAgICAgIDE5NixcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQ5M0ZFNFBGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MToxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTSUxFTlQgS0lMTEVSXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1B0MmRNREVPVHp6cndHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSNHM5SGZxMWp0WGJXNUczU3c5Vm1HSE50UnRhSVd6QzZhcnQvcGYrb1ZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlIrMERPSDZqSEdkbHJiZVg3VU4zTXBUa0VHdDgxWDAzRnhrbjVxNldyd0xGUFlkOW5ldW1LbVZ6K2xUTVRlVGt6RlhoTzlpSlRpWlJaQU5IMm9XQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjQ1bE04VDVvUlhvZEk5SS9TMDl1cjU4R1g0ZFFHaGYzV0lJK3g1a3NvN2tmeTBuNmNBd05YR2taWjJLTnd0SXZaTVVEdExjL3QzQmM0bFl6YkdaQUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzczNDYzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9nblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2duLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNENRWXJBbEt2bzVWWkxueWtuZ2NhRDlwdmQwZVRIMGtHY2NPUzZFNi9iVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5ODA4NDIyMTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNzczNDYzNTExM1wifSIKfQ=="  // PUT your SESSION_ID 


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
