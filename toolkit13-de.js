import ModConfig from './src/config.js';
import * as Util from './src/util.js';

const module_id = 'toolkit13-de';
const module_lang = 'de';

Hooks.once('init', () => {
    // Create settings
    ModConfig.forEach((cfg) => {
        // Skip settings not applicable for this system version
        if ('onlyUntilSystemVersionIncluding' in cfg &&
            isNewerVersion(game.system.data.version,
                cfg.onlyUntilSystemVersionIncluding)) {
            return;
        } else {
            game.settings.register(module_id, cfg.name, cfg.data);
        }
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.powerSources, {
        'class': 'Klasse',
        'race': 'Volk',
        'item': 'Gegenstand',
        'other': 'Andere'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.powerTypes, {
        'power': 'Kraft',
        'feature': 'Merkmal',
        'talent': 'Talent',
        'flexible': 'Flexibler Angriff',
        'spell': 'Zauber',
        'other': 'Andere'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.powerUsages, {
        'at-will': 'Beliebig',
        'once-per-battle': 'Pro Kampf',
        'recharge': 'Aufladen',
        'daily': 'Täglich',
        'other': 'Andere'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.equipUsages, {
        'daily': 'Täglich',
        'recharge': 'Aufladen',
        'once-per-battle': 'Pro Kampf',
        'other': 'Andere'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.actionTypes, {
        'standard': 'Standard',
        'move': 'Bewegung',
        'quick': 'Schnell',
        'free': 'Frei',
        'interrupt': 'Unterbrechung'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.creatureTypes, {
        'aberration': 'Aberration',
        'beast': 'Bestie',
        'celestial': 'Himmelswesen',
        'construct': 'Konstrukt',
        'demon': 'Dämon',
        'devil': 'Teufel',
        'dragon': 'Drache',
        'elemental': 'Elementar',
        'fey': 'Fee',
        'giant': 'Riese',
        'humanoid': 'Humanoider',
        'monstrosity': 'Monstrosität',
        'ooze': 'Schleim',
        'plant': 'Pflanze',
        'spirit': 'Geist',
        'undead': 'Untoter'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.creatureSizes, {
        'normal': 'Normal',
        'large': 'Groß',
        'huge': 'Riesig',
        'double': 'Doppelt stark',
        'triple': 'Dreifach stark',
        'weakling': 'Schwächling',
        'elite': 'Elite'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.creatureRoles, {
        'archer': 'Schütze',
        'blocker': 'Verteidiger',
        'caster': 'Zauberer',
        'leader': 'Anführer',
        'mook': 'Scherge',
        'spoiler': 'Störer',
        'troop': 'Fußvolk',
        'wrecker': 'Zerstörer'
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.raceList, {
        'darkelf': "Dunkelelf",
        'dragonspawn': "Drachenbrut",
        'dragonic': "Dragonier",
        'dwarf': "Zwerg",
        'dwarfforged': "Zwergenkonstrukt",
        'forgeborn': "Kind der Esse",
        'gnome': "Gnom",
        'halfelf': "Halbelf",
        'halforc': "Halbork",
        'halfling': "Halbling",
        'highelf': "Hochelf",
        'holyone': "Gesegneter",
        'aasimar': "Aasimar",
        'human': "Mensch",
        'tiefling': "Tiefling",
        'demontouched': "Dämonenbrut",
        'woodelf': "Waldelf"
    });

    Util.setAllIfExist(CONFIG.ARCHMAGE.classList, {
        'barbarian': 'Barbar',
        'bard': 'Barde',
        'cleric': 'Kleriker',
        'fighter': 'Kämpfer',
        'paladin': 'Paladin',
        'ranger': 'Waldläufer',
        'rogue': 'Dieb',
        'sorcerer': 'Zauberer',
        'wizard': 'Magier',
        'chaosmage': 'Chaosmagier',
        'commander': 'Kommandant',
        'druid': 'Druide',
        'monk': 'Mönch',
        'necromancer': 'Nekromant',
        'occultist': 'Okkultist'
    });

    // Register Babele compendium translations if module is present
    if (typeof Babele !== 'undefined' &&
        game.settings.get(module_id, 'enableCompendiumTranslation')) {
        Babele.get().register({
            module: module_id,
            lang: module_lang,
            dir: 'compendium'
        });
    }

});
