import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const dataContacts = await fs.readFile(PATH_DB, 'utf-8');
    const data = JSON.parse(dataContacts);

    for (let i = 0; i < number; i++) {
      data.push(createFakeContact());
    }

    const newData = JSON.stringify(data, null, 2);
    await fs.writeFile(PATH_DB, newData, 'utf-8');

    console.log(`Successfully added ${number} contacts.`);
  } catch (error) {
    console.log('Error:', error);
  }
};

await generateContacts(5);

