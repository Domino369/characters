app.controller('statsController', function($scope) {
    $scope.aspects = {
        kith: {
            type: 'character',
            race: 'Feline-Cat',
            gender: 'Female',
            age: '495',
            height: '4\'6\"',
            weight: '85 lbs',
            alignment: 'Chaotic Evil',
            hometown: '626th Layer of the Abyss',
            residence: {
                id: 'kitla',
                name: 'Kit\'la' },
            relations: {
                kate: {
                    name: 'Kate',
                    type: 'Sister'
                },
                kith_ii: {
                    name: 'Kith II',
                    type: 'Incarnate'
                },
                hikari: {
                    name: 'Hikari',
                    type: 'Mother'
                }
            }
        },
        kate: {
            type: 'character',
            race: 'Feline-Cat',
            gender: 'Female',
            age: '496',
            height: '4\'10\"',
            weight: '90 lbs',
            alignment: 'Nuetral Good',
            hometown: 'The Heroic Domains of Ysgard',
            residence: {
                id: 'crystelia',
                name: 'Crystelia' },
            relations: {
                kith: {
                    name: 'Kith',
                    type: 'Sister'
                },
                keizen_mikazuki: {
                    name: 'Keizen Mikazuki',
                    type: 'Incarnate'
                },
                hikari: {
                    name: 'Hikari',
                    type: 'Mother'
                }
            }
        },
        hikari: {
            type: 'character',
            race: 'Feline-Cat',
            gender: 'Female',
            age: '634',
            height: '1\'2\"',
            weight: '15 lbs',
            alignment: 'Chaotic Good',
            hometown: 'Sigil, the city of a thousand doors',
            residence: {
                id: 'kitla',
                name: 'Kit\'la' },
            relations: {
                kith: {
                    name: 'Kith',
                    type: 'Daughter'
                },
                kate: {
                    name: 'Kate',
                    type: 'Daughter'
                }
            }
        },
        kith_ii:  {
            type: 'character',
            race: 'Feline-Cat',
            gender: 'Male',
            age: '24',
            height: '4\'8\"',
            weight: '95 lbs',
            alignment: 'Chaotic Evil',
            hometown: 'Kit\'la',
            residence: {
                id: 'kitla',
                name: 'Kit\'la' },
            relations: {
                kith: {
                    name: 'Kith',
                    type: 'Creator'
                }
            }
        },
        keizen_mikazuki: {
            type: 'character',
            race: 'Feline-Cat',
            gender: 'Female',
            age: '23',
            height: '4\'5\"',
            weight: '70 lbs',
            alignment: 'Chaotic Nuetral',
            hometown: 'Crystelia',
            residence: {
                id: 'crystelia',
                name: 'Crystelia' },
            relations: {
                kate: {
                    name: 'Kate',
                    type: 'Creator'
                }
            }
        },
        kitla: {
            type: 'location',
            plane: 'Infinite Layers of the Abyss',
            layer: '626th Layer',
            alignment: 'Chaotic Evil',
            residents: {
                kith: {
                    name: 'Kith',
                    type: 'Demon Lord'
                },
                hikari: {
                    name: 'Hikari',
                    type: 'Resident'
                },
                kith_ii: {
                    name: 'Kith II',
                    type: 'Prince'
                }
            }
        },
        crystelia: {
            type: 'location',
            plane: 'Wilderness of the Beastlands',
            layer: 'Krigala',
            alignment: 'Chaotic Good',
            residents: {
                kate: {
                    name: 'Kate',
                    type: 'Diety'
                },
                keizen_mikazuki: {
                    name: 'Keizen Mikazuki',
                    type: 'Overseer'
                }
            }
        }
    };
    
    $scope.aspect = $scope.aspects[$scope.aspectid];
}); 