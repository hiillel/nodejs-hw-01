import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {

  try {
    const dataContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dataContacts);

    return contacts;
    
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
