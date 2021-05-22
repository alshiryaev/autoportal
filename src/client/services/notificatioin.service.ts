import { v4 } from 'uuid';
import {
  NotificationType,
  PopupMessage,
} from '../models/notification.model';

export class NotificationService {
  private static _instance: NotificationService;

  get instance(): NotificationService {
    if (NotificationService._instance == null) {
      NotificationService._instance = new NotificationService();
    }

    return NotificationService._instance;
  }

  public showToast(description: string, title: string): PopupMessage {
    const messageModel: PopupMessage = {
      id: v4(),
      title,
      description,
      type: NotificationType.Info,
    };

    return messageModel;
  }
}
