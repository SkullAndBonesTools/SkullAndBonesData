

// Arabic
import ar_achievements from '../languages/ar/ar_achievements.json';
import ar_commodities from '../languages/ar/ar_commodities.json';
import ar_contracts from '../languages/ar/ar_contracts.json';
import ar_cosmetics from '../languages/ar/ar_cosmetics.json';
import ar_events from '../languages/ar/ar_events.json';
import ar_factions from '../languages/ar/ar_factions.json';
import ar_items from '../languages/ar/ar_items.json';
import ar_locations from '../languages/ar/ar_locations.json';
import ar_materials from '../languages/ar/ar_materials.json';
import ar_modifications from '../languages/ar/ar_modifications.json';
import ar_perks from '../languages/ar/ar_perks.json';
import ar_seasons from '../languages/ar/ar_seasons.json';
import ar_sets from '../languages/ar/ar_sets.json';
import ar_ships from '../languages/ar/ar_ships.json';
import ar_ultimates from '../languages/ar/ar_ultimates.json';
import ar_worldEvents from '../languages/ar/ar_worldEvents.json';

// German
import de_achievements from '../languages/de/de_achievements.json';
import de_commodities from '../languages/de/de_commodities.json';
import de_contracts from '../languages/de/de_contracts.json';
import de_cosmetics from '../languages/de/de_cosmetics.json';
import de_events from '../languages/de/de_events.json';
import de_factions from '../languages/de/de_factions.json';
import de_items from '../languages/de/de_items.json';
import de_locations from '../languages/de/de_locations.json';
import de_materials from '../languages/de/de_materials.json';
import de_modifications from '../languages/de/de_modifications.json';
import de_perks from '../languages/de/de_perks.json';
import de_seasons from '../languages/de/de_seasons.json';
import de_sets from '../languages/de/de_sets.json';
import de_ships from '../languages/de/de_ships.json';
import de_ultimates from '../languages/de/de_ultimates.json';
import de_worldEvents from '../languages/de/de_worldEvents.json';

// English
import en_achievements from '../languages/en/en_achievements.json';
import en_commodities from '../languages/en/en_commodities.json';
import en_contracts from '../languages/en/en_contracts.json';
import en_cosmetics from '../languages/en/en_cosmetics.json';
import en_events from '../languages/en/en_events.json';
import en_factions from '../languages/en/en_factions.json';
import en_items from '../languages/en/en_items.json';
import en_locations from '../languages/en/en_locations.json';
import en_materials from '../languages/en/en_materials.json';
import en_modifications from '../languages/en/en_modifications.json';
import en_perks from '../languages/en/en_perks.json';
import en_seasons from '../languages/en/en_seasons.json';
import en_sets from '../languages/en/en_sets.json';
import en_ships from '../languages/en/en_ships.json';
import en_ultimates from '../languages/en/en_ultimates.json';
import en_worldEvents from '../languages/en/en_worldEvents.json';

// Spanish
import es_achievements from '../languages/es/es_achievements.json';
import es_commodities from '../languages/es/es_commodities.json';
import es_contracts from '../languages/es/es_contracts.json';
import es_cosmetics from '../languages/es/es_cosmetics.json';
import es_events from '../languages/es/es_events.json';
import es_factions from '../languages/es/es_factions.json';
import es_items from '../languages/es/es_items.json';
import es_locations from '../languages/es/es_locations.json';
import es_materials from '../languages/es/es_materials.json';
import es_modifications from '../languages/es/es_modifications.json';
import es_perks from '../languages/es/es_perks.json';
import es_seasons from '../languages/es/es_seasons.json';
import es_sets from '../languages/es/es_sets.json';
import es_ships from '../languages/es/es_ships.json';
import es_ultimates from '../languages/es/es_ultimates.json';
import es_worldEvents from '../languages/es/es_worldEvents.json';

// French
import fr_achievements from '../languages/fr/fr_achievements.json';
import fr_commodities from '../languages/fr/fr_commodities.json';
import fr_contracts from '../languages/fr/fr_contracts.json';
import fr_cosmetics from '../languages/fr/fr_cosmetics.json';
import fr_events from '../languages/fr/fr_events.json';
import fr_factions from '../languages/fr/fr_factions.json';
import fr_items from '../languages/fr/fr_items.json';
import fr_locations from '../languages/fr/fr_locations.json';
import fr_materials from '../languages/fr/fr_materials.json';
import fr_modifications from '../languages/fr/fr_modifications.json';
import fr_perks from '../languages/fr/fr_perks.json';
import fr_seasons from '../languages/fr/fr_seasons.json';
import fr_sets from '../languages/fr/fr_sets.json';
import fr_ships from '../languages/fr/fr_ships.json';
import fr_ultimates from '../languages/fr/fr_ultimates.json';
import fr_worldEvents from '../languages/fr/fr_worldEvents.json';

