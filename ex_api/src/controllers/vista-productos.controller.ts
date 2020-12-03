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
import {Vista2productos} from '../models';
import {Vista2productosRepository} from '../repositories';

export class VistaProductosController {
  constructor(
    @repository(Vista2productosRepository)
    public vista2ProductosRepository : Vista2productosRepository,
  ) {}

  @post('/vista2productos', {
    responses: {
      '200': {
        description: 'Vista2Productos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vista2productos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vista2productos, {
            title: 'NewVista2Productos',
            exclude: ['id'],
          }),
        },
      },
    })
    vista2Productos: Omit<Vista2productos, 'id'>,
  ): Promise<Vista2productos> {
    return this.vista2ProductosRepository.create(vista2Productos);
  }

  @get('/vista2productos/count', {
    responses: {
      '200': {
        description: 'Vista2Productos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Vista2productos) where?: Where<Vista2productos>,
  ): Promise<Count> {
    return this.vista2ProductosRepository.count(where);
  }

  @get('/vista2productos', {
    responses: {
      '200': {
        description: 'Array of Vista2Productos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Vista2productos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Vista2productos) filter?: Filter<Vista2productos>,
  ): Promise<Vista2productos[]> {
    return this.vista2ProductosRepository.find(filter);
  }

  @patch('/vista2productos', {
    responses: {
      '200': {
        description: 'Vista2Productos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vista2productos, {partial: true}),
        },
      },
    })
    vista2Productos: Vista2productos,
    @param.where(Vista2productos) where?: Where<Vista2productos>,
  ): Promise<Count> {
    return this.vista2ProductosRepository.updateAll(vista2Productos, where);
  }

  @get('/vista2productos/{id}', {
    responses: {
      '200': {
        description: 'Vista2Productos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vista2productos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Vista2productos, {exclude: 'where'}) filter?: FilterExcludingWhere<Vista2productos>
  ): Promise<Vista2productos> {
    return this.vista2ProductosRepository.findById(id, filter);
  }

  @patch('/vista2productos/{id}', {
    responses: {
      '204': {
        description: 'Vista2Productos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vista2productos, {partial: true}),
        },
      },
    })
    vista2Productos: Vista2productos,
  ): Promise<void> {
    await this.vista2ProductosRepository.updateById(id, vista2Productos);
  }

  @put('/vista2productos/{id}', {
    responses: {
      '204': {
        description: 'Vista2Productos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() vista2Productos: Vista2productos,
  ): Promise<void> {
    await this.vista2ProductosRepository.replaceById(id, vista2Productos);
  }

  @del('/vista2productos/{id}', {
    responses: {
      '204': {
        description: 'Vista2Productos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vista2ProductosRepository.deleteById(id);
  }
}
