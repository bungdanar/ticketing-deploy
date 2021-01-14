import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@dgptickets/ticketing-common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated
}
