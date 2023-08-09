"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readXmlFromFile = exports.parseXml = void 0;
const xml2js_1 = require("xml2js");
const fs_1 = require("fs");
function parseXml(xmlData) {
    return new Promise((resolve, reject) => {
        (0, xml2js_1.parseString)(xmlData, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
exports.parseXml = parseXml;
function readXmlFromFile(filePath) {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.readXmlFromFile = readXmlFromFile;