type LanguageData = {
    achievements: typeof en_achievements.achievements;
    commodities: typeof en_commodities.commodities;
    contracts: typeof en_contracts.contracts;
    cosmetics: typeof en_cosmetics.cosmetics;
    events: typeof en_events.events;
    factions: typeof en_factions.factions;
    items: typeof en_items.items;
    locations: { [key in keyof typeof en_locations.locations]: string };
    materials: typeof en_materials.materials;
    modifications: typeof en_modifications.modifications;
    perks: typeof en_perks.perks;
    seasons: typeof en_seasons.seasons;
    sets: typeof en_sets.sets;
    ships: typeof en_ships.ships;
    ultimates: typeof en_ultimates.ultimates;
    worldEvents: typeof en_worldEvents.worldEvents;
};

type LanguagesType = {
    AR: LanguageData;
    DE: LanguageData;
    EN: LanguageData;
    ES: LanguageData;
    FR: LanguageData;
};

function preprocessLocations(
    locationsObj: { locations: Record<string, string> },
    seasonsObj: { seasons: Record<string, string> }
): Record<keyof typeof en_locations.locations, string> {
    const seasonKeys = Object.keys(seasonsObj.seasons) as Array<keyof typeof seasonsObj.seasons>;
    const processed: Record<string, string> = {};
    for (const key in locationsObj.locations) {
        const locationKey = key as keyof typeof locationsObj.locations;
        let value = locationsObj.locations[locationKey];
        seasonKeys.forEach(seasonKey => {
            const placeholder = `{{${String(seasonKey)}}}`;
            value = value.replaceAll(placeholder, seasonsObj.seasons[seasonKey]);
        });
        processed[key] = value;
    }
    return processed;
}

export const Languages: LanguagesType = {
    AR: {
        achievements: ar_achievements.achievements,
        commodities: ar_commodities.commodities,
        contracts: ar_contracts.contracts,
        cosmetics: ar_cosmetics.cosmetics,
        events: ar_events.events,
        factions: ar_factions.factions,
        items: ar_items.items,
        locations: preprocessLocations(ar_locations, ar_seasons),
        materials: ar_materials.materials,
        modifications: ar_modifications.modifications,
        perks: ar_perks.perks,
        seasons: ar_seasons.seasons,
        sets: ar_sets.sets,
        ships: ar_ships.ships,
        ultimates: ar_ultimates.ultimates,
        worldEvents: ar_worldEvents.worldEvents,
    },
    DE: {
        achievements: de_achievements.achievements,
        commodities: de_commodities.commodities,
        contracts: de_contracts.contracts,
        cosmetics: de_cosmetics.cosmetics,
        events: de_events.events,
        factions: de_factions.factions,
        items: de_items.items,
        locations: preprocessLocations(de_locations, de_seasons),
        materials: de_materials.materials,
        modifications: de_modifications.modifications,
        perks: de_perks.perks,
        seasons: de_seasons.seasons,
        sets: de_sets.sets,
        ships: de_ships.ships,
        ultimates: de_ultimates.ultimates,
        worldEvents: de_worldEvents.worldEvents,
    },
    EN: {
        achievements: en_achievements.achievements,
        commodities: en_commodities.commodities,
        contracts: en_contracts.contracts,
        cosmetics: en_cosmetics.cosmetics,
        events: en_events.events,
        factions: en_factions.factions,
        items: en_items.items,
        locations: preprocessLocations(en_locations, en_seasons),
        materials: en_materials.materials,
        modifications: en_modifications.modifications,
        perks: en_perks.perks,
        seasons: en_seasons.seasons,
        sets: en_sets.sets,
        ships: en_ships.ships,
        ultimates: en_ultimates.ultimates,
        worldEvents: en_worldEvents.worldEvents,
    },
    ES: {
        achievements: es_achievements.achievements,
        commodities: es_commodities.commodities,
        contracts: es_contracts.contracts,
        cosmetics: es_cosmetics.cosmetics,
        events: es_events.events,
        factions: es_factions.factions,
        items: es_items.items,
        locations: preprocessLocations(es_locations, es_seasons),
        materials: es_materials.materials,
        modifications: es_modifications.modifications,
        perks: es_perks.perks,
        seasons: es_seasons.seasons,
        sets: es_sets.sets,
        ships: es_ships.ships,
        ultimates: es_ultimates.ultimates,
        worldEvents: es_worldEvents.worldEvents,
    },
    FR: {
        achievements: fr_achievements.achievements,
        commodities: fr_commodities.commodities,
        contracts: fr_contracts.contracts,
        cosmetics: fr_cosmetics.cosmetics,
        events: fr_events.events,
        factions: fr_factions.factions,
        items: fr_items.items,
        locations: preprocessLocations(fr_locations, fr_seasons),
        materials: fr_materials.materials,
        modifications: fr_modifications.modifications,
        perks: fr_perks.perks,
        seasons: fr_seasons.seasons,
        sets: fr_sets.sets,
        ships: fr_ships.ships,
        ultimates: fr_ultimates.ultimates,
        worldEvents: fr_worldEvents.worldEvents,
    },
};