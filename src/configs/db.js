import Dexie from 'dexie';

export const db = new Dexie('gmap_react_db');

db.version(1).stores({
  list: '++index, id, title, created_at, address, geometry, etc', // Primary key and indexed props
});
