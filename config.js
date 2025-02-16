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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_05_02_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUT0ZvanY3cWJXZ1djeFRteUREaE5kUzZDdnFOMnhEOGUxN01PNkVTSFlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlQk9UaXl5TFNlMkVTTEJ1dzJvVWpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkMGM5NTM4LTc3ODUtNGY5ZC05N2IyLWRjYWU2MGViZDYxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDk2LFxuICAgICAgNDEsXG4gICAgICA1MSxcbiAgICAgIDIwMSxcbiAgICAgIDgxLFxuICAgICAgMjM4LFxuICAgICAgMjAsXG4gICAgICAxNzMsXG4gICAgICAxNTYsXG4gICAgICAyNDEsXG4gICAgICAxMDMsXG4gICAgICAyNDQsXG4gICAgICAyMSxcbiAgICAgIDIwMSxcbiAgICAgIDYyLFxuICAgICAgMTI1LFxuICAgICAgMjksXG4gICAgICAyMjQsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDI1NSxcbiAgICAgIDE3MSxcbiAgICAgIDE3MyxcbiAgICAgIDExOSxcbiAgICAgIDU5LFxuICAgICAgMTc0LFxuICAgICAgMjIxLFxuICAgICAgMTA4LFxuICAgICAgMTU4LFxuICAgICAgMjI2LFxuICAgICAgMTgsXG4gICAgICAyNTIsXG4gICAgICAxNzksXG4gICAgICAxNzQsXG4gICAgICAxNTYsXG4gICAgICAyNTIsXG4gICAgICAyMTksXG4gICAgICA1MSxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxMzhHTFdRVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRDUrZFVDRUxLY3hyMEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQm85aHpSZVAzcXNPb0xWYWZjY2oxWXZiUHlYRkp4NDU4MldVUDM1a1h6RXJEL25WSUxlZGo4K2pnYXdFLzlsekNZYlZxbVFEeVk3RkFYVkxxSEJCQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmQ3ajhQVE5VdHBHN0NHTmtrSTljbDJIclZEWW9tWW1QeTNTVUdlcFFxaHRvbC9maFRVTTl3QUQvQTFRTThXMnJZSUNId1RBQTFGU1p2RFhXSWZhQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTY4OTUyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9xQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3FDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYVhIS0p5OW9qb0tYNGxiTXVIYXNLVWZzcVdOekI3ME9xZkdNd0M2QVk4RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4NDcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk2ODkxNTY0NTdcIn0iCn0="  // PUT your SESSION_ID 


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
