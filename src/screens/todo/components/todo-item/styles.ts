import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1.5),
    marginHorizontal: wp(0.5),
  },
  item: {
    backgroundColor: 'white',
    padding: hp(2.3),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completed: {
    opacity: 0.7,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  description: {
    fontSize: hp(1.8),
    color: '#666',
    marginBottom: 5,
  },
  actionContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  actionButton: {
    marginHorizontal: 5,
  },
});
