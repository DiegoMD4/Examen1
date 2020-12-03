import {DefaultCrudRepository} from '@loopback/repository';
import {Credito, CreditoRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CreditoRepository extends DefaultCrudRepository<
  Credito,
  typeof Credito.prototype.idCredito,
  CreditoRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Credito, dataSource);
  }
}
