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
import {VistaPrecioDistinto} from '../models';
import {VistaPrecioDistintoRepository} from '../repositories';

export class Vista30PorcientoController {
  constructor(
    @repository(VistaPrecioDistintoRepository)
    public vistaPrecioDistintoRepository : VistaPrecioDistintoRepository,
  ) {}

  @post('/vista-precio-distintos', {
    responses: {
      '200': {
        description: 'VistaPrecioDistinto model instance',
        content: {'application/json': {schema: getModelSchemaRef(VistaPrecioDistinto)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VistaPrecioDistinto, {
            title: 'NewVistaPrecioDistinto',
            exclude: ['id'],
          }),
        },
      },
    })
    vistaPrecioDistinto: Omit<VistaPrecioDistinto, 'id'>,
  ): Promise<VistaPrecioDistinto> {
    return this.vistaPrecioDistintoRepository.create(vistaPrecioDistinto);
  }

  @get('/vista-precio-distintos/count', {
    responses: {
      '200': {
        description: 'VistaPrecioDistinto model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(VistaPrecioDistinto) where?: Where<VistaPrecioDistinto>,
  ): Promise<Count> {
    return this.vistaPrecioDistintoRepository.count(where);
  }

  @get('/vista-precio-distintos', {
    responses: {
      '200': {
        description: 'Array of VistaPrecioDistinto model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VistaPrecioDistinto, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(VistaPrecioDistinto) filter?: Filter<VistaPrecioDistinto>,
  ): Promise<VistaPrecioDistinto[]> {
    return this.vistaPrecioDistintoRepository.find(filter);
  }

  @patch('/vista-precio-distintos', {
    responses: {
      '200': {
        description: 'VistaPrecioDistinto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VistaPrecioDistinto, {partial: true}),
        },
      },
    })
    vistaPrecioDistinto: VistaPrecioDistinto,
    @param.where(VistaPrecioDistinto) where?: Where<VistaPrecioDistinto>,
  ): Promise<Count> {
    return this.vistaPrecioDistintoRepository.updateAll(vistaPrecioDistinto, where);
  }

  @get('/vista-precio-distintos/{id}', {
    responses: {
      '200': {
        description: 'VistaPrecioDistinto model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VistaPrecioDistinto, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(VistaPrecioDistinto, {exclude: 'where'}) filter?: FilterExcludingWhere<VistaPrecioDistinto>
  ): Promise<VistaPrecioDistinto> {
    return this.vistaPrecioDistintoRepository.findById(id, filter);
  }

  @patch('/vista-precio-distintos/{id}', {
    responses: {
      '204': {
        description: 'VistaPrecioDistinto PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VistaPrecioDistinto, {partial: true}),
        },
      },
    })
    vistaPrecioDistinto: VistaPrecioDistinto,
  ): Promise<void> {
    await this.vistaPrecioDistintoRepository.updateById(id, vistaPrecioDistinto);
  }

  @put('/vista-precio-distintos/{id}', {
    responses: {
      '204': {
        description: 'VistaPrecioDistinto PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vistaPrecioDistinto: VistaPrecioDistinto,
  ): Promise<void> {
    await this.vistaPrecioDistintoRepository.replaceById(id, vistaPrecioDistinto);
  }

  @del('/vista-precio-distintos/{id}', {
    responses: {
      '204': {
        description: 'VistaPrecioDistinto DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vistaPrecioDistintoRepository.deleteById(id);
  }
}
