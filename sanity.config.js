import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

export default defineConfig({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  title: 'Studio',
  apiVersion: process.env.SANITY_API_VERSION || '2024-07-10',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {types: schemas}
});
