import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
  textArea: {minHeight: hp(2), textAlignVertical: 'top', paddingTop: 10},
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
    top: 7,
  },
});
