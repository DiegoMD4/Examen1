import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'TablaReposteria'}}
})
export class TablaReposteria extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ReposteriaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  reposteriaId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Pastel', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  pastel: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Precio', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  precio: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TablaReposteria>) {
    super(data);
  }
}

export interface TablaReposteriaRelations {
  // describe navigational properties here
}

export type TablaReposteriaWithRelations = TablaReposteria & TablaReposteriaRelations;
