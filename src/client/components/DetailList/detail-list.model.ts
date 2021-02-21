import { Detail } from 'src/common/detail.model';

export interface DetailListModel {
  details: Detail[];
  onDelete: (id: string) => void;
}
