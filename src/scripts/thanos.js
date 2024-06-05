import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const dataContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(dataContacts);
    const randomContacts = contacts.filter(() => Math.random() > 0.5);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(randomContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
};

await thanos();
