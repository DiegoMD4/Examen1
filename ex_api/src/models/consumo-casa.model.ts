import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ConsumoCasa'}}})
export class ConsumoCasa extends Entity {
  @property({
    type: 'string',
    length: 60,
    mssql: {columnName: 'Detalle_Gastos', dataType: 'nvarchar', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  detalleGastos?: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Precio_Dinero', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  precioDinero: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ConsumoCasa>) {
    super(data);
  }
}

export interface ConsumoCasaRelations {
  // describe navigational properties here
}

export type ConsumoCasaWithRelations = ConsumoCasa & ConsumoCasaRelations;
