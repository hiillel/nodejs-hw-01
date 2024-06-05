import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const dataContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dataContacts);

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    const newContacts = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, newContacts, 'utf-8');

    console.log(`Successfully added ${number} contacts.`);
  } catch (error) {
    console.log('Error:', error);
  }
};

await generateContacts(5);

