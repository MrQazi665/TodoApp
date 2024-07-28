import {Button, View, Text, Image} from 'native-base';
import React from 'react';

import {styles} from './styles';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({onLogout}) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/icons/checkmark.png')}
          style={styles.logo}
          alt="logo"
        />
        <Text style={styles.title}>TODO APP</Text>
      </View>
      <Button size={'md'} onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
};

export default Header;
