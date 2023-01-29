const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const cheerio = require("cheerio");

client.on("ready", () => {
  console.log(`Bot has started as ${client.user.tag}!`);
});

client.on("message", async message => {
  if (message.content === "!meme") {
    const url = "https://www.reddit.com/r/okbuddyretard/";
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const firstPost = $(".title").first().text();
    message.channel.send(firstPost);
  }

  if (message.content.startsWith("!play ")) {
    const args = message.content.split(" ");
    const query = args.slice(1).join(" ");
    message.channel.send(`Searching for ${query}...`);
    // Use the YouTube API to search for the song and get the video URL
    // Play the song using a music library like Discord.js-MusicBot
  }

  if (message.member.roles.cache.some(role => role.name === "califonian")) {
    message.channel.send("The commie has entered the realm!");
  }
});

setInterval(() => {
  client.channels.cache
    .get("<channel_id>")
    .send("!meme");
}, 33 * 60 * 1000);

client.login("<token>");
