import {DefaultCrudRepository} from '@loopback/repository';
import {GastoConsumos, GastoConsumosRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GastoConsumosRepository extends DefaultCrudRepository<
  GastoConsumos,
  typeof GastoConsumos.prototype.idGastos,
  GastoConsumosRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(GastoConsumos, dataSource);
  }
}
