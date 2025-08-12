/**
 * Pre-push hook to check for any key related issues.
 * This can be a missing, incorrectly typed or unmatched key in the files.
 * 
 * The script will read the data and translation files, and compare the keys.
 * 
 * Usage: node check-keys.cjs <filename>
 * Example: node check-keys.cjs cosmetics
 * 
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log('Usage: node check-keys.js <filename>');
    console.log('Example: node check-keys.js cosmetics');
    process.exit(1);
}

const filename = args[0];
const dataPath = path.resolve(__dirname, '..', 'data', `${filename}.json`);
const translationPath = path.resolve(__dirname, '..', 'languages', 'source', `${filename}.json`);

function readJson(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        console.error(`Error reading or parsing ${filePath}:`, err.message);
        process.exit(1);
    }
}

const dataObj = readJson(dataPath);
const translationsObj = readJson(translationPath);

let failed = false;

function getNameFromId(id) {
    const tierMatch = id.match(/(\d+)$/);
    const tier = tierMatch && /^[a-zA-Z]*\d+$/.test(id) 
        ? tierMatch[0] 
        : null;

    if(!tier) return id;
    const name = id.slice(0, id.lastIndexOf(tierMatch[0]));
    return name;
}

for (const key in dataObj) {
    const item = dataObj[key];
    if (!item || typeof item.id === 'undefined') {
        console.error(`Missing 'id' for key "${key}" in ${dataPath}`);
        failed = true;
        continue;
    }
    if (item.id !== key) {
        console.error(`Mismatch: key "${key}" does not match id "${item.id}" in ${dataPath}`);
        failed = true;
    }
    const rootKey = filename;
    // Resolve translation key using getNameFromId logic
    const translationKey = getNameFromId(key);
    if (!(translationsObj[rootKey] && translationKey in translationsObj[rootKey])) {
        console.error(`Missing translation for key "${translationKey}" (resolved from "${key}") in root "${rootKey}" of ${translationPath}`);
        failed = true;
    }
}

if (failed) {
    console.error('Check failed. Please fix the above issues before pushing.');
    process.exit(1);
} else {
    console.log('Check passed.');
    process.exit(0);
}
