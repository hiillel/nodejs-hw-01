import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const dataContacts = await fs.readFile(PATH_DB, []);
    return dataContacts;
  
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
