import {StyleSheet} from 'react-native';
import {Colortitle, primary, Primary, WhiteColor} from '../../Utils/ColorScheme/Colors';
import {Light, Medium, Regular} from '../../Utils/FontFamily/Fonfamily';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems:"center",
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: Primary,
    fontFamily: Medium,
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    right: 0,
    // marginLeft: '23%',
  },
  markCon: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  mark: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: Regular,
    color: Colortitle,
  },
  mainNotifyCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 30,
    backgroundColor: primary,
  },
  maintitleCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  titlecon: {
    // marginLeft: 10,
  },
  notifytitle: {
    fontSize: 16,
    fontFamily: Light,
    width: 220,
    lineHeight: 23,
    marginLeft: 15,
  },
  time: {
    fontSize: 16,
    fontFamily: Regular,
    color: Colortitle,
    marginTop: 5,
    // marginLeft: 15,
  },
});
export default styles;
