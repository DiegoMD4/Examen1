import {DefaultCrudRepository} from '@loopback/repository';
import {ClientesRegulares, ClientesRegularesRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientesRegularesRepository extends DefaultCrudRepository<
  ClientesRegulares,
  typeof ClientesRegulares.prototype.id_cliente,
  ClientesRegularesRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(ClientesRegulares, dataSource);
  }
}
