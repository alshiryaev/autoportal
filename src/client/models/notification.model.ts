export enum NotificationType {
  Success = 'Success',
  Warning = 'Warning',
  Danger = 'Danger',
  Info = 'Info',
}

export class PopupMessage {
  title: string;
  description: string;
  type: NotificationType;
  id: string;
}

