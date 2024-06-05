import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const dataContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dataContacts);
    const contactCount = contacts.length;
    console.log(`Total number of contacts: ${contactCount}`);
    return contactCount;
    
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
