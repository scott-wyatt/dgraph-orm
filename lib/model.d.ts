import Schema from './schema';
import Connection from './connection';
import { QueryParams } from './types';
declare class Model {
    [index: string]: any;
    schema: Schema;
    models: any;
    connection: Connection;
    private _logger;
    constructor(schema: Schema, models: any, connection: Connection, logger: Function);
    private _check_if_password_type;
    checkPassword(uid: string, field: string, password: string): Promise<any>;
    private _generate_methods;
    private _execute;
    private _method;
    query(query: string): Promise<any>;
    queryWithVars(params: QueryParams): Promise<any>;
    private _is_relation;
    private _parse_mutation;
    private _create;
    create(data: any): Promise<any>;
    private _update;
    update(data: any, uid: any): Promise<any>;
    private _delete;
    delete(params: any, uid?: any): Promise<any>;
    private _get_unique_fields;
    private _check_unique_values;
    private _check_attributes;
    private _all_attributes;
    private _validate;
}
export default Model;