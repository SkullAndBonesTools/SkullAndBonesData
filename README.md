# Skull and Bones Data
[![GitHub Release](https://img.shields.io/github/v/release/SkullAndBonesTools/SkullAndBonesData?include_prereleases&sort=semver&display_name=release&style=for-the-badge&logo=github&labelColor=1f2328&color=aliceblue)](https://github.com/SkullAndBonesTools/SkullAndBonesData/releases/latest) [![NPM Version](https://img.shields.io/npm/v/%40skullandbonestools%2Fsnbdata?style=for-the-badge&logo=npm&color=%23c60000&labelColor=1f2328)](https://www.npmjs.com/package/@skullandbonestools/snbdata) [![Crowdin](https://img.shields.io/badge/Crowdin-green?style=for-the-badge&logo=crowdin&labelColor=1f2328)](https://crowdin.com/project/skull-and-bones-tools)

Welcome to the inofficial data repository for the Skull and Bones game by Ubisoft.

This repository hosts data for the several elements in the game like **Materials**, **Items**, **Cosmetics** and more in a JSON format and provides a npm package to access the data in typescript and javascript.

This project is also compliant with the Terms of Service of Skull and Bones and approved by Ubisoft, as the data was/is collected and written down by hand and not acquired in other ways. 

For each update of the game a new release is provided containing the updated files which can be found under the [Releases](https://github.com/SkullAndBonesTools/SkullAndBonesData/releases) section.

The version schema of the release is tied to the Skull and Bones version the data represents and put together like so:\
**Example**: snbdata@5.1.2
```
5 - Season (a year has 4 seasons, so season 5 = Y2S1)
1 - Patch Level
4 - Bug Fixes / Minor Changes (this one is related to releases of this repository)

This represents the SnB game version Y2S1.1.X
```

*Because the first published version of the package was for Y2S1, so season 5 of Skull and Bones, the first release was the 5.0.0.*

## How to Use
### Raw Data
You can find the raw data files as JSON in the [data](https://github.com/SkullAndBonesTools/SkullAndBonesData/tree/main/data) folder.

### Package
Based on the raw data is the `snbdata` npm package available, featuring access to the data as objects with type safety and autocompletion.

#### Guide
**Install the Package**
```
npm i @skullandbonestools/snbdata
```

**Access the Data**\
Below are just some examples on how to access certain datasets, a full overview including examples can be found on the wiki page [Datasets](https://github.com/SkullAndBonesTools/SkullAndBonesData/wiki/Datasets).

**Ships**\
Getting the season of the `Barque` (TS):
```typescript
import { Ships } from "@skullandbonestools/snbdata";
import { Season } from '@skullandbonestools/snbdata/dist/daos/seasons';

const season:Season = Ships.barque.season; // Retrieves the season object for the barque
console.log(season.id); // Returns ragingTides
```

**Cosmetics / Items**\
Getting the `aBloodyPromise` sails emblem and printing all its properties.
```javascript
import { Cosmetics, Items } from '@skullandbonestools/snbdata';
import { Cosmetic } from '@skullandbonestools/snbdata/dist/daos/cosmetics'; //TS type

const aBloodyPromise = Cosmetics.aBloodyPromise; // Works the same for items e.g. Items.heydensGuard
Object.entries(aBloodyPromise).forEach(([key, value]) => {
  if(!value) return;
  console.log(`${key}: ${value}`);
});

// Output
id: aBloodyPromise
type: sailsEmblem
dateAdded: 2024-03-16
lastUpdated: 2024-03-30
set: ashenCorsair
obtainable: premiumEdition
```

### Translation
You can find the english translation of the data in the [languages](https://github.com/SkullAndBonesTools/SkullAndBonesData/tree/main/languages/en) folder.\
The translations for other languages can currently be found on [Crowdin](#adding-translations-for-the-data).

*It is planned that at some point the translations will also be present as files in the languages folder.*

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


## Sponsor
### Crowdin
Skull and Bones Data is, as part of the Skull and Bones Tools project, supported by Crowdin 💚

[![Crowdin](/assets/crowdin-logo-dark.png)](https://crowdin.com/)

Allowing me to provide a direct integration into this github project, an overview of all translations and an easy way for everyone to participate in the translation of the project.

## Support
For general questions or support of any kind you can use the official Skull and Bones Tools Discord (https://discord.gg/fTgvPxR7eR) or the support@skullandbonestools.de email.

For any business inquiries or related questions please use the contact@skullandbonestools.de email.