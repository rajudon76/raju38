const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_28_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZGQXBncXEzV1dqYVVqVzFXb2RIVmtBNWE3NWFHNE5UYzJBb0cySXRNSVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOTFGMjdGNkE1Njk5MDc3QTg0QkY1MTMzQUU0RTcwN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjUxMTQ0OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYwQTk2RDExQTBGNTA1ODdCOUZERTQ3RjlCRkFBRkY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTExNDQ5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1YUVUcG5PRFRlbUVPejB4WHVJX3FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxZDA2ZTM2LTY1NTQtNGQ2ZC1iOTkyLTM4NDJmNTkzOTZkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDEyNixcbiAgICAgIDEzMixcbiAgICAgIDEwNCxcbiAgICAgIDE4OSxcbiAgICAgIDE2NCxcbiAgICAgIDE0OCxcbiAgICAgIDksXG4gICAgICA0OCxcbiAgICAgIDE2MCxcbiAgICAgIDMwLFxuICAgICAgMTksXG4gICAgICAyMjEsXG4gICAgICA3NSxcbiAgICAgIDMzLFxuICAgICAgMTg2LFxuICAgICAgMTA0LFxuICAgICAgMTk1LFxuICAgICAgNTMsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMjgsXG4gICAgICAzNixcbiAgICAgIDIyMyxcbiAgICAgIDIxLFxuICAgICAgMjgsXG4gICAgICAxNTIsXG4gICAgICA3MCxcbiAgICAgIDIxNixcbiAgICAgIDExNixcbiAgICAgIDEwNixcbiAgICAgIDk3LFxuICAgICAgNDEsXG4gICAgICAzLFxuICAgICAgNjEsXG4gICAgICAxNCxcbiAgICAgIDYxLFxuICAgICAgMTM1LFxuICAgICAgMjA3LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRNVjVBTkpTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlbvwnZaX8J2WlPCdlovwnZaK8J2WmPCdlpjwnZaU8J2Wl1wiLFxuICAgIFwibGlkXCI6IFwiMjU5NDg5NTc2MDA1ODc3OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZmNWFNSEVQWFF6TFlHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYVHR0K0ZmcloxZ1FNcVZETGtPeHdJcUZpSXY3eXd2aE04T1RYeitnZDE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkYzVlRGM1o5TmYvNTdnQ3Q3b2wvL0FVbzFGSldlVkVRdUhUNFF6ZXltcEcrNStZbHZyQWM4MVBvZFFsK0pDNGg5S2doYTU2MFVna21Ec0Q0MVYxUUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJMYkt6MWdBYTZES1NWK1A5V2d6THZNTHZNRXl3WnRrS09tejlJN3duTytmcTZ2b0YxNjh2Z0l2ZG1tN0c3ZnM0NVBoZnkxTTY2T050aCtpdG9sUWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTExNDQ4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlmaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWZoLmpzb24iOiAie1wia2V5RGF0YVwiOlwieDBsMnFDUVZocFI2SVUvNCtEK0ZXOEVGWnowbXRVUmlZTlpKNzR0SDVWOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU0MTA3Mzg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Raju",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
