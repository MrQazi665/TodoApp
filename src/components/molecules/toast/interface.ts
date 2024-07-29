export interface ToastProps {
  id: string;
  status?: 'success' | 'error' | 'info' | 'warning';
  variant?: string;
  description: string;
  isClosable?: boolean;
  [key: string]: any;
}
