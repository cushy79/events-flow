
import Notifier from './notifier'

const message = {
  id: "123",
  payload: {
    Records: [
      {
        EventSource: "aws:s3"
      }
    ]
  }
}
let notifier = new Notifier(message)
notifier.includeNotifications();
notifier.notify(result => {
  console.log(result);
});
