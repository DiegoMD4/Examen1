import {DefaultCrudRepository} from '@loopback/repository';
import {Categoria, CategoriaRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.idCategoria,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
