import DiscordJS, { Intents, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client =  new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    
    ]
})

client.on('ready', () => {
    console.log('ELE ESTÁ VIVO!');
})

///FUNÇÃO
let resposta: string[] = []
const bot = () => {

    const cards = ['diamond', 'spades', 'heart', 'club'];
    let currentCard
    
    if (currentCard != 'spades'){
        while (currentCard != 'spades') {
            currentCard = cards[Math.floor(Math.random() * 4)];
            resposta.push(currentCard);
        }
        }
    else (currentCard != 'spades'); {
        console.log(resposta);
        
    
        }
        return resposta;
        }


client.on('messageCreate', (message) => {
    if (message.content === '!botmerda') {
        bot();
        message.reply(`${resposta}`);
        resposta.splice(0, resposta.length);
        
    }
})

///TOKEN
client.login(process.env.TOKEN)
