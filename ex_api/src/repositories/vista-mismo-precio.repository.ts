import {DefaultCrudRepository} from '@loopback/repository';
import {VistaMismoPrecio, VistaMismoPrecioRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VistaMismoPrecioRepository extends DefaultCrudRepository<
  VistaMismoPrecio,
  typeof VistaMismoPrecio.prototype.id,
  VistaMismoPrecioRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(VistaMismoPrecio, dataSource);
  }
}
