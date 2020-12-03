import {DefaultCrudRepository} from '@loopback/repository';
import {Inventario, InventarioRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.idInventario,
  InventarioRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
