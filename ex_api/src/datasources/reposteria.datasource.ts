import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Reposteria',
  connector: 'mssql',
  url: 'mssql://D41701_M20_SQLLogin_1:ls5ryf1j9t@ReposteriaExamen.mssql.somee.com/ReposteriaExamen',
  host: 'ReposteriaExamen.mssql.somee.com',
  port: 1433,
  user: 'D41701_M20_SQLLogin_1',
  password: 'ls5ryf1j9t',
  database: 'ReposteriaExamen'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ReposteriaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Reposteria';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Reposteria', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
