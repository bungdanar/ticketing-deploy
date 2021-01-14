import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@dgptickets/ticketing-common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated
}
