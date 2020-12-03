import {DefaultCrudRepository} from '@loopback/repository';
import {VistaPrecioDistinto, VistaPrecioDistintoRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VistaPrecioDistintoRepository extends DefaultCrudRepository<
  VistaPrecioDistinto,
  typeof VistaPrecioDistinto.prototype.id,
  VistaPrecioDistintoRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(VistaPrecioDistinto, dataSource);
  }
}
