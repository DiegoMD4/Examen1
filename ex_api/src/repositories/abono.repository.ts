import {DefaultCrudRepository} from '@loopback/repository';
import {Abono, AbonoRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AbonoRepository extends DefaultCrudRepository<
  Abono,
  typeof Abono.prototype.abonoid,
  AbonoRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Abono, dataSource);
  }
}
