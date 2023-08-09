import { parseXml, readXmlFromFile } from './xmlUtils';

describe('XML Utilities', () => {
  test('should parse XML data to JavaScript object', async () => {
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

    const parsedObject = await parseXml(xmlData);
    expect(parsedObject).toEqual(expectedObject);
  });

  test('should read XML data from a file and parse it', async () => {
    const filePath = 'data/data.xml';
    const xmlData = await readXmlFromFile(filePath);

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

    const parsedObject = await parseXml(xmlData);
    expect(parsedObject).toEqual(expectedObject);
  });
});
