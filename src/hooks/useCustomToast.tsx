import {useToast} from 'native-base';
import Toast from '../components/molecules/toast';

const useCustomToast = () => {
  const toast = useToast();

  const showToast = (status: any, description: any) => {
    toast.show({
      render: ({id}) => {
        return (
          <Toast
            id={id}
            status={status}
            variant="left-accent"
            description={description}
            isClosable
          />
        );
      },
    });
  };

  return showToast;
};

export default useCustomToast;
