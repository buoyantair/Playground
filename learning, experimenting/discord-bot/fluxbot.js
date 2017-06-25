const discord = require('discord.js');
const client = new discord.Client();


const sadwords = ["sad", "afraid", "this is getting worse", "omg im dead", "fail", "not working", "rip"];
const support = ["Aw, don't be sad", "It's alright, I'm always here for you!", ]

 client.on('ready', ()=>{
   console.log(`Logged in as ${client.user.username}!`);
 })



client.on('message', msg =>{
  // if(msg.content === 'ping'){
  //   msg.reply('pong!')
  // }
  sadwords.forEach(function(val){
      if(msg.content.search(val) > 0){
        msg.reply('Omg dont be sad');
      }
  })


})

client.login('MjA0OTk2OTMwMDkzMTg3MDcy.C9TFjA.ZMgFjbgLxrNJqBeTCwheL5n6xyg')
