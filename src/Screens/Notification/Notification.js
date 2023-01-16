import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Primary, WhiteColor} from '../../Utils/ColorScheme/Colors';

import styles from './style'
import ProfileDark from '../../../assets/images/ProfileIcon';
import Right from '../../../assets/images/Right';
import LeftICon from '../../../assets/images/Lefticon';


const Notification = props => {
  const [statusHandel, setStatusHandel] = useState(false);
  const [statusimg, setStatusImage] = useState();
  const [whatopen, setwhatopen] = React.useState();
  const [statusmessage, setStatusmessage] = useState('');
  const [statusColor, setstatusColor] = useState();
  const [statusdescmessage, setstatusdescmessage] = useState('');
  const [notifications, setNotifications] = React.useState();
  const [userID, setUserID] = React.useState();
  const [loading, setloading] = React.useState(false);

  //   const getUserInfo = async () => {
  //     const userId = await getUserId();
  //     setUserID(userId);
  //   };
  //   React.useEffect(() => {
  //     getUserInfo();
  //     if (userID) {
  //       GetNotifications();
  //     }
  //   }, [userID]);
  //   const GetNotifications = async () => {
  //     // if (Password === '' || confirmPassword === '') {
  //     //   if (Password === '') {
  //     //     setPassworderror(true);
  //     //     setloading(false);
  //     //   }
  //     //   if (confirmPassword === '') {
  //     //     setConfirmPassworderror(true);
  //     //     setloading(false);
  //     //   }
  //     // } else {
  //     setloading(true);
  //     // const params = {
  //     //   email: 'kamranayoub658@gmail.com',
  //     //   oldpassword: Password,
  //     //   newpassword: confirmPassword,
  //     // };

  //     axiosInstance
  //       .get(baseUrl + `notifications/get-notifications/${userID}`)
  //       .then(async res => {
  //         const userData = res.data;
  //         setloading(false);
  //         console.log('userdata', userData);
  //         setNotifications(userData.data);

  //         // if (selctType == 'Job Seeker') {
  //         if (userData.success == true) {
  //           // await dispatch(SetEmployerData(userData));
  //           // setStatusHandel(true);
  //           // setloading(false);
  //           // setStatusmessage(userData.message);
  //           // setstatusColor('blue');
  //           // setStatusImage('check-circle');
  //           // setwhatopen('Updated');
  //           // await dispatch(LoginData(userData));
  //         } else {
  //           setStatusImage('error');

  //           setstatusColor('red');
  //           setStatusHandel(true);
  //           setwhatopen('emailnotvarified');

  //           setStatusmessage('Some thing went wrong');
  //           setloading(false);
  //         }
  //         // }
  //       })
  //       .catch(error => {
  //         // console.log(JSON.stringify(error));
  //         const data1 = JSON.stringify(error.message);
  //         var data2 = JSON.parse(data1);
  //         console.log('>>', error);

  //         if (error.message === 'Request failed with status code 503') {
  //           setStatusImage('error');

  //           setstatusColor('red');
  //           setStatusHandel(true);
  //           setwhatopen('emailnotvarified');

  //           setStatusmessage(error.response.data.message);
  //           setloading(false);
  //         } else if (error.message === 'Request failed with status code 401') {
  //           setStatusImage('error');

  //           setstatusColor('red');
  //           setStatusHandel(true);
  //           setwhatopen('emailnotvarified');

  //           setStatusmessage(error.response.data.message);
  //           setloading(false);
  //         } else if (error.response.data.status == false) {
  //           setStatusImage('error');

  //           setstatusColor('red');
  //           setStatusHandel(true);
  //           setwhatopen('emailnotvarified');

  //           setStatusmessage(error.response.data.message);
  //           setloading(false);
  //         } else if (data2 === 'Network Error') {
  //           // setStatusImage('error');/

  //           setstatusColor('red');
  //           setStatusHandel(true);
  //           setwhatopen('emailnotvarified');
  //           setStatusImage('internet');

  //           setStatusmessage(data2);
  //           setloading(false);
  //         }
  //         // if (error) {
  //         //   console.log(error?.response?.data?.message);
  //         // }
  //       });
  //     // }
  //   };
  // React.useEffect(() => {
  //   GetNotifications();
  // }, []);
  //   onRegister: function (token) {
  //     console.log('TOKEN:', token);
  //   },

  //   onNotification: function (notification) {
  //     console.log('NOTIFICATION:', notification);

  //     // notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },

  //   onAction: function (notification) {
  //     console.log('ACTION:', notification.action);
  //     console.log('NOTIFICATION:', notification);
  //   },
  //   onRegistrationError: function (err) {
  //     console.error(err.message, err);
  //   },

  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true,
  //   },

  //   popInitialNotification: true,

  //   requestPermissions: true,
  // });
  // const createChannel = () => {
  //   PushNotification.createChannel({
  //     channelId: 'test-channel',
  //     channelName: 'Test Channel',
  //   });
  // };
  //   React.useEffect(() => {
  //     // createChannel();
  //     NotificationListener();
  //   }, []);
  //   const HandelNotificatio = () => {
  //     PushNotification.localNotification({
  //       channelId: 'test-channel', // this is where you need to add local notification
  //       title: 'Local Notification Title',
  //       message: 'Expand me to see more',
  //       bigText:
  //         'Hello this kamran ayoub Product manager @Varior With the CEO SIR ABDUL HASEEB',
  //       color: Primary,
  //     });
  //     PushNotification.localNotificationSchedule({
  //       channelId: 'test-channel',
  //       title: 'Your order has benn completed',
  //       message: 'Please visit with in 20 seconds the employeer in waiting',
  //       data: new Date(Date.now() + 20 * 1000),
  //       allowWhileIdle: true,
  //     });
  //   };
  //   const testpush = () => {};

  //   const wait = timeout => {
  //     return new Promise(resolve => setTimeout(resolve, timeout));
  //   };
  //   const [loading, setloading] = React.useState(false);
  //   const [refreshing, setRefreshing] = React.useState(false);
  //   const [Notificationfirebse, setnotificationfirenase] = React.useState('k');

  //   const onRefresh = React.useCallback(() => {
  //     setRefreshing(true);
  //     wait(1000).then(() => setRefreshing(false));
  //   }, []);

  const Notifications = [
    {
      NotiMessage: 'Your Password has been Succesfully changed.',
      Icon: 'text',
      time: '22:34',
      id: 'current',
      type: 'order',
    },
    {
      NotiMessage: 'Joseph has sent you a message.',
      Icon: 'text',
      time: '22:34',
      id: 'current',
      type: 'order',
    },
    {
      NotiMessage: 'Your Password has been Succesfully changed.',
      Icon: 'text',
      time: '22:34',
      id: 'old',
      type: 'order',
    },
    {
      NotiMessage: 'Joseph has sent you a message.',
      Icon: 'text',
      time: '22:34',
      id: 'old',
      type: 'profile',
    },
    {
      NotiMessage: 'Your Password has been Succesfully changed.',
      Icon: 'text',
      time: '22:34',
      id: 'old',
      type: 'profile',
    },
    {
      NotiMessage: 'Joseph has sent you a message.',
      Icon: 'text',
      time: '22:34',
      id: 'old',
      type: 'profile',
    },
  ];

  return (
    <View style={styles.main}>
    
      {/* <Loader visible={loading} /> */}

      <View style={styles.header}>
        <Right />
        <Text style={styles.headerTitle}>Notification</Text>
      </View>
 
      <ScrollView>
        <View style={{marginTop: 30}}>
          <FlatList
            data={Notifications}
            renderItem={({item, index}) => {
              console.log('Items', item);
              return (
                <TouchableOpacity
                  style={styles.mainNotifyCon}
                  //   onPress={() => {
                  //     item.type == 'order'
                  //       ? props.navigation.navigate('OrderDetail', {
                  //           orderdata: item.otherId,
                  //         })
                  //       : props.navigation.navigate('MyProfile');
                  //   }}
                >
                  <View style={styles.maintitleCon}>
                    <View style={styles.titlecon}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={styles.circle}>
                          <Text></Text>
                        </View>
                        <View>
                          <Text
                            style={[
                              styles.notifytitle,
                              {
                                color: '#000000',
                              },
                            ]}>
                            {item.NotiMessage}
                          </Text>
                        </View>
                      </View>
                      <View style={{marginHorizontal: 30}}>
                        <Text style={styles.time}>
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    {item.type == 'order' ? (
                      <AntDesign name="calendar" size={25} color={Primary} />
                    ) : (
                      <ProfileDark />
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Notification;
