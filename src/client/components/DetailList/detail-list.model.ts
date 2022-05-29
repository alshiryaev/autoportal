import { Detail } from "../../../common/detail.model";

export interface DetailListModel {
  details: Detail[];
  onDelete: (id: string) => void;
}
