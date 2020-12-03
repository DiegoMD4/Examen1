import {DefaultCrudRepository} from '@loopback/repository';
import {ConsumoCasa, ConsumoCasaRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConsumoCasaRepository extends DefaultCrudRepository<
  ConsumoCasa,
  typeof ConsumoCasa.prototype.ID_Gastos,
  ConsumoCasaRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(ConsumoCasa, dataSource);
  }
}
