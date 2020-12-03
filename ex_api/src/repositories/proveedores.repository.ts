import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedores, ProveedoresRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedoresRepository extends DefaultCrudRepository<
  Proveedores,
  typeof Proveedores.prototype.proveedorid,
  ProveedoresRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Proveedores, dataSource);
  }
}
