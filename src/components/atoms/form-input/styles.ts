import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {themeColors} from '../../../config/theme';

export const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '400',
    fontSize: wp(3.3),
    fontFamily: 'Poppins-Regular',
    color: themeColors.black900,
  },
  inputContainer: {display: 'flex', flexDirection: 'row'},
  required: {
    fontSize: wp(3.3),
    fontFamily: 'Poppins-Regular',
    color: themeColors.redBase,
  },
  inputIcon: {
    color: themeColors.grey100,
    fontSize: 20,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
