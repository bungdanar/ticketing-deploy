import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from '@dgptickets/ticketing-common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled
}
