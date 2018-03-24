/* eslint-disable no-console */
const DiscordRPC = require('discord-rpc');
const ClientId = '405503552895713291';
DiscordRPC.register(ClientId);
const rpc = new DiscordRPC.Client({ transport: 'ipc' }),
startTimestamp = new Date();

const presence = {
     0: {
          image: "discord_logo",
          text: "RHG's Discord",
          text2: "discord.gg/WUTAaSW"
     },

     1: {
          image: "lua",
          text: "I know LUA Very well!",
          text2: "Please ask questions!"
     },

     2: {
          image: "mortalminigameslarge",
          text: "Creator of",
          text2: "Mortal Minigames, Go see it!"
     },
	 
	 3: {
          image: "robloxstudio_logo",
          text: "I play ROBLOX!",
          text2: "Sorry haters!"
     },
	 
	 4: {
          image: "mortalminigameslarge",
          text: "Creator of",
          text2: "Mortal Minigames, Go see it!"
     },
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
               smallImageKey: 'rhg',
               smallImageText: 'RHG#0822',
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
          largeImageKey: `rhg_clean`,
          instance: false
     }); 
     setActivity();
});

rpc.login(ClientId).catch(console.error);