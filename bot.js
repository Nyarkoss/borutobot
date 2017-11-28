const Discord = require('discord.js');

// VAR !

var bot = new Discord.Client();
var prefix = ("!");
var randnum = 0;

// READY 

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Rechercher des citations' , type: 0}})
    console.log("Bot Ready !");
});

// LOGIN 

bot.login(process.env.BOT_TOKEN);

// FONCTIONS

// FONCTION NARUTO

function naruto(min, max) {
    min = Math.ceil(1)
    max = Math.floor(8)
    naruto = Math.floor(Math.random() * (max - min +1) + min);
}

// FONTION GAARA

function gaara(min, max) {
    min = Math.ceil(1)
    max = Math.floor(7)
    gaara = Math.floor(Math.random() * (max - min +1) + min);
}

// FONCTION SHIKAMARU

function shikamaru(min, max) {
    min = Math.ceil(1)
    max = Math.floor(4)
    shika = Math.floor(Math.random() * (max - min +1) + min);
}

// FONTION ITACHI

function itachi(min, max) {
    min = Math.ceil(1)
    max = Math.floor(3)
    ita = Math.floor(Math.random() * (max - min +1) + min);
}

// FONTION KAKASHI

function kakashi(min, max) {
    min = Math.ceil(1)
    max = Math.floor(5)
    kaka = Math.floor(Math.random() * (max - min +1) + min);
}

// FONTION ROCK LEE

function rock(min, max) {
    min = Math.ceil(1)
    max = Math.floor(5)
    lee = Math.floor(Math.random() * (max - min +1) + min);
}

// FONTION HAKU

function haku(min, max) {
    min = Math.ceil(1)
    max = Math.floor(5)
    namatata = Math.floor(Math.random() * (max - min +1) + min);
}

// COMMANDES FUN 

bot.on('message', message => {
    if (message.content === "Naruto ?"){
        message.reply("oui ?");
        console.log('naruto uicmoi');
    }

})

bot.on('message', message => {
    if (message.content === "Naruto, comment va Boruto ?"){
        message.reply("Il va très bien merci.")
    }
})

bot.on('message', message => {
    if (message.content === "Naruto, que veut dire ナルト ?"){
        message.reply("ナルト veut tout simplement dire 'Naruto' en Japonais")
    }
})

// COMMANDES

// NEW 

bot.on('message', message => {
    if (message.content === "!new"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#04C6FF')
            .addField("Nouveautés", "Vous pouvez maintenant ajoutez vos citations !")
            .addField("Commandes", "Pour ajoutez une citation : !addcitation (votre citation), \n!citation, Pour faire apparaître une citation écrite par la communauté.")
            .addField(" /!\ Attention /!\ ", "Les citations de la communauté sont vérifier qu'une seul fois par mois, cela veut dire qu'il pourrais y avoir des citations qui peuvent heurter la sensibilité des plus jeunes.")
            .addField("Pour plus d'informations", "http://bit.ly/narubot")
            .setFooter("ナルト crée par @Boruto 👼#0275")
        message.channel.sendEmbed(help_embed);
        //message.reply("Bonjour, Je suis ナルト. Voici les commandes disponible : \n \n Si vous utilisez les commande suivante : \n \n !citation (nom du personnage), une citation aléatoire apparaitra ! \n !personnages, la liste des personnages disponibles apparaitra !");
        console.log('new');
    }
})


// !Presentation

bot.on('message', message => {
    if (message.content === "!presentation"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#D80000')
            .addField("Bonjour, Je suis ナルト", "Je suis un BOT qui cites aléatoirement les citations des personnages de l'anime Naruto.")
            .addField("Interaction", "Vous pouvez aussi me poser des questions, j'y répondrais velontié. (https://pastebin.com/Zt0TcEti)")
            .addField("Pour plus d'informations", "http://bit.ly/narubot")
            .setFooter("ナルト crée par @Boruto 👼#0275")
        message.channel.sendEmbed(help_embed);
        //message.reply("Bonjour, Je suis ナルト. Voici les commandes disponible : \n \n Si vous utilisez les commande suivante : \n \n !citation (nom du personnage), une citation aléatoire apparaitra ! \n !personnages, la liste des personnages disponibles apparaitra !");
        console.log('aide');
    }
})

// !AIDE

bot.on('message', message => {
    if (message.content === "!aide"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#FDDB01')
            .addField("Besoin d'aide ?", "Bonjour, Je suis ナルト. Voici les commandes disponible :")
            .addField("Si vous utilisez les commande suivante :", "\n \n &citation (nom du personnage sans majuscule), une citation apparaitra ! \n&personnages, la liste des personnages disponibles apparaitra !")
            .addField("Pour plus d'informations", "http://bit.ly/narubot")
            .setFooter("ナルト crée par @Boruto 👼#0275")
        message.channel.sendEmbed(help_embed);
        //message.reply("Bonjour, Je suis ナルト. Voici les commandes disponible : \n \n Si vous utilisez les commande suivante : \n \n !citation (nom du personnage), une citation aléatoire apparaitra ! \n !personnages, la liste des personnages disponibles apparaitra !");
        console.log('aide');
    }
})

