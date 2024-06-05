import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const addedContact = createFakeContact();
    contacts.push(addedContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('Contact added successfully:', addedContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

await addOneContact();
