export interface NativeModalProps {
  modalVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  headerTitle: string;
}
