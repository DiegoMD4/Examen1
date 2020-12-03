import {DefaultCrudRepository} from '@loopback/repository';
import {Vista2productos, Vista2productosRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class Vista2productosRepository extends DefaultCrudRepository<
  Vista2productos,
  typeof Vista2productos.prototype.id,
  Vista2productosRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Vista2productos, dataSource);
  }
}
