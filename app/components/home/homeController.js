app.controller('homeController', function($scope) {
    $scope.characters = [
        {name: 'Kith',
         title: 'The Demon Lord',
         image: '1421996504.terrawolfdog_kithf1_500.png',
         story: 'The now demon lord of the 626th layer of the Abyss, Kith survived through the turmoil that ' +
                'was the previous abyssal layer. Through long journey, she succeeded in killing her father ' +
                'and taking over the then tortured and enslaved layer. She reshaped it to become a paradise ' +
                'to her newfound race of Kit\'lins created in tandem with Kate.'},
        {name: 'Kate',
         title: 'The Fallen Angel',
         image: '1421994792.terrawolfdog_kateicon_500.png',
         story: 'Borne on the plane of Asgard, Kate grew to become a herald of battle to Khord, the ' +
                'Dwarven King. When her father faced exile, she plotted a botched attempt on Khord\'s ' +
                'life, dismissing herself to exile on a secluded demiplane. With the aid of her sister, ' +
                'she escapes and spends her time repenting by raising an ideal civilization Crystelia.'},
        {name: 'Hikari',
         title: 'The Caretaker',
         image: '1422062388.terrawolfdog_hikariiconf_500.png',
         story: 'The birth mother of both Kith and Kate, Hikari was the husband of Mercerial, Kate\'s ' +
                'father. A short time after giving birth to Kate, she was taken by G\'trash and ' +
                'forced to bear a child, of whom Kith was born. Kith\'s birth in turn killed Hikari, ' +
                'but her soul was thankfully recovered and exists as Kith\'s protecting familiar.'},
        {name: 'Kith II',
         title: 'The Prince',
         image: '1421994677.terrawolfdog_kithmicon_500.png',
         story: 'Spawned through the profane ritual of the Abyss, Kith the II was created to aid Kith ' +
                'in maintaining the new layer. Fortunate to Kith, he shares in the ideal and prides himself ' +
                'as the messanger. Not many trust him being a spawn of the Abyss like Kith, but thusfar has not ' +
                'created much turmoil. He tends to care fully for the Kit\'lins'},
        {name: 'Keizen Mikazuki',
         title: 'The Alchemist',
         image: '970047_179427578889458_170383626_n.jpg',
         story: 'Created through sacred ritual by Kate, Keizen Mikazuki prides herself as heir to the Beastland\'s ' +
                'kingdom of Crystelia. Known as a technological evangelist, she has enhanced the civilization ' +
                'by leaps and bounds through her studies. She is the main reason for both Crystelia\'s ' +
                'unbridled nationalism and angst against the kingdom.'}
    ];
    
    $scope.locations = [
        {name: 'Kit\'la',
         title: '626th Layer of the Abyss',
         image: 'e3conceptart_disapproach.jpg',
         story: 'A forgotten layer whose denizens at first treated as a free place only to be enslaved by ' +
                'G\'tresh, Kiths father. After his death and the wars that followed, it emerged as a place ' +
                'where Kith reigns over the Kit\'lins whom reside in the Abyss. The plane became the premeire ' +
                'city of the Lower Planes governed by Kith II while the plane is overseen by Kith.'},
        {name: 'Crystelia',
         title: 'Wilderness of the Beastlands',
         image: 'fantasy-city-v2.jpg',
         story: 'City of the Kit\'lins that exists in the Wilderness of the Beastlands. Kate founded this ' +
                'city as a haven for the newfound race, and though caught in war at first, the new area ' +
                'has lived up to Kate\'s dream. The lands are now governed by Keizen Mikazuki, only being ' +
                'intervened by Kate in times of need. The city often gets praise for being technologically ' +
                'advanced.'}
    ];
}); 