import jmespath from 'jmespath'

export default class Message {
  constructor(message) {
    this.messageId = message.id
    this.payload = message.payload
  }

  contains(regexp, jsonPath) {
    return regexp.test(jmespath.search(this.payload, jsonPath))
  }
}
