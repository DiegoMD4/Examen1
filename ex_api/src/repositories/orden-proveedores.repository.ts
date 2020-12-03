import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProveedores, OrdenProveedoresRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProveedoresRepository extends DefaultCrudRepository<
  OrdenProveedores,
  typeof OrdenProveedores.prototype.idOrdenproveedor,
  OrdenProveedoresRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(OrdenProveedores, dataSource);
  }
}
