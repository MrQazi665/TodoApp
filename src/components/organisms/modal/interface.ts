export interface NativeModalProps {
  modalVisible: boolean;
  onClose: () => void;
  handleSubmit: () => void;
  children: React.ReactNode;
  headerTitle: string;
  isUpdatingTodo: boolean;
}
