import React from 'react';
import {Modal} from 'native-base';
import {NativeModalProps} from './interface';

const NativeModal: React.FC<NativeModalProps> = ({
  modalVisible,
  onClose,
  children,
  headerTitle,
}) => {
  return (
    <Modal isOpen={modalVisible} onClose={onClose} size="lg">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header _text={{fontSize: 'md', fontWeight: '600', mt: 1}}>
          {headerTitle}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default NativeModal;
