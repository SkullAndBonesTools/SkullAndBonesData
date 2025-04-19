# Skull and Bones Data

Welcome to the inofficial data repository for the Skull and Bones game by Ubisoft.

This repository hosts data for the several elements in the game like **Materials**, **Items**, **Cosmetics** and more in a JSON format.

As the move to a public repository (see [History](#history)) includes several changes the following things are planned:
- [ ] Extract events, locations, contracts into own data files
  - Those are currently only stored in the translation files
- [ ] Crowdin workflow integration
- [x] npm packages with generated types for the different data (events, cosmetics, items, ...)

For each update of the game a new release is provided containing the updated files which can be found under the [Releases](https://github.com/SkullAndBonesTools/SkullAndBonesData/releases) section.

The version number of the release is tied to the Skull and Bones version the data represents and put together like so:\
**Example**: snbdata@5.2.4
```
5 - Season
2 - Patch Level
4 - Bug Fixes / Minor Changes

This represents the SnB game version Y2S1.2.X
```

*Because the first published version of the package was for Y2S1, so season 5 of Skull and Bones, the first release was the 5.0.0.*

## How to Use
### Raw Data
You can find the raw data files as JSON in the [data](https://github.com/SkullAndBonesTools/SkullAndBonesData/tree/master/data) folder for the different types.

### Package
Based on the raw data is the `snbdata` npm package available, featuring access to the data as typescript objects with type safety and autocompletion.

#### Guide
**Install the Package**
```
npm i @skullandbonestools/snbdata
```

**Access the Data**

Getting the season of the `Barque` (TS):
```typescript
import { Ships } from "@skullandbonestools/snbdata";
import { Season } from '@skullandbonestools/snbdata/dist/daos/seasons';

const season:Season = Ships.barque.season; // Retrieves the season object for the barque
console.log(season.id); // Returns ragingTides
```

Getting the required materials for `Orca Intricate Apparatus` (JS):
```javascript
import { Materials } from "@skullandbonestools/snbdata";

Materials.orcaIntricateApparatus.required.keys().forEach(material => {
  console.log("Id: %s - Required: %s", material.id, material.required?.keys().map((m) => m.id).toArray().join(", "));
});

// Output
Id: orcasMechanism - Required: undefined
Id: torsionSpring - Required: planetaryGearset, woodPitch
Id: planetaryGearset - Required: cogwheel
Id: woodPitch - Required: woodTar
```

## History
The data available in the repository was originally put together for [Skull and Bones Tools](https://skullandbonestools.de) and got published with **Year 2 Season 1 - Ascent into Chaos** with the goal of supporting other creators and to promote up to date informations by allowing everyone to contribute to the dataset. 

## Contribute
If you like the project please give it a ⭐ here on Github.

There are several ways to contribute to the project:

### Reporting wrong or outdated informations
If you have noticed a wrong or outdated informations please open an **Issue** so it can be checked and corrected quickly.

### Adding translations for the data
The project uses Crowdin to translate all the data, where everyone can contribute.
You can find it here: https://crowdin.com/project/skull-and-bones-tools

### Adding or updating informations
If you want to add to or update informations of the dataset, the general open source approach of a Pull Request is used.
Which consits of creating a **Fork**, adding/updating the code in the forked repository and then creating a **Pull Request** in this repository to merge the changes of your fork into this one.


## Support
For general questions or support of any kind you can use the official Skull and Bones Tools Discord (https://discord.gg/fTgvPxR7eR) or the support@skullandbonestools.de email.

For any business inquiries or related questions please use the contact@skullandbonestools.de email.