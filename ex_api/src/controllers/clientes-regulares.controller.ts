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
import {ClientesRegulares} from '../models';
import {ClientesRegularesRepository} from '../repositories';

export class ClientesRegularesController {
  constructor(
    @repository(ClientesRegularesRepository)
    public clientesRegularesRepository : ClientesRegularesRepository,
  ) {}

  @post('/clientes-regulares', {
    responses: {
      '200': {
        description: 'ClientesRegulares model instance',
        content: {'application/json': {schema: getModelSchemaRef(ClientesRegulares)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClientesRegulares, {
            title: 'NewClientesRegulares',
            exclude: ['id'],
          }),
        },
      },
    })
    clientesRegulares: Omit<ClientesRegulares, 'id'>,
  ): Promise<ClientesRegulares> {
    return this.clientesRegularesRepository.create(clientesRegulares);
  }

  @get('/clientes-regulares/count', {
    responses: {
      '200': {
        description: 'ClientesRegulares model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ClientesRegulares) where?: Where<ClientesRegulares>,
  ): Promise<Count> {
    return this.clientesRegularesRepository.count(where);
  }

  @get('/clientes-regulares', {
    responses: {
      '200': {
        description: 'Array of ClientesRegulares model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ClientesRegulares, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ClientesRegulares) filter?: Filter<ClientesRegulares>,
  ): Promise<ClientesRegulares[]> {
    return this.clientesRegularesRepository.find(filter);
  }

  @patch('/clientes-regulares', {
    responses: {
      '200': {
        description: 'ClientesRegulares PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClientesRegulares, {partial: true}),
        },
      },
    })
    clientesRegulares: ClientesRegulares,
    @param.where(ClientesRegulares) where?: Where<ClientesRegulares>,
  ): Promise<Count> {
    return this.clientesRegularesRepository.updateAll(clientesRegulares, where);
  }

  @get('/clientes-regulares/{id}', {
    responses: {
      '200': {
        description: 'ClientesRegulares model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ClientesRegulares, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ClientesRegulares, {exclude: 'where'}) filter?: FilterExcludingWhere<ClientesRegulares>
  ): Promise<ClientesRegulares> {
    return this.clientesRegularesRepository.findById(id, filter);
  }

  @patch('/clientes-regulares/{id}', {
    responses: {
      '204': {
        description: 'ClientesRegulares PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ClientesRegulares, {partial: true}),
        },
      },
    })
    clientesRegulares: ClientesRegulares,
  ): Promise<void> {
    await this.clientesRegularesRepository.updateById(id, clientesRegulares);
  }

  @put('/clientes-regulares/{id}', {
    responses: {
      '204': {
        description: 'ClientesRegulares PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() clientesRegulares: ClientesRegulares,
  ): Promise<void> {
    await this.clientesRegularesRepository.replaceById(id, clientesRegulares);
  }

  @del('/clientes-regulares/{id}', {
    responses: {
      '204': {
        description: 'ClientesRegulares DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.clientesRegularesRepository.deleteById(id);
  }
}
