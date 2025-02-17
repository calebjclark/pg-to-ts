import * as Fs from 'fs';
import {typescriptOfSchema} from '../src/index';
import {PostgresDatabase} from '../src/schemaPostgres';

export async function loadSchema(db: PostgresDatabase, file: string) {
  const query = Fs.readFileSync(file, {
    encoding: 'utf8',
  });
  return await db.query(query);
}

export async function getGeneratedTs(
  inputSQLFile: string,
  inputConfigFile: string,
  db: PostgresDatabase,
) {
  await loadSchema(db, inputSQLFile);
  const config = JSON.parse(Fs.readFileSync(inputConfigFile, 'utf8'));
  const {tables, schema, ...options} = config;
  return typescriptOfSchema(db, tables, [], schema, options);
}
