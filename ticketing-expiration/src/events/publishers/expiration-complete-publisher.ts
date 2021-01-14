import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@dgptickets/ticketing-common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete
}
