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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_05_02_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTksXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgNixcbiAgICAgICAgODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5THQrK1pBOHlVVG1ZdTVXcHBwNXYwb091YW92VmJ3bzhqN2FCbnc1UmM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpMUs0M0Z1RFFsMnlyQkxoaGs4R2x3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU3ZWI1MmU0LTk0NTYtNGY1Ni04Y2ZhLTRhMTM2OWNjNzJmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgODEsXG4gICAgICA0NixcbiAgICAgIDQ4LFxuICAgICAgMzcsXG4gICAgICA1NSxcbiAgICAgIDE5NSxcbiAgICAgIDI1LFxuICAgICAgMTEyLFxuICAgICAgMjMsXG4gICAgICA2NCxcbiAgICAgIDExNixcbiAgICAgIDE5NyxcbiAgICAgIDkxLFxuICAgICAgNTgsXG4gICAgICAzNSxcbiAgICAgIDEyMyxcbiAgICAgIDEwMixcbiAgICAgIDIsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAyMTMsXG4gICAgICA5NCxcbiAgICAgIDE5LFxuICAgICAgMjIsXG4gICAgICAzNyxcbiAgICAgIDE1NCxcbiAgICAgIDI1MyxcbiAgICAgIDI5LFxuICAgICAgNTcsXG4gICAgICAxNTYsXG4gICAgICAxMDgsXG4gICAgICA2MixcbiAgICAgIDIzMixcbiAgICAgIDExNyxcbiAgICAgIDQyLFxuICAgICAgMTYsXG4gICAgICAxMzcsXG4gICAgICAxNTcsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1Q3TEZRR1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA26TZgNmA4KO22YDZgNiv24wg2YXZgNmA2YTZgNmA2qkgXFxu4oG5XFxuwrJcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxu8J2Qi/CdkITwnZCG8J2QhPCdkI3wnZCDIPCdkIjwnZCN8J2QkvCdkIjwnZCD8J2QhOKBsMK5wrJcXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC81K2RVQ0VMbVN3NzBHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlY3YjkyYWUyZ2VDY004UndPVVMrTkJNWDN1cytWUm9WRndrM2J2N1hTSnEvV3M4NUlLL2JQQVU0SFR3SkJna0dHMmthdzF3UWwzNytqUXVlTVVuTEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdQejZhdDB6NlRNTGFndVFZQ2FDbU5qdTE4VnJKNytKMGtJcTN2ZnVFbUZlbkNFQ2MvN1N2YlRiVC9WUlVocDR0Wld1cyt3YjM2UlBOZWdJU29sNmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzk2MzkxMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPcDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9wNi5qc29uIjogIntcImtleURhdGFcIjpcIjNkdytzRnNMN3Z3Ty9RalNBNVJOciszdUpnQk1FMmdRU054NjB6bXg3Rnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2ODQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM5NjA4MjE3NTgyXCJ9Igp9"  // PUT your SESSION_ID 


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
