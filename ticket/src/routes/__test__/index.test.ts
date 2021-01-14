import request from 'supertest'
import { app } from '../../app'

const createTicket = async (title: string, price: number) => {
  return request(app).post('/api/tickets').set('Cookie', global.signin()).send({
    title,
    price,
  })
}

it('cat fetch a list of tickets', async () => {
  await createTicket('Concert A', 10)
  await createTicket('Concert B', 20)
  await createTicket('Concert C', 30)

  const response = await request(app).get('/api/tickets').send().expect(200)

  expect(response.body.length).toEqual(3)
})
