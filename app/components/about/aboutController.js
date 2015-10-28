app.controller('aboutController', function($scope, $stateParams) {
    $scope.aspects = {
        kith: {
            name: 'Kith',
            title: 'The Demon Lord',
            image: '1421996504.terrawolfdog_kithf1_500.png'},
        kate: {
            name: 'Kate',
            title: 'The Fallen Angel',
            image: '1421994792.terrawolfdog_kateicon_500.png'},
        hikari: {
            name: 'Hikari',
            title: 'The Caretaker',
            image: '1422062388.terrawolfdog_hikariiconf_500.png'},
        kith_ii: {
            name: 'Kith II',
            title: 'The Prince',
            image: '1421994677.terrawolfdog_kithmicon_500.png'},
        keizen_mikazuki: {
            name: 'Keizen Mikazuki',
            title: 'The Alchemist',
            image: '970047_179427578889458_170383626_n.jpg'},
        kitla: {
            name: 'Kit\'la',
            title: '626th Layer of the Abyss',
            image: 'e3conceptart_disapproach.jpg'},
        crystelia: {
            name: 'Crystelia',
            title: 'Wilderness of the Beastlands',
            image: 'fantasy-city-v2.jpg'}
    };
    
    $scope.key = $stateParams.aspect;
    $scope.aspect = $scope.aspects[$stateParams.aspect];
});