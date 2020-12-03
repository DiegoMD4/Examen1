import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Transacciones'}}})
export class Transacciones extends Entity {
  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombre_cliente', dataType: 'nvarchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombreCliente?: string;

  @property({
    type: 'number',
    precision: 24,
    mssql: {columnName: 'monto', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  monto?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transacciones>) {
    super(data);
  }
}

export interface TransaccionesRelations {
  // describe navigational properties here
}

export type TransaccionesWithRelations = Transacciones & TransaccionesRelations;
