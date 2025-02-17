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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_13_02_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDQsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjloZFRFSXo4V2thVGRtbVFKRE9vUlVoSkM3VmxxQVkrOFVTOHh0T1M1ZkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdCd1ctSDZ2UVNlS0ZNMVVteWo5VFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFhNGMxZmQtN2U0Ny00MGFkLThiNGYtNzQ5ZTJkNDNmOTEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDEyNixcbiAgICAgIDc2LFxuICAgICAgMzQsXG4gICAgICAxODgsXG4gICAgICAyMjcsXG4gICAgICAxMzgsXG4gICAgICAxNjgsXG4gICAgICAxNzcsXG4gICAgICAxNTcsXG4gICAgICA1MSxcbiAgICAgIDIzNCxcbiAgICAgIDM5LFxuICAgICAgMjMwLFxuICAgICAgNjUsXG4gICAgICA5MCxcbiAgICAgIDEyMCxcbiAgICAgIDE1LFxuICAgICAgMzAsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICA0NixcbiAgICAgIDE4MixcbiAgICAgIDIxMyxcbiAgICAgIDIwMyxcbiAgICAgIDE0MCxcbiAgICAgIDg4LFxuICAgICAgMjUyLFxuICAgICAgMTc5LFxuICAgICAgMTYyLFxuICAgICAgMTkwLFxuICAgICAgMjQ1LFxuICAgICAgMTA0LFxuICAgICAgOTAsXG4gICAgICAxNzcsXG4gICAgICAyNyxcbiAgICAgIDEwNixcbiAgICAgIDE0MCxcbiAgICAgIDEwNixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZGVlZNTjRNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNuk2YDZgOCjttmA2YDYr9uMINmF2YDZgNmE2YDZgNqpIFxcbuKBuVxcbsKyXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcbvCdkIvwnZCE8J2QhvCdkITwnZCN8J2QgyDwnZCI8J2QjfCdkJLwnZCI8J2Qg/CdkITigbDCucKyXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01INStkVUNFTHFYekwwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJdmFhS282UjdNTSt4bmJ0SlhtWTFwWm8yWHFrSUNyOUdEVmprV2pycEFtZTBvVmVsVkJORmxMVy9CVWJxcVQ2ZVgyTVBCdUROTWRTVzBvRnU4K1JEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhZm5QUnFKTXFocm1YamVZck9OU2xpMkhDb0kzU0JsUzRkS2p4ZnRIMnE3RjRLcFQ3Q0dnU0ZwM0FnZ0lUVEgzZkNteGpvUC9BbDRpVWx0OVJvSnVpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5Nzg3MTk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3FDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPcUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhWEhLSnk5b2pvS1g0bGJNdUhhc0tVZnNxV056QjcwT3FmR013QzZBWThFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjg0NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczOTY4OTE1NjQ1N1wifSIKfQ=="  // PUT your SESSION_ID 


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
