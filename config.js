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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_40_02_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidE5CSGVDZHQ4bEEzUjBMajJTNTNZT0hDMmVRZTBxQnVHZS8zbDh3ZURSUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA4MDYyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhCREJCMzczNDEyQzgzQzhDRjY4NzRENjNDNDlGNzVEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczOTI4ODQxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2R2k3LWpvcVI1dVR4MWNoeE9rNS1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiZGJkNWEzLTkxOWEtNDY2Ni05ODY5LTE5ZWQ3OTNkY2Q2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDE4NyxcbiAgICAgIDEyNyxcbiAgICAgIDU2LFxuICAgICAgMjE1LFxuICAgICAgMTgsXG4gICAgICAxMDAsXG4gICAgICAyMyxcbiAgICAgIDIwOCxcbiAgICAgIDE2LFxuICAgICAgMjQ2LFxuICAgICAgMzgsXG4gICAgICAxNzksXG4gICAgICAzNCxcbiAgICAgIDEwMSxcbiAgICAgIDEzOCxcbiAgICAgIDEzNCxcbiAgICAgIDc3LFxuICAgICAgMjEsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICA4MixcbiAgICAgIDE0NixcbiAgICAgIDQ4LFxuICAgICAgMTA3LFxuICAgICAgMjUyLFxuICAgICAgMjI5LFxuICAgICAgMTg4LFxuICAgICAgNjgsXG4gICAgICAyMzgsXG4gICAgICAxOTQsXG4gICAgICAxMzgsXG4gICAgICAxNDgsXG4gICAgICA5MixcbiAgICAgIDEwMSxcbiAgICAgIDE5NSxcbiAgICAgIDE3NSxcbiAgICAgIDE4NixcbiAgICAgIDE1MSxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaV1FaOFRXN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2lsZW50IGtpbGxlclwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Pa3Yvb0RFTmJlcmIwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGhqWmVQTlZHSXhIQnY4WE9wZCt4bFBMeHdESmRweUZPMThNV3k0bEJSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRbjhxM0pmL3U2T2ZFUXZpY2R6enN6WHNsTWdsNHRJRk5ZQ3c5OGI0dUVpRWYwMXVpZE8vYisxYkJ4N3gwdXBESVlLWVVkamN4a1lGNkF2RGdtTVFDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjQkhsK2RxOGdzaVpJNCs5QjVFQWMwZ25NVjVCaU0yRkNMUi9qNitKUjdYLzZraGw3MDRXSlduQnJDYUF1cENIQ21wSncxN3lobyswZnNHK01tS1FnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzkyODg0MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLM2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUszbC5qc29uIjogIntcImtleURhdGFcIjpcImcvS2hXWDNCVXpLbi8wN1BoU0pxdDFNZkI2Q3AzbVBsV3kwM05xMVNSSzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2MjE5NTc5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM5Mjg4Mjk1Nzk1XCJ9Igp9"  // PUT your SESSION_ID 


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