// !PERSONNAGES

bot.on('message', message => {
    if (message.content === "&personnages"){
        var perso_embed = new Discord.RichEmbed()
            .setColor('#01FD22')
            .addField("Voici la liste des personnages disponible :", "- Naruto \n- Gaara \n- Shikamaru \n- Itachi \n- Kakashi \n- Lee \n- Haku")
        message.channel.sendEmbed(perso_embed)
        //message.reply("Voici la liste des personnages disponible : \n \n - Naruto \n - Itachi \n - Gaara \n - Rock Lee \n - Sasuke \n - Pain \n - Jiraya \n - Nagato \n - Obito \n - Shikamaru \n - Minato");
        console.log('perso');
    }
})

// CITATIONS

// CITATIONS NARUTO


bot.on('message', message => {
    if (message.content === "&citation naruto"){
        naruto();

        if (naruto == 1){
            message.reply("Si j'abandonne sa cause, je trahirai l'honneur qu'il m'a fait. Un jour, je deviendrai Hokage ! Et j'établirai la paix tu peux y compter ! \n \n - Naruto");
            console.log(randnum);
        }


        if (naruto == 2){
            message.reply("La douleur de la solitude est vraiment inhumaine. \n \n - Naruto");
            console.log(randnum);
        }

        if (naruto == 3){
            message.reply("Pour un ninja, l'important, c'est l'esprit d'équipe et la tenacité. \n \n - Naruto")
            console.log(randnum)
        }

        if (naruto == 4){
            message.reply("Je ne reviens jamais sur ma parole, c'est ça pour moi être un ninja ! \n \n - Naruto")
        }

        if (naruto == 5){
            message.reply("Dès le moment où quelqu'un pense à toi quelque part, cet endroit devient ton foyer. \n \n - Naruto")
        }

        if (naruto == 6){
            message.reply("Si c'est ça être sage, alors je préfère rester un idiot pour le restant de mes jours ! \n \n - Naruto")
        }

        if (naruto == 7){
            message.reply("Ce que j'aime ce sont les ramens ! Ce que je déteste c'est les trois minutes d'attente avant de servir les ramens ! Mon passe-temps favori c'est de comparer les bols de ramens entre eux ! \n \n - Naruto")
        }

        if (naruto == 8){
            message.reply("Je veux progresser pour devenir le plus grand ninja de mon village ! Pour que tout le monde reconnaisse enfin ma valeur ! \n \n - Naruto")
        }
    }
});    

// Citations Gaara

bot.on('message', message => {
    if (message.content === "&citation gaara"){
        gaara();

        if (gaara == 1){
            message.reply("J'étais devenu une relique du passé qu'ils souhaitaient tous voir disparaître. Jeune, je me suis demandé pourquoi j'existais. \n \n - Gaara")
        }

    if (gaara == 2){
        message.reply("Je ne me bats que pour moi, je n'aime que moi, et tant que je pense que les gens n'existent que pour que je ressente ça, le monde est merveilleux ! \n \n - Gaara")
    }

    if (gaara == 3){
        message.reply("La solitude est plus forte que la raison. \n \n - Gaara")
    }

    if (gaara == 4){
        message.reply("Je n'existe que pour tuer les autres, j'ai finalement trouvé une compensation à la crainte d'être assassiné à tout instant. \n \n - Gaara")
    }

    if (gaara == 5){
        message.replys("Peut-être que la compagnie d'une personne mauvaise est préférable à la solitude. \n \n - Gaara")
    }

    if (gaara == 6){
        message.reply("L'unique chose à faire est de rompre avec le passé par l'effort et la volonté. Je ne dois plus me réfugier dans la solitude ... C'est seulement comme ça qu'un jour peut-être, je serai reconnu ... \n \n - Gaara")
    }

    if (gaara == 7){
        message.reply("On peut très bien vénérer quelqu'un qui n'est pas du côté du bien. On peut même être conscient de cette noirceur... mais la préférer à la solitude. \n \n - Gaara")
    }

    }
});

// Citations Shikamaru

