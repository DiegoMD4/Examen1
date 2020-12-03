import {DefaultCrudRepository} from '@loopback/repository';
import {Venta, VentaRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.ventaid,
  VentaRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Venta, dataSource);
  }
}
