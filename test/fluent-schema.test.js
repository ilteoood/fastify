'use strict'

const t = require('tap')
const test = t.test
const Fastify = require('..')
const S = require('fluent-schema')

test('use fluent-schema object', t => {
  t.plan(15)
  const fastify = Fastify()

  fastify.post('/:id', {
    handler: (req, reply) => { reply.send({ name: 'a', surname: 'b', dateOfBirth: '01-01-2020' }) },
    schema: {
      params: S.object().prop('id', S.integer().minimum(42)),
      headers: S.object().prop('x-custom', S.string().format('email')),
      query: S.object().prop('surname', S.string().required()),
      body: S.object().prop('name', S.string().required()),
      response: {
        200: S.object()
          .prop('name', S.string())
          .prop('surname', S.string())
      }
    }
  })

  // check params
  fastify.inject({
    method: 'POST',
    url: '/1',
    headers: { 'x-custom': 'me@me.me' },
    query: { surname: 'bar' },
    payload: { name: 'foo' }
  }, (err, res) => {
    t.error(err)
    t.equals(res.statusCode, 400)
    t.deepEquals(res.json(), { statusCode: 400, error: 'Bad Request', message: 'params.id should be >= 42' })
  })

  // check header
  fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'invalid' },
    query: { surname: 'bar' },
    payload: { name: 'foo' }
  }, (err, res) => {
    t.error(err)
    t.equals(res.statusCode, 400)
    t.deepEquals(res.json(), { statusCode: 400, error: 'Bad Request', message: 'headers[\'x-custom\'] should match format "email"' })
  })

  // check query
  fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'me@me.me' },
    query: { },
    payload: { name: 'foo' }
  }, (err, res) => {
    t.error(err)
    t.equals(res.statusCode, 400)
    t.deepEquals(res.json(), { statusCode: 400, error: 'Bad Request', message: 'querystring should have required property \'surname\'' })
  })

  // check body
  fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'me@me.me' },
    query: { surname: 'bar' },
    payload: { name: [1, 2, 3] }
  }, (err, res) => {
    t.error(err)
    t.equals(res.statusCode, 400)
    t.deepEquals(res.json(), { statusCode: 400, error: 'Bad Request', message: 'body.name should be string' })
  })

  // check response
  fastify.inject({
    method: 'POST',
    url: '/42',
    headers: { 'x-custom': 'me@me.me' },
    query: { surname: 'bar' },
    payload: { name: 'foo' }
  }, (err, res) => {
    t.error(err)
    t.equals(res.statusCode, 200)
    t.deepEquals(res.json(), { name: 'a', surname: 'b' })
  })
})

test('use complex fluent-schema object', t => {
  t.plan(1)
  const fastify = Fastify()

  const addressSchema = S.object()
    .id('#address')
    .prop('line1').required()
    .prop('line2')
    .prop('country').required()
    .prop('city').required()
    .prop('zipcode').required()

  const commonSchemas = S.object()
    .id('https://fastify/demo')
    .definition('addressSchema', addressSchema)

  fastify.addSchema(commonSchemas)

  const bodyJsonSchema = S.object()
    .prop('residence', S.ref('https://fastify/demo#address')).required()
    .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()

  fastify.post('/the/url', { schema: { body: bodyJsonSchema } }, () => { })
  fastify.ready(err => t.error(err))
})

test('use fluent schema and plain JSON schema', t => {
  t.plan(1)

  const fastify = Fastify()

  const addressSchema = S.object()
    .id('#address')
    .prop('line1').required()
    .prop('line2')
    .prop('country').required()
    .prop('city').required()
    .prop('zipcode').required()

  const commonSchemas = S.object()
    .id('https://fastify/demo')
    .definition('addressSchema', addressSchema)

  const sharedAddressSchema = {
    $id: 'sharedAddress',
    type: 'object',
    required: ['line1', 'country', 'city', 'zipcode'],
    properties: {
      line1: { type: 'string' },
      line2: { type: 'string' },
      country: { type: 'string' },
      city: { type: 'string' },
      zipcode: { type: 'string' }
    }
  }

  fastify.addSchema(commonSchemas)
  fastify.addSchema(sharedAddressSchema)

  const bodyJsonSchema = S.object()
    .prop('residence', S.ref('https://fastify/demo#address')).required()
    .prop('office', S.ref('https://fastify/demo#/definitions/addressSchema')).required()

  fastify.post('/the/url', { schema: { body: bodyJsonSchema } }, () => { })
  fastify.ready(err => t.error(err))
})