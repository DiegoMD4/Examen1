import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Vista2productos'}}
})
export class Vista2productos extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 100,
    mssql: {columnName: 'nombre_producto', dataType: 'nvarchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombreProducto: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'nombre_categoria', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombreCategoria: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidad: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vista2productos>) {
    super(data);
  }
}

export interface Vista2productosRelations {
  // describe navigational properties here
}

export type Vista2productosWithRelations = Vista2productos & Vista2productosRelations;
