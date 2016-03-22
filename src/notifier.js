import fs from 'fs'
import Message from './message'

const DIR_NAME = 'notifications'

export default class Notifier {
  constructor(message) {
    this.message = new Message(message)
    this.notifications = []
  }

  addNotification(notification) {
    this.notifications.push(notification)
  }

  includeNotifications() {
    fs.readdirSync(`./src/${DIR_NAME}`).forEach(file => {
      let Notification = require(`./${DIR_NAME}/${file}`).default
      let notification = new Notification()
      if(notification.match(this.message)) {
        this.addNotification(notification)
      }
    })
  }

  notify(callback) {
    this.notifications.forEach(notification => {
      notification.parse()
      console.log(notification.webhook)
    })

    callback({result: "done"});
  }
}
