import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ConsumoCasa} from '../models';
import {ConsumoCasaRepository} from '../repositories';

export class ConsumoCasaController {
  constructor(
    @repository(ConsumoCasaRepository)
    public consumoCasaRepository : ConsumoCasaRepository,
  ) {}

  @post('/consumo-casas', {
    responses: {
      '200': {
        description: 'ConsumoCasa model instance',
        content: {'application/json': {schema: getModelSchemaRef(ConsumoCasa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoCasa, {
            title: 'NewConsumoCasa',
            exclude: ['id'],
          }),
        },
      },
    })
    consumoCasa: Omit<ConsumoCasa, 'id'>,
  ): Promise<ConsumoCasa> {
    return this.consumoCasaRepository.create(consumoCasa);
  }

  @get('/consumo-casas/count', {
    responses: {
      '200': {
        description: 'ConsumoCasa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ConsumoCasa) where?: Where<ConsumoCasa>,
  ): Promise<Count> {
    return this.consumoCasaRepository.count(where);
  }

  @get('/consumo-casas', {
    responses: {
      '200': {
        description: 'Array of ConsumoCasa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ConsumoCasa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ConsumoCasa) filter?: Filter<ConsumoCasa>,
  ): Promise<ConsumoCasa[]> {
    return this.consumoCasaRepository.find(filter);
  }

  @patch('/consumo-casas', {
    responses: {
      '200': {
        description: 'ConsumoCasa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoCasa, {partial: true}),
        },
      },
    })
    consumoCasa: ConsumoCasa,
    @param.where(ConsumoCasa) where?: Where<ConsumoCasa>,
  ): Promise<Count> {
    return this.consumoCasaRepository.updateAll(consumoCasa, where);
  }

  @get('/consumo-casas/{id}', {
    responses: {
      '200': {
        description: 'ConsumoCasa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ConsumoCasa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ConsumoCasa, {exclude: 'where'}) filter?: FilterExcludingWhere<ConsumoCasa>
  ): Promise<ConsumoCasa> {
    return this.consumoCasaRepository.findById(id, filter);
  }

  @patch('/consumo-casas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoCasa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoCasa, {partial: true}),
        },
      },
    })
    consumoCasa: ConsumoCasa,
  ): Promise<void> {
    await this.consumoCasaRepository.updateById(id, consumoCasa);
  }

  @put('/consumo-casas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoCasa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() consumoCasa: ConsumoCasa,
  ): Promise<void> {
    await this.consumoCasaRepository.replaceById(id, consumoCasa);
  }

  @del('/consumo-casas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoCasa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.consumoCasaRepository.deleteById(id);
  }
}
