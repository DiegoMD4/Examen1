import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Origen_Gasto'}}})
export class OrigenGasto extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ID_', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    length: 20,
    mssql: {columnName: 'Origen', dataType: 'nvarchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  origen?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrigenGasto>) {
    super(data);
  }
}

export interface OrigenGastoRelations {
  // describe navigational properties here
}

export type OrigenGastoWithRelations = OrigenGasto & OrigenGastoRelations;
