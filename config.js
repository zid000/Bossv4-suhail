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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_12_01_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMbTNyWk1DZ0ZCdE1SSXZ6MVFtMjAzazhLWlQ5K2FEVjVnT0dFMUZaMlRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRVUdkQWxVcVFBdV9Xd0gxcDZXWjVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyZDM2YzZjLWNlNDEtNDFhMS1iMmNkLWJiMzhmYzg1MDRkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDI0MixcbiAgICAgIDE5MSxcbiAgICAgIDE0MixcbiAgICAgIDQ4LFxuICAgICAgMTIyLFxuICAgICAgMzksXG4gICAgICAyMjUsXG4gICAgICAxLFxuICAgICAgMTAyLFxuICAgICAgMTgzLFxuICAgICAgMTUwLFxuICAgICAgNjMsXG4gICAgICAyMzcsXG4gICAgICAxNzMsXG4gICAgICAyNixcbiAgICAgIDE3OCxcbiAgICAgIDU4LFxuICAgICAgNDMsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjQzLFxuICAgICAgMTk1LFxuICAgICAgNDAsXG4gICAgICAyMjgsXG4gICAgICA0NixcbiAgICAgIDE1MixcbiAgICAgIDEzOCxcbiAgICAgIDcwLFxuICAgICAgMTgxLFxuICAgICAgMTk1LFxuICAgICAgMzksXG4gICAgICAxODEsXG4gICAgICA5MyxcbiAgICAgIDUxLFxuICAgICAgOTIsXG4gICAgICA2NSxcbiAgICAgIDcyLFxuICAgICAgMTg1LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNYUUxNSDNMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzaWxlbnQga2lsbGVyXCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdrdi9vREVNeTkyYndHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUaGpaZVBOVkdJeEhCdjhYT3BkK3hsUEx4d0RKZHB5Rk8xOE1XeTRsQlJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNzWWFWU3gwRVYxSXdxcTlJdGo3Yk1QQTRVMGZvcHJsNEF6SjRJcklKQTBzeFZhSEc5S3ltVDJHM0tjVFRBQmdPeVFjN0tBQUt3VnJxcnZxNlhEb0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNNZWt6dUFlNzBVYUNzQTV6MVVablArY3ViUmZZSFJ3anpFaENSelY3Q3JQMElvdEZoUFE3M1VZNzRDSkR1VWcraUJwUlMvVHVRVE5qeXFlTUZkSGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzkwNzkyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh1U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHVTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXE2TzZwNDBIZEVLS0RWZmI1elZhWU5FRU9Wc2FqR1VWVy9KR3k0TlRGND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDYyMTk1NzkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzc5MDc5MjM3NzhcIn0iCn0="  // PUT your SESSION_ID 


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
