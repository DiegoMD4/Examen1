import {DefaultCrudRepository} from '@loopback/repository';
import {TablaReposteria, TablaReposteriaRelations} from '../models';
import {ReposteriaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TablaReposteriaRepository extends DefaultCrudRepository<
  TablaReposteria,
  typeof TablaReposteria.prototype.reposteriaId,
  TablaReposteriaRelations
> {
  constructor(
    @inject('datasources.Reposteria') dataSource: ReposteriaDataSource,
  ) {
    super(TablaReposteria, dataSource);
  }
}
