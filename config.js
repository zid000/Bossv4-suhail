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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_27_01_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5aVo4WjNWcDZmL3V1U2xoRXlmNHM3OWNDRldhcVJ6V2Q5Tlo2MTJ3SEtRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDgwNjIxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEE0MUY0MkVCRjFCNjZGN0Y1NkQzQjg0RTI3N0Y3RTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM2OTU4NDY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RkQ3MkZDMDQ0MERGMjkwN0UxNDJBODdEMDc1MDFEQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzY5NTg0NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOEw2ZzBia1FRNi1PY2pvZ2tsZDJod1wiLFxuICBcInBob25lSWRcIjogXCI3YTIzMGQ2Ni1mYWY3LTQ1NGUtOTYzMy0xNzBiMzkxZDc3ODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTg5LFxuICAgICAgNCxcbiAgICAgIDE1MSxcbiAgICAgIDM5LFxuICAgICAgOTEsXG4gICAgICAyMTksXG4gICAgICAxNjcsXG4gICAgICAxNDUsXG4gICAgICA1MSxcbiAgICAgIDE5MSxcbiAgICAgIDExMCxcbiAgICAgIDEyOCxcbiAgICAgIDIyMyxcbiAgICAgIDIxNSxcbiAgICAgIDE3OCxcbiAgICAgIDczLFxuICAgICAgMzMsXG4gICAgICAxMDAsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMDksXG4gICAgICA0NyxcbiAgICAgIDEzMSxcbiAgICAgIDEwNyxcbiAgICAgIDI0MCxcbiAgICAgIDI1MyxcbiAgICAgIDE3NCxcbiAgICAgIDEzNixcbiAgICAgIDEzNyxcbiAgICAgIDE2MSxcbiAgICAgIDEzMCxcbiAgICAgIDMsXG4gICAgICAxNixcbiAgICAgIDY5LFxuICAgICAgMjQ2LFxuICAgICAgMjQ0LFxuICAgICAgMjI1LFxuICAgICAgMTc3LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwyUjJQTEFXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+FovCfhbrhrYTwnYSf4omb4oOd8J2ZjuKBscuh4bWJ4oG/4bWX4L+Q8J2ZhuKBscuhy6HhtYnKs/CUl4Dig59cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT0hzZEFFRVB6RG43d0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkh3cURWRWVhaFBpbFNUaEJHVVM0NTYzUFdtMkJTbDQyM1gxWFEvVkhWbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzJ5WE5HLy9zbkpVS1dhVWE0SlBudXQzNXAwVjY5dEZDTlBYVkJpTUtFQVlxOGhvTjFGeXpnM1Fjei9WdjEwR3ZkU01IaFlSTkdSeGcraDMzSWpsRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVhYSi9QTVJlUmpnR25QZndOZCtNN2hQV1k5cnhEUjhDRUk1WjZFdGhubi9OTURndTVwNVMrOFdCQ0R5M3ZhbzVMclhiSCszejBOYzJSY1pTejZMQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzY5NTg0NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VcC5qc29uIjogIntcImtleURhdGFcIjpcIlhKZHpiT0lhcktFcDBFajVyd1FJMWpaSXRzK0xhNWZzd1VkWDFnNDdIdXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0MjMxNzgxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM2OTU4NDY1MDA0XCJ9Igp9"  // PUT your SESSION_ID 


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
