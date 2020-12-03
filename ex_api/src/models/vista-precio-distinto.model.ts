import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'VistaPrecioDistinto'}}
})
export class VistaPrecioDistinto extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'nombre_producto', dataType: 'nvarchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombreProducto: string;

  @property({
    type: 'number',
    precision: 24,
    mssql: {columnName: 'precio', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  precio?: number;

  @property({
    type: 'number',
    precision: 24,
    mssql: {columnName: 'precio_sugerido', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'YES'},
  })
  precioSugerido?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VistaPrecioDistinto>) {
    super(data);
  }
}

export interface VistaPrecioDistintoRelations {
  // describe navigational properties here
}

export type VistaPrecioDistintoWithRelations = VistaPrecioDistinto & VistaPrecioDistintoRelations;
