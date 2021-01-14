import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from '@dgptickets/ticketing-common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated
}
