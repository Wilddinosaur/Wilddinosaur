const Discord = require("discord.js")
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = process.env.token;
const welcomeChannelName = "안녕하세요"
const byeChannelName = "안녕히가세요"
const welcomeChannelComment = "안녕하세요!"
const byeChannelComment = "안녕히가세요. 나중에 또 봐요."
const roleName = "게스트"

client.on("ready", () => {
  console.log("켰다.")
})

client.on("guildMemberAdd", (member) => {
  const guild = member.guild
  const newUser = member.user
  const welcomeChannel = guild.channels.cache.find((channel) => channel.name == welcomeChannelName)
  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n 봇 시험장 및 연구소`)
  member.roles.add(guild.roles.cache.find((r) => r.name === roleName).id)
})

client.on("guildMemberRemove", (member) => {
  const guild = member.guild
  const deleteUser = member.user
  const byeChannel = guild.channels.cache.find((channel) => channel.name == byeChannelName)

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n 봇 시험장 및 연구소`)
})

client.on("message", (message) => {
  if (message.author.bot) return

  if (message.content == "히히") {
    return message.reply("이히")
  }

  if (message.content.startsWith("@공지")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      let contents = message.content.slice("@공지".length)
      message.member.guild.members.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(`<@${message.author.id}> ${contents}`)
      })

      return message.reply("공지를 전송했어요!")
    } else {
      return message.reply("채널에서 실행해줘요!")
    }
  }
})

function checkPermission(message) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> 너 권한 없어 안돼, 돌아가`)
    return true
  } else {
    return false
  }
}

client.login(token)

console.log("hello Wild_dinosaur");

if(message.content == `시안 주사위`) {
  const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const Response = Math.floor(Math.random(1) * number.length);

const Response = Math.floor(Math.random(2) * number.length);

message.channel.send(`뭐가 나오셨어요?`) 
}
