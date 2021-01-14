import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@dgptickets/ticketing-common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated
}
