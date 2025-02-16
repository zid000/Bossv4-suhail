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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_44_02_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0FKQmNnNW5HMHlwWXlicm9RRHhQeXJHSEpaa0Izb0dGM3dkVUx5S3hvOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnRaUTJmaWJRQW1wdjNORDh5THNOd1wiLFxuICBcInBob25lSWRcIjogXCJiNzZjMzk0Yy1mMjVhLTRkYmEtYjJmYy1iY2UwMDczNDEwMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA5NixcbiAgICAgIDEyLFxuICAgICAgODUsXG4gICAgICAxMCxcbiAgICAgIDQ2LFxuICAgICAgMjM1LFxuICAgICAgNjcsXG4gICAgICAxMDgsXG4gICAgICAyNixcbiAgICAgIDEzLFxuICAgICAgOTksXG4gICAgICAxOTUsXG4gICAgICA1NSxcbiAgICAgIDU1LFxuICAgICAgMjEsXG4gICAgICA5OSxcbiAgICAgIDgyLFxuICAgICAgMTc2LFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDExOCxcbiAgICAgIDksXG4gICAgICAyMjMsXG4gICAgICAxNjEsXG4gICAgICA1OSxcbiAgICAgIDEzNSxcbiAgICAgIDQsXG4gICAgICAyNDcsXG4gICAgICAxNTYsXG4gICAgICA4NCxcbiAgICAgIDI5LFxuICAgICAgMTg1LFxuICAgICAgMzcsXG4gICAgICAxNDEsXG4gICAgICAyMTgsXG4gICAgICAxODUsXG4gICAgICAzNCxcbiAgICAgIDM5LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0hUUlhITUJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUg1K2RVQ0VLZWN5YjBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJhS25sUjVYZDNkK1FBdVpmYm8raFZVUy96R3l6YUVJUDFOaFVtMUhma1psNmQ3dUtHQUl5OFdJR01kNWdmbFl4NkF2SzQ2ZWs2OFRtM01VN25jc0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlQvbmdyTU1YaXRzWWNYRWJqL0U4VkpPWVBIb2lEZWNaTGcveHM4cHVoUSs4eW9uVHRmQU9UbDhyUjBGbSthbUlyMlFuT0UzVnlrSjRwV01WSXh6akJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzk3Mzg2NjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPcUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9xQy5qc29uIjogIntcImtleURhdGFcIjpcImFYSEtKeTlvam9LWDRsYk11SGFzS1Vmc3FXTnpCNzBPcWZHTXdDNkFZOEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODQ3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM5Njg5MTU2NDU3XCJ9Igp9"  // PUT your SESSION_ID 


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
