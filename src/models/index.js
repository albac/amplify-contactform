// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContactForm } = initSchema(schema);

export {
  ContactForm
};