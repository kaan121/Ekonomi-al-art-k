const codework = require("discord.js");

exports.run = (client, message, args) => {
  const codework1 = new codework.MessageEmbed()
    .setAuthor("Airla Of Economy", client.user.avatarURL)
    .setColor("BLACK")
    .setTitle("**Airla Of Economy**") //BURAYA BOTUNUZUN ADINI YAZIN
    .setDescription()

    .addField(
      `
> ** !çaliş ** \n
> ** !çal ** \n
> ** !market ** \n
> ** !satın-al ** \n
> ** !sat ** \n
> ** !bitcoin ** \n
> ** !soygun ** \n
> ** !blackmarket ** \n   

    
    
    `
    )

    .setFooter(` Tüm hakları saklıdır.`);

  message.channel.send(codework1);
};
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: ["ym"],
  permLevel: 0,
};
exports.help = {
  name: "yardıım",
  description: "yardım menusüke parçaliyürüzke pompake ",
  usage: "yardım",
};
