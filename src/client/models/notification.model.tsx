export enum NotificationType {
  Success = 'Success',
  Warning = 'Warning',
  Danger = 'Danger',
  Info = 'Info',
}

export class PopUpNotification {
  title: string;
  description: string;
  type: NotificationType;
  id: number;
}
