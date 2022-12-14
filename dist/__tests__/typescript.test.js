"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeScript = __importStar(require("../../src/typescript"));
var options_1 = __importDefault(require("../../src/options"));
var options = new options_1.default({});
var schemaName = 'testschemaname';
describe('TypeScript', function () {
    describe('generateTableInterface', function () {
        it('empty table definition object', function () {
            var _a = TypeScript.generateTableInterface('tableName', {
                columns: {},
                primaryKey: null,
            }, schemaName, options), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table tableName\n              export interface TableName {\n                }\n              export interface TableNameInsert {\n                }\n              export interface TableNameUpdate {\n                }\n              const tableName = {\n                tableName: 'tableName',\n                columns: [],\n                requiredForInsert: [],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as TableName,\n                $insert: null as unknown as TableNameInsert,\n                $update: null as unknown as TableNameUpdate\n              } as const;\n          \"\n      ");
            expect(types).toEqual(new Set());
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"TableNameInsert\",\n          \"type\": \"TableName\",\n          \"update\": \"TableNameUpdate\",\n          \"var\": \"tableName\",\n        }\n      ");
        });
        it('table with underscores and schema prefix', function () {
            var _a = TypeScript.generateTableInterface('table_name', {
                columns: {},
                primaryKey: null,
            }, schemaName, new options_1.default({
                prefixWithSchemaNames: true,
            })), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table testschemaname.table_name\n              export interface TestschemanameTableName {\n                }\n              export interface TestschemanameTableNameInsert {\n                }\n              export interface TestschemanameTableNameUpdate {\n                }\n              const testschemaname_table_name = {\n                tableName: 'testschemaname.table_name',\n                columns: [],\n                requiredForInsert: [],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as TestschemanameTableName,\n                $insert: null as unknown as TestschemanameTableNameInsert,\n                $update: null as unknown as TestschemanameTableNameUpdate\n              } as const;\n          \"\n      ");
            expect(types).toEqual(new Set());
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"TestschemanameTableNameInsert\",\n          \"type\": \"TestschemanameTableName\",\n          \"update\": \"TestschemanameTableNameUpdate\",\n          \"var\": \"testschemaname_table_name\",\n        }\n      ");
        });
        it('table with "I" prefix', function () {
            var _a = TypeScript.generateTableInterface('table_name', {
                columns: {},
                primaryKey: null,
            }, schemaName, new options_1.default({
                prefixWithI: true,
            })), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table table_name\n              export interface ITableName {\n                }\n              export interface ITableNameInsert {\n                }\n              export interface ITableNameUpdate {\n                }\n              const table_name = {\n                tableName: 'table_name',\n                columns: [],\n                requiredForInsert: [],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as ITableName,\n                $insert: null as unknown as ITableNameInsert,\n                $update: null as unknown as ITableNameUpdate\n              } as const;\n          \"\n      ");
            expect(types).toEqual(new Set());
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"ITableNameInsert\",\n          \"type\": \"ITableName\",\n          \"update\": \"ITableNameUpdate\",\n          \"var\": \"table_name\",\n        }\n      ");
        });
        it('convert plural table into singular interface', function () {
            var _a = TypeScript.generateTableInterface('table_names', {
                columns: {},
                primaryKey: null,
            }, schemaName, new options_1.default({
                singularizeInterfaces: true,
            })), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table table_names\n              export interface TableName {\n                }\n              export interface TableNameInsert {\n                }\n              export interface TableNameUpdate {\n                }\n              const table_names = {\n                tableName: 'table_names',\n                columns: [],\n                requiredForInsert: [],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as TableName,\n                $insert: null as unknown as TableNameInsert,\n                $update: null as unknown as TableNameUpdate\n              } as const;\n          \"\n      ");
            expect(types).toEqual(new Set());
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"TableNameInsert\",\n          \"type\": \"TableName\",\n          \"update\": \"TableNameUpdate\",\n          \"var\": \"table_names\",\n        }\n      ");
        });
        it('table name is reserved', function () {
            var _a = TypeScript.generateTableInterface('package', {
                columns: {},
                primaryKey: null,
            }, schemaName, options), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table package\n              export interface Package {\n                }\n              export interface PackageInsert {\n                }\n              export interface PackageUpdate {\n                }\n              const package_ = {\n                tableName: 'package',\n                columns: [],\n                requiredForInsert: [],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as Package,\n                $insert: null as unknown as PackageInsert,\n                $update: null as unknown as PackageUpdate\n              } as const;\n          \"\n      ");
            expect(types).toEqual(new Set());
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"PackageInsert\",\n          \"type\": \"Package\",\n          \"update\": \"PackageUpdate\",\n          \"var\": \"package_\",\n        }\n      ");
        });
        it('table with columns', function () {
            var _a = TypeScript.generateTableInterface('tableName', {
                columns: {
                    col1: {
                        udtName: 'char',
                        tsType: 'string',
                        nullable: false,
                        hasDefault: false,
                    },
                    col2: {
                        udtName: 'bool',
                        tsType: 'boolean',
                        nullable: false,
                        hasDefault: false,
                    },
                },
                primaryKey: null,
            }, schemaName, options), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table tableName\n              export interface TableName {\n                col1: string;\n        col2: boolean;\n        }\n              export interface TableNameInsert {\n                col1: string;\n        col2: boolean;\n        }\n              export interface TableNameUpdate {\n                col1?: string;\n        col2?: boolean;\n        }\n              const tableName = {\n                tableName: 'tableName',\n                columns: ['col1', 'col2'],\n                requiredForInsert: ['col1', 'col2'],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as TableName,\n                $insert: null as unknown as TableNameInsert,\n                $update: null as unknown as TableNameUpdate\n              } as const;\n          \"\n      ");
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"TableNameInsert\",\n          \"type\": \"TableName\",\n          \"update\": \"TableNameUpdate\",\n          \"var\": \"tableName\",\n        }\n      ");
            expect(types).toEqual(new Set());
        });
        it('table with reserved columns', function () {
            var _a = TypeScript.generateTableInterface('tableName', {
                columns: {
                    string: {
                        udtName: 'name1',
                        tsType: 'string',
                        nullable: false,
                        hasDefault: false,
                    },
                    number: {
                        udtName: 'name2',
                        tsType: 'number',
                        nullable: false,
                        hasDefault: false,
                    },
                    package: {
                        udtName: 'name3',
                        tsType: 'boolean',
                        nullable: false,
                        hasDefault: false,
                    },
                },
                primaryKey: null,
            }, schemaName, options), tableInterface = _a[0], names = _a[1], types = _a[2];
            // None of the reserved word columns need to be quoted.
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table tableName\n              export interface TableName {\n                string: string;\n        number: number;\n        package: boolean;\n        }\n              export interface TableNameInsert {\n                string: string;\n        number: number;\n        package: boolean;\n        }\n              export interface TableNameUpdate {\n                string?: string;\n        number?: number;\n        package?: boolean;\n        }\n              const tableName = {\n                tableName: 'tableName',\n                columns: ['string', 'number', 'package'],\n                requiredForInsert: ['string', 'number', 'package'],\n                primaryKey: null,\n                foreignKeys: {},\n                $type: null as unknown as TableName,\n                $insert: null as unknown as TableNameInsert,\n                $update: null as unknown as TableNameUpdate\n              } as const;\n          \"\n      ");
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"TableNameInsert\",\n          \"type\": \"TableName\",\n          \"update\": \"TableNameUpdate\",\n          \"var\": \"tableName\",\n        }\n      ");
            expect(types).toEqual(new Set());
        });
        it('table with foreign key', function () {
            var _a = TypeScript.generateTableInterface('table_with_foreign_key', {
                columns: {
                    id: {
                        udtName: 'varchar',
                        tsType: 'string',
                        nullable: false,
                        hasDefault: false,
                    },
                    user_id: {
                        udtName: 'char',
                        tsType: 'string',
                        nullable: false,
                        hasDefault: false,
                        foreignKey: {
                            table: 'other_table',
                            column: 'id',
                        },
                    },
                    sentiment: {
                        udtName: 'char',
                        tsType: 'string',
                        nullable: false,
                        hasDefault: false,
                    },
                },
                primaryKey: 'id',
            }, schemaName, options), tableInterface = _a[0], names = _a[1], types = _a[2];
            expect(tableInterface).toMatchInlineSnapshot("\n        \"\n              // Table table_with_foreign_key\n              export interface TableWithForeignKey {\n                id: string;\n        user_id: string;\n        sentiment: string;\n        }\n              export interface TableWithForeignKeyInsert {\n                id: string;\n        user_id: string;\n        sentiment: string;\n        }\n              export interface TableWithForeignKeyUpdate {\n                id?: string;\n        user_id?: string;\n        sentiment?: string;\n        }\n              const table_with_foreign_key = {\n                tableName: 'table_with_foreign_key',\n                columns: ['id', 'user_id', 'sentiment'],\n                requiredForInsert: ['id', 'user_id', 'sentiment'],\n                primaryKey: 'id',\n                foreignKeys: {user_id: { table: 'other_table', column: 'id', $type: null as unknown /* other_table */ },},\n                $type: null as unknown as TableWithForeignKey,\n                $insert: null as unknown as TableWithForeignKeyInsert,\n                $update: null as unknown as TableWithForeignKeyUpdate\n              } as const;\n          \"\n      ");
            expect(names).toMatchInlineSnapshot("\n        Object {\n          \"insert\": \"TableWithForeignKeyInsert\",\n          \"type\": \"TableWithForeignKey\",\n          \"update\": \"TableWithForeignKeyUpdate\",\n          \"var\": \"table_with_foreign_key\",\n        }\n      ");
            expect(types).toEqual(new Set());
        });
    });
    describe('generateEnumType', function () {
        it('empty object', function () {
            var enumType = TypeScript.generateEnumType({}, options);
            expect(enumType).toEqual('');
        });
        it('with enumerations', function () {
            var enumType = TypeScript.generateEnumType({
                enum1: ['val1', 'val2', 'val3', 'val4'],
                enum2: ['val5', 'val6', 'val7', 'val8'],
            }, options);
            expect(enumType).toEqual("export type enum1 = 'val1' | 'val2' | 'val3' | 'val4';\n" +
                "export type enum2 = 'val5' | 'val6' | 'val7' | 'val8';\n");
        });
    });
    describe('attachJoinTypes', function () {
        var tsCode = "\n    const table_with_foreign_key = {\n      tableName: 'table_with_foreign_key',\n      columns: ['id', 'user_id', 'sentiment'],\n      requiredForInsert: ['id', 'user_id', 'sentiment'],\n      primaryKey: 'id',\n      foreignKeys: {user_id: { table: 'other_table', column: 'id', $type: null as unknown /* other_table */ },},\n      $type: null as unknown as TableWithForeignKey,\n      $insert: null as unknown as TableWithForeignKeyInsert,\n      $update: null as unknown as TableWithForeignKeyUpdate\n    } as const;\n    ";
        it('should attach joined types to generated TypeScript output', function () {
            expect(TypeScript.attachJoinTypes(tsCode, {
                other_table: {
                    var: 'other_table',
                    type: 'OtherTable',
                    insert: 'OtherTableInsert',
                    update: 'OtherTableUpdate',
                },
            })).toMatchInlineSnapshot("\n        \"\n            const table_with_foreign_key = {\n              tableName: 'table_with_foreign_key',\n              columns: ['id', 'user_id', 'sentiment'],\n              requiredForInsert: ['id', 'user_id', 'sentiment'],\n              primaryKey: 'id',\n              foreignKeys: {user_id: { table: 'other_table', column: 'id', $type: null as unknown as OtherTable },},\n              $type: null as unknown as TableWithForeignKey,\n              $insert: null as unknown as TableWithForeignKeyInsert,\n              $update: null as unknown as TableWithForeignKeyUpdate\n            } as const;\n            \"\n      ");
        });
        it('should leave unmatched types alone', function () {
            expect(TypeScript.attachJoinTypes(tsCode, {})).toMatchInlineSnapshot("\n        \"\n            const table_with_foreign_key = {\n              tableName: 'table_with_foreign_key',\n              columns: ['id', 'user_id', 'sentiment'],\n              requiredForInsert: ['id', 'user_id', 'sentiment'],\n              primaryKey: 'id',\n              foreignKeys: {user_id: { table: 'other_table', column: 'id', $type: null as unknown /* other_table */ },},\n              $type: null as unknown as TableWithForeignKey,\n              $insert: null as unknown as TableWithForeignKeyInsert,\n              $update: null as unknown as TableWithForeignKeyUpdate\n            } as const;\n            \"\n      ");
        });
    });
});
//# sourceMappingURL=typescript.test.js.map