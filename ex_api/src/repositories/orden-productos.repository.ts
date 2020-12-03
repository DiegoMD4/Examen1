import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProductos, OrdenProductosRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProductosRepository extends DefaultCrudRepository<
  OrdenProductos,
  typeof OrdenProductos.prototype.idOp,
  OrdenProductosRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(OrdenProductos, dataSource);
  }
}
