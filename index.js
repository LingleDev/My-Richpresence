/* eslint-disable no-console */
const DiscordRPC = require('discord-rpc');
const ClientId = '405503552895713291';
DiscordRPC.register(ClientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' }),
startTimestamp = new Date();

const presence = {
     0: {
          image: "fhg_discord",
          text: "FreakingHulk Gaming Fan Discord",
          text2: "https://discordapp.com/dcTXqrp"
     },

     1: {
          image: "hulks_group",
          text: "Hulk's Group",
          text2: "Join Hulk's Group, a ROBLOX Group that makes excellent clothing!!!"
     },

     2: {
          image: "cvr",
          text: "Creator of",
          text2: "Cops VS Robbers, go see it!!!"
     },
	 
	 3: {
          image: "roblox_studio",
          text: "I develop on ROBLOX!",
          text2: "Maybe ask me some questions?"
     }	 
};

let presenceval = 0;
function setActivity() {
     if (!rpc) return;
     setInterval(() => {
          rpc.setActivity({
               details: presence[presenceval].text,
               state: presence[presenceval].text2,
               largeImageKey: presence[presenceval].image,
               startTimestamp,
               smallImageKey: 'fhg',
               smallImageText: 'FreakingHulk Gaming#6545',
               instance: false
          });
		  presenceval++; 
		  if (presenceval > 3) {
               presenceval = 0;
          }   
     }, 20000);
}

rpc.on('ready', () => {
     console.log(`Ready!`);
     rpc.setActivity({
          details: "Loading...",
          startTimestamp: new Date(),
          largeImageKey: `fhg`,
          instance: false
     }); 
     setActivity();
});

rpc.login(ClientId).catch(console.error);
