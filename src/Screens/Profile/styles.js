import {StyleSheet} from 'react-native';
import {maintitle, primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {Medium, SemiBold} from '../../Utils/FontFamily/Fonfamily';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  title: {
    fontSize: 18,
    fontFamily: Medium,
    color: maintitle,
    marginTop: 10,
  },
  cardcon: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  persolacon: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  persolaltitle: {
    fontSize: 18,
    fontFamily: Medium,
    color: maintitle,
  },
  catcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: primary,
    height: 70,
    width: '100%',
    marginTop: 30,
  },
  cattitle: {
    fontSize: 20,
    fontFamily: SemiBold,
    color: WhiteColor,
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'center',
    left: 0,
    right: 0,
    zIndex: -2000,
  },
});
export default styles;
