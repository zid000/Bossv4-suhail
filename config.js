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


global.devs = "923208501792" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923208501792";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_16_01_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMyxcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUUp5WDRGck11dmZlb3dhU1d3bndBVGl6RzB1emJSWlNidHBWZXpoNkd2ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMDg1MDE3OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxMzhFNUJBNUI5MDA1MjcxODIxM0Q0MUE3RThDMTcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNzU2MjU2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyX003cnhyalJ1R21RYjRuNmQ2X05RXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjNzhlNTk0LTZmMjEtNDMxMC1hMWYwLWFkYzJiYjJkM2M0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxOTYsXG4gICAgICA3LFxuICAgICAgMTg3LFxuICAgICAgMjM3LFxuICAgICAgNSxcbiAgICAgIDM1LFxuICAgICAgMTM4LFxuICAgICAgODQsXG4gICAgICAxMTUsXG4gICAgICAyNDgsXG4gICAgICA1LFxuICAgICAgNzYsXG4gICAgICAxNjgsXG4gICAgICAyMzksXG4gICAgICAyNTQsXG4gICAgICA2MyxcbiAgICAgIDIzLFxuICAgICAgODMsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxMjgsXG4gICAgICAxMDEsXG4gICAgICAyMTcsXG4gICAgICAyMyxcbiAgICAgIDE0NyxcbiAgICAgIDEsXG4gICAgICA1MixcbiAgICAgIDE1LFxuICAgICAgMTcwLFxuICAgICAgMTM5LFxuICAgICAgNDEsXG4gICAgICAyNDgsXG4gICAgICAxMixcbiAgICAgIDIyNCxcbiAgICAgIDE0LFxuICAgICAgNTYsXG4gICAgICAyMDgsXG4gICAgICAyMjUsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEE5NkU3V0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwODUwMTc5Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwia2hhblwiLFxuICAgIFwibGlkXCI6IFwiMzcxMDA0OTc5NDA1MTM6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNK2t2L29ERU1HenhMd0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRoalplUE5WR0l4SEJ2OFhPcGQreGxQTHh3REpkcHlGTzE4TVd5NGxCUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMUNXbG1mZHAxSmtmZVRDRnJUOURwcTFnczJaK2RqSUNSTEcxOExPbzAxSWlwTDlQNmlMbCtlWFgrOG8rS2Fad3pxRGN2ZGJ4TE1PMXN5QU5oQWlKQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0NUa0lpMW5saWxndkpXK0MvZVpYMHBmQ3FZQ0NQT0lYYjFOd3RQQzczNUltRFAvR2tlc211STNGcktMVm5lSEl1dnF2NzZpcktKZGJMZTlNNW8zQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjA4NTAxNzkyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzc1NjI1NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFId21cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh3bS5qc29uIjogIntcImtleURhdGFcIjpcIjlnNnV5Qk1rMlhrMU1QRWhzNlk2emVONi8ydm8yQytOU0RIRk9HbExEQU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2MjE5NTc5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNjUxOTI3MDk2N1wifSIKfQ=="  // PUT your SESSION_ID 


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
