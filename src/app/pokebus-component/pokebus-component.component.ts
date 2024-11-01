import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokebus-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokebus-component.component.html',
  styleUrls: ['./pokebus-component.component.css']
})
export class PokebusComponent {
  searchTerm: string = ''; // Almacena el término de búsqueda
  pokemons: string[] = [ 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
  'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree',
  'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot',
  'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok',
  'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina',
  'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable',
  'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat',
  'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat',
  'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck',
  'Golduck', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra',
  'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell',
  'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem',
  'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton',
  'Farfetch\'d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer',
  'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar',
  'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb',
  'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee',
  'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon',
  'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen',
  'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx',
  'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados',
  'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon',
  'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl',
  'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair',
  'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium',
  'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr',
  'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian',
  'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu',
  'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu',
  'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill',
  'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom',
  'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon',
  'Umbreon', 'Leafeon', 'Glaceon', 'Sylveon', 'Wurmple', 'Silcoon',
  'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo',
  'Seedot', 'Nuzleaf', 'Shiftry', 'Tankler', 'Swablu', 'Altaria',
  'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash',
  'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily',
  'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon',
  'Shuppet', 'Banette', 'Duskull', 'Duskclops', 'Tropius', 'Chimecho',
  'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo',
  'Walrein', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth',
  'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur',
  'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass',
  'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon',
  'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle',
  'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot',
  'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt',
  'Torkoal', 'Spoink', 'Grumpig', 'Spheal', 'Sealeo', 'Walrein',
  'Sandshrew', 'Sandslash', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea',
  'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone',
  'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy',
  'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas',
  'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull',
  'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt',
  'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit', 'Masquerain',
  'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada',
  'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita',
  'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye',
  'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper',
  'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt',
  'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo',
  'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette',
  'Duskull', 'Duskclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut',
  'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Surskit',
  'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking',
  'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud',
  'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty',
  'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham',
  'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise',
  'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer',
  'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig',
  'Spheal', 'Sealeo', 'Walrein', 'Trapinch', 'Vibrava', 'Flygon',
  'Cacnea', 'Cacturne',]; // Lista de Pokémon
  pokemonEncontrado: string | null = null; // Almacena el Pokémon encontrado
  mensaje: string = ''; // Almacena el mensaje de resultado

  // Método para buscar Pokémon por nombre
  buscarPokemon() {
    const nombre = this.searchTerm.toLowerCase();
    this.pokemonEncontrado = this.pokemons.find(pokemon => pokemon.toLowerCase() === nombre) || null;

    // Mensajes en la propiedad "mensaje" según el estado de búsqueda
    if (this.pokemonEncontrado) {
      this.mensaje = `¡Pokémon encontrado: ${this.pokemonEncontrado}!`;
    } else {
      this.mensaje = 'Pokémon no encontrado.';
    }
  }

  // Método para reiniciar la búsqueda
  reiniciarBusqueda() {
    this.searchTerm = '';
    this.pokemonEncontrado = null;
    this.mensaje = ''; // Limpia el mensaje al reiniciar
  }
}
