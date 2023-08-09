"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const xmlUtils_1 = require("./xmlUtils");
describe('XML Utilities', () => {
    test('should parse XML data to JavaScript object', () => __awaiter(void 0, void 0, void 0, function* () {
        const xmlData = `
      <root>
        <person>
          <name>John Doe</name>
          <age>30</age>
          <country>USA</country>
        </person>
        <person>
          <name>Jane Smith</name>
          <age>28</age>
          <country>Canada</country>
        </person>
      </root>
    `;
        const expectedObject = {
            root: {
                person: [
                    {
                        name: ['John Doe'],
                        age: ['30'],
                        country: ['USA'],
                    },
                    {
                        name: ['Jane Smith'],
                        age: ['28'],
                        country: ['Canada'],
                    },
                ],
            },
        };
        const parsedObject = yield (0, xmlUtils_1.parseXml)(xmlData);
        expect(parsedObject).toEqual(expectedObject);
    }));
    test('should read XML data from a file and parse it', () => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = 'data/data.xml';
        const xmlData = yield (0, xmlUtils_1.readXmlFromFile)(filePath);
        const expectedObject = {
            root: {
                person: [
                    {
                        name: ['John Doe'],
                        age: ['30'],
                        country: ['USA'],
                    },
                    {
                        name: ['Jane Smith'],
                        age: ['28'],
                        country: ['Canada'],
                    },
                ],
            },
        };
        const parsedObject = yield (0, xmlUtils_1.parseXml)(xmlData);
        expect(parsedObject).toEqual(expectedObject);
    }));
});
