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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_35_02_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlluRFVJYXJSWVNnL0hRL01IM001QjhkdVpjeFVvQ3ZKRHRjSThZZnR0UVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm54bTFvNk1iVGR5Vzl1SllqenFiMVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmJmMzVlN2YtZmVjOS00NzNiLWJmYjktMzM0ZGZiODUxZWYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDIwMSxcbiAgICAgIDIyLFxuICAgICAgMzAsXG4gICAgICA0OCxcbiAgICAgIDYyLFxuICAgICAgNjIsXG4gICAgICAxNjcsXG4gICAgICAxMjcsXG4gICAgICAxMzYsXG4gICAgICAxNzYsXG4gICAgICAxMjMsXG4gICAgICAyMCxcbiAgICAgIDExMyxcbiAgICAgIDI4LFxuICAgICAgMTQzLFxuICAgICAgMjE1LFxuICAgICAgMTEzLFxuICAgICAgNixcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDksXG4gICAgICAyMTcsXG4gICAgICA1OCxcbiAgICAgIDEzMixcbiAgICAgIDI0OCxcbiAgICAgIDI1NCxcbiAgICAgIDE3MixcbiAgICAgIDIzNixcbiAgICAgIDI1MSxcbiAgICAgIDE2NyxcbiAgICAgIDMsXG4gICAgICAyMDcsXG4gICAgICA4OSxcbiAgICAgIDI0LFxuICAgICAgMTg1LFxuICAgICAgNTMsXG4gICAgICAzMSxcbiAgICAgIDIwMyxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUTlUMTRMTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDbpNmA2YDgo7bZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqSBcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG7wnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8J2QiPCdkI3wnZCS8J2QiPCdkIPwnZCE4oGwwrnCslxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMLzUrZFVDRU1LQnhiMEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOGFqSDNBbTUvYk1QV01rRHlqTFZFYTJaWW5iWUZaZ01RM3I1RG1TWEJOZTB1eENvREVSblJmeHVlUDNXRzJ3S0lxOERwVjc1R0JzMENyZkZqbCt5REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREozNjJzaDhUOWFXYUtqQTBEK1VFdjhvbmRDSFY2VnNVQy9JNnROUTRxZmxNUFI0SmZIZnA3c3JHS3pkQjBSS1VUVm91Vk1pT083Zy9aS1gvYVJ6Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczOTY2OTcwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9wNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3A2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiM2R3K3NGc0w3dndPL1FqU0E1Uk5yKzN1SmdCTUUyZ1FTTng2MHpteDdGdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY4NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzk2MDgyMTc1ODJcIn0iCn0="  // PUT your SESSION_ID 


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
