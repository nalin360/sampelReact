
import fs from 'fs'
// const fs = require('fs');

/**
 * * Reads a JSON file and returns its contents as a JavaScript object
 * @param {string} filePath 
 * @returns {object} 
 */
export function readJsonFile(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }
}

/**
 * * Writes a JavaScript object to a JSON file
 * @param {string} filePath 
 * @param {object} data 
 */
export function writeJsonFile(filePath, data) {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString);
  } catch (error) {
    console.error(`Error writing file: ${error}`);
  }
}

// Example usage:
// const filePath = './example.json';
// const data = { name: 'John', age: 30 };

// // Write the data to the file
// writeJsonFile(filePath, data);

// // Read the data from the file
// const readData = readJsonFile(filePath);
// console.log(readData); // { name: 'John', age: 30 }
