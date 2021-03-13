export enum NotificationType {
    Success,
    Warning,
    Danger,
    Info
}

export class PopUpNotification {
    title: string;
    description: string;
    backgroundColor: string;
    type: NotificationType;
    id: number;
}