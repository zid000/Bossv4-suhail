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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_01_02_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1LFxuICAgICAgICA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUMVJVUlFFaHNhU0VQaVhWODZrcEhYOGVKeElTOHNHWkN0bDdHOWQ0QytNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDR3pCNzQzTFM5TzdhR0FaQXM2Qm9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjMGYwMWM3LWExOTgtNDc3Ni1iNmQ3LWJmY2EyY2U5NjIzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAxNjMsXG4gICAgICAxOTUsXG4gICAgICA2NyxcbiAgICAgIDE1NCxcbiAgICAgIDM2LFxuICAgICAgMTE5LFxuICAgICAgMjQ4LFxuICAgICAgMjUwLFxuICAgICAgMjI3LFxuICAgICAgMTE1LFxuICAgICAgMTQ5LFxuICAgICAgNTIsXG4gICAgICAxNDEsXG4gICAgICAyMjYsXG4gICAgICAzOSxcbiAgICAgIDE3OCxcbiAgICAgIDEwMyxcbiAgICAgIDgwLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDEyMixcbiAgICAgIDExNyxcbiAgICAgIDIzMSxcbiAgICAgIDE5LFxuICAgICAgNzQsXG4gICAgICAxNjUsXG4gICAgICAxNjQsXG4gICAgICA1NCxcbiAgICAgIDIzNSxcbiAgICAgIDM5LFxuICAgICAgNjIsXG4gICAgICA1MixcbiAgICAgIDQ3LFxuICAgICAgNDUsXG4gICAgICA2MixcbiAgICAgIDEyMyxcbiAgICAgIDIzMyxcbiAgICAgIDE2OSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUEFHSFc2Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNzUrZFVDRU5YTHdiMEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVFllNXAzOFg3SmxSd3lIa0E2WE9VSU5QSFNkZnlYRnQ2b3lRUEpFbzIwQUJnT01XRDhZdENTMXV4SksreEhaWllEeE5yLzV4UExBSEUzeTlpeXBFQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMW5iVnMwaExMQWxXTURQYUM0eTBPR3diVVo4ZUhYUk5Fank5U0t3c3BGUUsxNWZudWZFVWttT2VsSjlyM1NxeUpsdDV3aWhmU2J6OEt3TWVCaDNqaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTYxMzY1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9wNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3A2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiM2R3K3NGc0w3dndPL1FqU0E1Uk5yKzN1SmdCTUUyZ1FTTng2MHpteDdGdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk2MDgyMTc1ODJcIn0iCn0="  // PUT your SESSION_ID 


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