bot.on('message', message => {
    if (message.content === "&citation shikamaru"){
        shikamaru();

        if (shika == 1){
            messga.reply("Les femmes sont des plaies ... Capricieuses, Égoïstes, Râleuses ... Elles sont froides, sèches, calculatrices et en même temps extraordinairement mièvres et collantes. On ne sait jamais si elles s'entendent bien ou mal entre elles ... En plus, elles croient pouvoir manipuler tous les hommes ... En tout cas, c'est toujours un tas d'ennuis les femmes ... \n \n - Shikamaru")
        }

        if (shika == 2){
            message.reply("Ils est hors de question que je perde face à une fille, quelque soit son niveau. \n \n - Shikamaru")
        }

        if (shika == 3){
            message.reply("Je crois en la volonté du feu. \n \n - Shikamaru")
        }

        if (shika == 4){
            message.reply("Les hommes n'aiment pas les femmes minces, contrairement à ce qu'elles pensent ... En fait, ils aiment plutôt les femmes avec quelques formes ... Si tu vois ce que je veux dire. \n \n - Shikamaru")
        }

    }
});

// CITATIONS ITACHI

bot.on('message', message => {
    if (message.content === "&citation itachi"){
        itachi();

        if (ita == 1){
            message.reply("Les gens vivent en s'appuyant sur leurs convictions et leurs connaissances et ils appellent ça la réalité : mais le savoir et la compréhension sont des concepts si ambigus que cette réalité ne pourrait être alors qu'une illusion. \n \n - Itachi")
        }

        if (ita == 2){
            message.reply("Je continuerai d'être près de toi, comme le mur que tu devras franchir. \n \n - Itachi")
        }

        if (ita == 3){
            message.reply("Petit imbécile ... Si tu veux être en mesure de me tuer un jour ... Remplis ton cœur de ressentiment ! Hais-moi ! Sauve ta vie lâchement ... Fuis... Fuis ! Accroche-toi à la vie ... Et puis, quand tu posséderas la même pupille que moi ... Viens à moi ! \n \n - Itachi")
        }
    }
});

// CITATIONS KAKASHI

bot.on('message', message => {
    if (message.content === "&citation kakashi"){
        kakashi();

        if (kaka == 1){
            message.reply("Un bon ninja travaille d'abord en groupe. \n \n - Kakashi")
        }

        if (kaka == 2){
            message.reply("Ce que j'aime et ce que je déteste ne vous regarde pas, des rêves pour l'avenir bof je n'en ai pas beaucoup, quand a mes loisirs ils sont divers et varié. \n \n - Kakashi")
        }

        if (kaka == 3){
            message.replys("Soyez prêt à me tuer si vous voulez avoir une chance d'attraper ces clochettes... \n \n - Kakashi")
        }

        if (kaka == 4){
            message.reply("Dans le monde shinobi ceux qui transgressent les lois sont considérés comme des moins que rien, mais ceux qui ne se soucie pas de leur compagnons sont encore pires ! \n \n - Kakashi")
        }

        if (kaka == 5){
            message.reply("Ce n'est qu'une fois qu'on a perdu les choses qu'on se rend compte de leur importance. \n \n - Kakashi")
        }
    }
});

// CITATIONS ROCK LEE

bot.on('message', message => {
    if (message.content === "&citation lee"){
        rock();

        if (lee == 1){
            message.reply("Un raté peut dépasser un génie par un entraînement acharné ! \n \n - Lee")
        }

        if (lee == 2){
            message.reply("Vise quelque chose avec application et tu ne le toucheras jamais. Par contre tire au hasard et tu obtiendras un impact précis. \n \n - Lee")
        }

        if (lee == 3){
            message.reply("T'as promis avec la pose du mec cool, maintenant t'es obligé de tenir ta promesse ! \n \n - Lee")
        }

        if (lee == 4){
            message.reply("Tu vas voir que, grâce à un travail acharné, on peut surpasser les dons naturels ! \n \n - Lee")
        }

        if (lee == 5){
            message.reply("Je veux prouver au monde ... Que même sans faire de Ninjutsu ou de Genjutsu, il est possible de devenir un ninja formidable. Ca représente tout pour moi ! \n \n - Lee")
        }
    }
});

// CITATIONS HAKU

bot.on('message', message => {
    if (message.content === "&citation haku"){
        haku();

        if (namatata == 1){
            message.reply("C'est horrible de se dire que personne ... absolument personne n'a besoin de toi. \n \n - Haku")
        }

        if (namatata == 2){
            message.reply("Et pourquoi n'aurais-je pas le droit d'être heureux comme ça ? Zabuza m'a recueilli, quand tout les autres me rejetait, alors que j'etais inutile. \n \n - Haku")
        }

        if (namatata == 3){
            message.reply("Il  y a quelqu'un que je veux protéger, quelqu'un dont je veux voir les rêves s'accomplir, et c'est ça, mon rêve à moi. \n \n - Haku")
        }

        if (namatata == 4){
            message.reply("Une personne ne devient forte que parce qu'elle veut protéger quelqu'un qu'elle aime ... \n \n - Haku")
        }

        if (namatata == 5){
            message.reply("Je suis sûr que, si un jour tu rencontres quelqu'un qui te reconnait très sincèrement ... Cette personne deviendra pour toi l'être le plus cher au monde. \n \n - Haku")
        }
    }
});
