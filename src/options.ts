import {camelCase, upperFirst} from 'lodash';

const DEFAULT_OPTIONS: OptionValues = {
  writeHeader: true,
  camelCase: false,
  datesAsStrings: false,
  prefixWithSchemaNames: false,
  prefixWithI: false,
  singularizeInterfaces: false,
};

export type OptionValues = {
  camelCase?: boolean;
  /** Leave date, timestamp, and timestamptz columns as strings, rather than Dates. */
  datesAsStrings?: boolean;
  writeHeader?: boolean; // write schemats description header
  /** Import types for jsdoc-tagged JSON columns from this path */
  jsonTypesFile?: string;
  /** Prefix the tablenames with the schema name. */
  prefixWithSchemaNames?: boolean;
  /** Prefix the tablename interfaces with I. */
  prefixWithI?: boolean;
  singularizeInterfaces?: boolean;
};

export default class Options {
  public options: OptionValues;

  constructor(options: OptionValues = {}) {
    this.options = {...DEFAULT_OPTIONS, ...options};
  }

  transformTypeName(typename: string) {
    return this.options.camelCase ? upperFirst(camelCase(typename)) : typename;
  }

  transformColumnName(columnName: string) {
    return this.options.camelCase ? camelCase(columnName) : columnName;
  }
}
