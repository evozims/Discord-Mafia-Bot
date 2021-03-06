const Discord = require('discord.js');
const mafiaBot = new Discord.Client();

//When bot is ONLINE, do events:

mafiaBot.on('ready', () => {
  console.log('Bot is now online.'); //shows in console
});

//Welcome message

mafiaBot.on("guildMemberAdd", member => {
	let guild = member.guild;
	guild.defaultChannel.sendMessage(`Welcome to Rekkin Daily ${member.user}! Don't forget to read the rules.`);

});

//When bot is invited to a server

mafiaBot.on("guildCreate", guild =>  {
	guild.defaultChannel.sendMessage(`Greetings **${guild.name}**! I am Rekkin Mafia Bot and I was created by EvoZims! Please use --commands to get started. `); // owned by ${guild.owner.user}

});


//When user plays rocket league add RL role.

mafiaBot.on("presenceUpdate", (oldMember, newMember) => {
	let guild = newMember.guild;
	let playRole = guild.roles.find("name", "Rocket League");
	if (!playRole) return;

	if (newMember.user.presence.game && newMember.user.presence.game.name === "Rocket League") {
		newMember.addRole(playRole);

	} else 

	if (!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
		newMember.removeRole(playRole);
	}

});


//Prefix here!
const prefix = "--";

//BOT MESSAGE HANDLER BEGINS
mafiaBot.on('message', message => {

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);

	//logs all commands used.
	//console.log(command);
	
	let args = message.content.split(" ").slice(1);

	//Responds with current commands
	if (command === "commands") {
		message.channel.sendMessage(" ```md ") ;
		message.channel.sendMessage("My current list of commands are: **Commands, add, rng, rateme, coinflip, say, and ping. More coming soon.** ");
		message.channel.sendMessage("```");
	}

	//Simple addition
	if (command === "add") {
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce((p , c) => p + c);
		message.channel.sendMessage(total);
	}

	//Generates a random number from 1 - 10
	if (command === "rng") {
		var randomNumberBetween1and10 = Math.floor(Math.random() * 11) + 1;
		message.reply("The number you got is: " + randomNumberBetween1and10);
	}

	//Rate the user (basic)
	if (command === "rateme") {
		var randomNumberBetween1and10 = Math.floor(Math.random() * 11) + 1;
		message.reply("I'd rate you: " + randomNumberBetween1and10 + "/10");
	}

	//Say either heads or tails
	if (command === "coinflip") {
		var randomNumberBetween1and10 = Math.floor(Math.random() * 11) + 1;
		
		if (randomNumberBetween1and10 > 5) {
			message.channel.sendMessage("*Coinflip* ... **HEADS!**");
			}

		else 
			message.channel.sendMessage("*Coinflip* ... **TAILS!**");
		
	}

	//Repeats whatever comes after --say
	if (command === "say") {
		message.channel.sendMessage(args.join(" "));
	}

	//Response time
  	if (command === "ping") {
   	 	message.channel.sendMessage('pong! :D');
  	
  	}
  	//Dangerous shit that I don't know how to use.
  	if (command === "eval") {
  		if(message.author.id !== "117841096767176712") return;

  	} 

  	//ISAAC
  	if (command === "SL") {
  		if(message.author.id == "117841096767176712") {
  			message.channel.sendMessage("<@138205544610529280> SEXTION LEADER");
  		}
  	}
  	//START OF PRUNE COMMAND
  	if (command === "prune") {
  		message.channel.sendMessage("You know it would be cool if I could do that.");
  	}

  	//bottalking 
  	if (command === "bottalk") {
  		message.channel.sendMessage("Evo, go do your homework lmao.");
  	}

  	//emote practicing
  	if (command === "rlykim") {
  		message.channel.sendMessage("<:kimMAD:230919631576104960>");
  	}

  	//Certain command that has the specific role

  	/* if (command === "evo") {
  		let modRole = message.guild.roles.find("name", "Mods");
  		if (message.member.roles.has(modRole.id)) {
  			message.channel.sendMessage("")
  		} else {
  			message.reply("You don't have permission to use that command.");
  		}
  	} */

	}); // END OF MESSAGE HANDLER

mafiaBot.login('bot.token');

