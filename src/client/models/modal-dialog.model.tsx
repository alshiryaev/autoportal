export class ModalDialog {
  title: string;
  isOpen = false;
  onSubmit: () => void;
  onCancel: () => void;
  children: unknown;
}