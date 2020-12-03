import {DefaultCrudRepository} from '@loopback/repository';
import {OrigenGasto, OrigenGastoRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrigenGastoRepository extends DefaultCrudRepository<
  OrigenGasto,
  typeof OrigenGasto.prototype.id,
  OrigenGastoRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(OrigenGasto, dataSource);
  }
}
