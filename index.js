/* eslint-disable no-console */
const DiscordRPC = require('discord-rpc');
const ClientId = '405503552895713291';
DiscordRPC.register(ClientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' }),
startTimestamp = new Date();

const presence = {
     0: {
          image: "fhg",
          text: "FHG's Discord",
          text2: "https://discordapp.com/dcTXqrp"
     },

     1: {
          image: "hulks_group",
          text: "Hulk's Group",
          text2: "Join Hulk's Group, a ROBLOX Group that makes excellent clothing!!!"
     },

     2: {
          image: "fhg_training_thumbnail",
          text: "My game",
          text2: "I made FHG's Training Holo, go check it out!"
     },
     
     3: {
     	image: "roblox_studio",
        text: "I make games on ROBLOX!",
        text2: "Maybe ask me some questions?"
     },
   
     4: {
	image: "yt",
	text: "I have a youtube channel!",
	text2: "Go check it out! (link in profile)"
     },
     
     5: {
     	image: "sleeping",
	text: "I'm sleeping right now, so please don't ping me!",
	text2: "No, seriously. Don't. TALKING TO YOU, BANE!"
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
               smallImageText: 'FHGDev#0666',
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
