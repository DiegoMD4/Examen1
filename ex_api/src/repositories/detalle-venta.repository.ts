import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleVenta, DetalleVentaRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleVentaRepository extends DefaultCrudRepository<
  DetalleVenta,
  typeof DetalleVenta.prototype.detalleid,
  DetalleVentaRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(DetalleVenta, dataSource);
  }
}
