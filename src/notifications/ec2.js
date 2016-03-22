import Notification from '../notification'

export default class extends Notification {
  match(message) {
    return message.contains(/aws:s3/, "Records[0].EventSource")
  }

  parse() {
    this.emoji = ":aaaa:"
  }
}
