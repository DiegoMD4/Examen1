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
import {VistaMismoPrecio} from '../models';
import {VistaMismoPrecioRepository} from '../repositories';

export class VistaMismoPrecioController {
  constructor(
    @repository(VistaMismoPrecioRepository)
    public vistaMismoPrecioRepository : VistaMismoPrecioRepository,
  ) {}

  @post('/vista-mismo-precios', {
    responses: {
      '200': {
        description: 'VistaMismoPrecio model instance',
        content: {'application/json': {schema: getModelSchemaRef(VistaMismoPrecio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VistaMismoPrecio, {
            title: 'NewVistaMismoPrecio',
            exclude: ['id'],
          }),
        },
      },
    })
    vistaMismoPrecio: Omit<VistaMismoPrecio, 'id'>,
  ): Promise<VistaMismoPrecio> {
    return this.vistaMismoPrecioRepository.create(vistaMismoPrecio);
  }

  @get('/vista-mismo-precios/count', {
    responses: {
      '200': {
        description: 'VistaMismoPrecio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(VistaMismoPrecio) where?: Where<VistaMismoPrecio>,
  ): Promise<Count> {
    return this.vistaMismoPrecioRepository.count(where);
  }

  @get('/vista-mismo-precios', {
    responses: {
      '200': {
        description: 'Array of VistaMismoPrecio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VistaMismoPrecio, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(VistaMismoPrecio) filter?: Filter<VistaMismoPrecio>,
  ): Promise<VistaMismoPrecio[]> {
    return this.vistaMismoPrecioRepository.find(filter);
  }

  @patch('/vista-mismo-precios', {
    responses: {
      '200': {
        description: 'VistaMismoPrecio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VistaMismoPrecio, {partial: true}),
        },
      },
    })
    vistaMismoPrecio: VistaMismoPrecio,
    @param.where(VistaMismoPrecio) where?: Where<VistaMismoPrecio>,
  ): Promise<Count> {
    return this.vistaMismoPrecioRepository.updateAll(vistaMismoPrecio, where);
  }

  @get('/vista-mismo-precios/{id}', {
    responses: {
      '200': {
        description: 'VistaMismoPrecio model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VistaMismoPrecio, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(VistaMismoPrecio, {exclude: 'where'}) filter?: FilterExcludingWhere<VistaMismoPrecio>
  ): Promise<VistaMismoPrecio> {
    return this.vistaMismoPrecioRepository.findById(id, filter);
  }

  @patch('/vista-mismo-precios/{id}', {
    responses: {
      '204': {
        description: 'VistaMismoPrecio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VistaMismoPrecio, {partial: true}),
        },
      },
    })
    vistaMismoPrecio: VistaMismoPrecio,
  ): Promise<void> {
    await this.vistaMismoPrecioRepository.updateById(id, vistaMismoPrecio);
  }

  @put('/vista-mismo-precios/{id}', {
    responses: {
      '204': {
        description: 'VistaMismoPrecio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vistaMismoPrecio: VistaMismoPrecio,
  ): Promise<void> {
    await this.vistaMismoPrecioRepository.replaceById(id, vistaMismoPrecio);
  }

  @del('/vista-mismo-precios/{id}', {
    responses: {
      '204': {
        description: 'VistaMismoPrecio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vistaMismoPrecioRepository.deleteById(id);
  }
}
