

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
    achievements: typeof en_achievements;
    commodities: typeof en_commodities;
    contracts: typeof en_contracts;
    cosmetics: typeof en_cosmetics;
    events: typeof en_events;
    factions: typeof en_factions;
    items: typeof en_items;
    locations: typeof en_locations;
    materials: typeof en_materials;
    modifications: typeof en_modifications;
    perks: typeof en_perks;
    seasons: typeof en_seasons;
    sets: typeof en_sets;
    ships: typeof en_ships;
    ultimates: typeof en_ultimates;
    worldEvents: typeof en_worldEvents;
};

type LanguagesType = {
    AR: LanguageData;
    DE: LanguageData;
    EN: LanguageData;
    ES: LanguageData;
    FR: LanguageData;
};

export const Languages: LanguagesType = {
    AR: {
        achievements: ar_achievements,
        commodities: ar_commodities,
        contracts: ar_contracts,
        cosmetics: ar_cosmetics,
        events: ar_events,
        factions: ar_factions,
        items: ar_items,
        locations: ar_locations,
        materials: ar_materials,
        modifications: ar_modifications,
        perks: ar_perks,
        seasons: ar_seasons,
        sets: ar_sets,
        ships: ar_ships,
        ultimates: ar_ultimates,
        worldEvents: ar_worldEvents,
    },
    DE: {
        achievements: de_achievements,
        commodities: de_commodities,
        contracts: de_contracts,
        cosmetics: de_cosmetics,
        events: de_events,
        factions: de_factions,
        items: de_items,
        locations: de_locations,
        materials: de_materials,
        modifications: de_modifications,
        perks: de_perks,
        seasons: de_seasons,
        sets: de_sets,
        ships: de_ships,
        ultimates: de_ultimates,
        worldEvents: de_worldEvents,
    },
    EN: {
        achievements: en_achievements,
        commodities: en_commodities,
        contracts: en_contracts,
        cosmetics: en_cosmetics,
        events: en_events,
        factions: en_factions,
        items: en_items,
        locations: en_locations,
        materials: en_materials,
        modifications: en_modifications,
        perks: en_perks,
        seasons: en_seasons,
        sets: en_sets,
        ships: en_ships,
        ultimates: en_ultimates,
        worldEvents: en_worldEvents,
    },
    ES: {
        achievements: es_achievements,
        commodities: es_commodities,
        contracts: es_contracts,
        cosmetics: es_cosmetics,
        events: es_events,
        factions: es_factions,
        items: es_items,
        locations: es_locations,
        materials: es_materials,
        modifications: es_modifications,
        perks: es_perks,
        seasons: es_seasons,
        sets: es_sets,
        ships: es_ships,
        ultimates: es_ultimates,
        worldEvents: es_worldEvents,
    },
    FR: {
        achievements: fr_achievements,
        commodities: fr_commodities,
        contracts: fr_contracts,
        cosmetics: fr_cosmetics,
        events: fr_events,
        factions: fr_factions,
        items: fr_items,
        locations: fr_locations,
        materials: fr_materials,
        modifications: fr_modifications,
        perks: fr_perks,
        seasons: fr_seasons,
        sets: fr_sets,
        ships: fr_ships,
        ultimates: fr_ultimates,
        worldEvents: fr_worldEvents,
    },
};