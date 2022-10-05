module.exports = {
  '/master-jenis-pembayaran': {
    get: {
      tags: ['Master Jenis Pembayaran'],
      summary: 'Get All Master Jenis Pembayaran',
      produces: ['application/json'],
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          $ref: '#/components/parameters/page',
        },
        {
          $ref: '#/components/parameters/pageSize',
        },
        {
          $ref: '#/components/parameters/filtered',
        },
        {
          $ref: '#/components/parameters/sorted',
        },
      ],
      responses: {
        200: {
          description: 'Get All Master Jenis Pembayaran',
        },
      },
    },
    post: {
      tags: ['Master Jenis Pembayaran'],
      summary: 'Create New Master Jenis Pembayaran',
      security: [
        {
          auth_token: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                nama: {
                  type: 'string',
                },
              },
              required: ['nama'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Create New Master Jenis Pembayaran',
        },
      },
    },
  },
  '/master-jenis-pembayaran/{id}': {
    get: {
      tags: ['Master Jenis Pembayaran'],
      summary: 'Get Master Jenis Pembayaran By Id',
      produces: ['application/json'],
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Master Jenis Pembayaran Id',
        },
      ],
      responses: {
        200: {
          description: 'Get Master Jenis Pembayaran By Id',
        },
      },
    },
    put: {
      tags: ['Master Jenis Pembayaran'],
      summary: 'Update Data Master Jenis Pembayaran',
      security: [
        {
          auth_token: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Master Jenis Pembayaran Id',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/x-www-form-urlencoded': {
            schema: {
              type: 'object',
              properties: {
                nama: {
                  type: 'string',
                },
              },
              required: ['nama'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Update Data Master Jenis Pembayaran',
        },
      },
    },
    delete: {
      tags: ['Master Jenis Pembayaran'],
      summary: 'Delete Master Jenis Pembayaran By Id',
      security: [
        {
          auth_token: [],
        },
      ],
      produces: ['application/json'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Master Jenis Pembayaran Id',
        },
      ],
      responses: {
        200: {
          description: 'Delete Master Jenis Pembayaran By Id',
        },
      },
    },
  },
}
