const codework = require("discord.js");

exports.run = (client, message, args) => {
  const codework1 = new codework.MessageEmbed()
    .setAuthor("Crazy Of Economy", client.user.avatarURL)
    .setColor("RANDOM")
    .setTitle("****") //BURAYA BOTUNUZUN ADINI YAZIN
    .setDescription(
      `                 
 **!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!çantam\`
`
    )

    .addField(
      "💸 Para komutları",
      `
Kolay para kazanma komutları;
\`çalış\`- \`çal\`- \`market\`- \`satın-al\`- \`sat\`- \`bitcoin\`- \`soygun\`- \`blackmarket\`
`
    )

    .addField(
      "🤖 Başlangıç",
      `
Bot komutları;
\`çantam\`- \`param\`- \`cüzdan\`- \`transfer\`- \`hesap-oluştur\`- \`bilgiler\`- \`banka\`
`
    )

    .addField(
      "Minecraft komutları",
      `
Kasarak para kazanma komutları;
\`zindan\`- \`maden\`- \`orman\`- \`zindan-sat\`- \`odun-sat\`- \`maden-sat\` 
`
    )

    .addField(
      "🎡 Casino komutları",
      `
Kasino para kazanma komutları;
\`slots\`- \`balık-tut\`
`
    )

    .addField(
      "🛠️ Ayarlar",
      `
Ayarlama yapmanız gereken komutları;
\`soygun-log\` 
`
    )

    .addField(
      "🤖 Bot komutları",
      `
Bot komutları;
\`davet\`- \`istatistik\`- \`ping\`
`
    )

    .addField(
      "🕘 Süreli komutlar",
      `
Süreli para komutları;
\`kredi\`- \`günlük-para\`
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
  name: "yardım",
  description: "yardım menusüke parçaliyürüzke pompake ",
  usage: "yardım",
};
