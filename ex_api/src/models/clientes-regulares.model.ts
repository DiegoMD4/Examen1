import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ClientesRegulares'}}
})
export class ClientesRegulares extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'nombre_cliente', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombreCliente: string;

  @property({
    type: 'number',
    precision: 24,
    mssql: {columnName: 'limitecredito', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  limitecredito?: number;

  @property({
    type: 'date',
    mssql: {columnName: 'fecha_abono', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fechaAbono?: string;

  @property({
    type: 'number',
    precision: 24,
    mssql: {columnName: 'abono', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  abono?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ClientesRegulares>) {
    super(data);
  }
}

export interface ClientesRegularesRelations {
  // describe navigational properties here
}

export type ClientesRegularesWithRelations = ClientesRegulares & ClientesRegularesRelations;
