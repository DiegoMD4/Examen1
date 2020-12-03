import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'proveedores'}}})
export class Proveedores extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'proveedorid', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  proveedorid: number;

  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombreProveedor', dataType: 'nvarchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombreProveedor?: string;

  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'observacion', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  observacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Proveedores>) {
    super(data);
  }
}

export interface ProveedoresRelations {
  // describe navigational properties here
}

export type ProveedoresWithRelations = Proveedores & ProveedoresRelations;
