import React from 'react';
import {Button, Modal} from 'native-base';
import {themeColors} from '../../../config/theme';

const NativeModal = ({
  modalVisible,
  onClose,
  handleSubmit,
  children,
  headerTitle,
}: any) => {
  return (
    <Modal isOpen={modalVisible} onClose={onClose} size="lg">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header _text={{fontSize: 'md', fontWeight: '600', mt: 1}}>
          {headerTitle}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="outline" onPress={onClose}>
              Cancel
            </Button>
            <Button
              onPress={handleSubmit}
              bg={themeColors.themeBlue}
              variant={'solid'}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default NativeModal;
