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


global.devs = "923247116683" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_39_02_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDksXG4gICAgICAgIDc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5THROMUljUXBvQ05oZkFVaUcyWEt2VEMvWUR5bjY1S2lHeFFuOVBMV0ZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjdVhROER6b1JaaWRxdWVER0o2bWR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNlY2RjOGJhLTMyZjAtNGQxYy1hYWFjLWU5YTY1N2QyMDBmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAxMjUsXG4gICAgICAxMTMsXG4gICAgICA2MSxcbiAgICAgIDE2NyxcbiAgICAgIDMwLFxuICAgICAgMjMsXG4gICAgICAyNTUsXG4gICAgICAzMCxcbiAgICAgIDExMyxcbiAgICAgIDI0NixcbiAgICAgIDE2NSxcbiAgICAgIDEwLFxuICAgICAgMjQwLFxuICAgICAgMjQ4LFxuICAgICAgMjQwLFxuICAgICAgMjI4LFxuICAgICAgNzEsXG4gICAgICAyNyxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDM3LFxuICAgICAgOTksXG4gICAgICAxNSxcbiAgICAgIDQyLFxuICAgICAgMzAsXG4gICAgICAxMTcsXG4gICAgICAyMTEsXG4gICAgICAxMyxcbiAgICAgIDE1LFxuICAgICAgMTQ1LFxuICAgICAgNjYsXG4gICAgICAyMzgsXG4gICAgICA1OCxcbiAgICAgIDk1LFxuICAgICAgMTU1LFxuICAgICAgMzcsXG4gICAgICA5MixcbiAgICAgIDEyNSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLVjNUOVlQSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNSDUrZFVDRUlqNHpMMEdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQlFZcXdSYnQ1QkhDaEk4YmdyZ1pBZVFiVlNHQXdiODI1NklJVy9FWGxtYXVGMUxWdk03UFVHUzc4RDM2YXBGanp5eExVZWhGNUNzdURzVG9qa3hjQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidFAxc3BSalBHQUM1YzNTd2hMSlU5aFV5NjA1N0N0VmM0czdUWjdkbGFNM0xRSWtBbzZZVDVxSWVxcGtqcUlodkFJL1FHdjA2TldGTUhUU00wbDFwQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTc5OTU2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9xQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3FDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYVhIS0p5OW9qb0tYNGxiTXVIYXNLVWZzcVdOekI3ME9xZkdNd0M2QVk4RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4NDcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk2ODkxNTY0NTdcIn0iCn0="  // PUT your SESSION_ID 


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
