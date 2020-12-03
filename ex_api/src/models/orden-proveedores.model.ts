import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ordenProveedores'}}
})
export class OrdenProveedores extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id_ordenproveedor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idOrdenproveedor: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'proveedorid', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  proveedorid: number;

  @property({
    type: 'date',
    mssql: {columnName: 'fechaOrden', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechaOrden?: string;

  @property({
    type: 'date',
    mssql: {columnName: 'fechaEntrega', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechaEntrega?: string;

  @property({
    type: 'boolean',
    mssql: {columnName: 'estadoOr', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  estadoOr?: boolean;

  @property({
    type: 'number',
    precision: 24,
    mssql: {columnName: 'cobroadicional', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  cobroadicional?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<OrdenProveedores>) {
    super(data);
  }
}

export interface OrdenProveedoresRelations {
  // describe navigational properties here
}

export type OrdenProveedoresWithRelations = OrdenProveedores & OrdenProveedoresRelations;
