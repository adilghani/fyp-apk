import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AdminTab from '../AdminPanel/Config/AdminTab';
import AdminAddCategories from '../AdminPanel/Screens/AdminAddcategory/AdminAddCategories';
import AdminHome from '../AdminPanel/Screens/Home/AdminHome';
import AdminViewDetailProduct from '../AdminPanel/Screens/Home/AdminViewDetailProduct/AdminViewDetailProduct';
import AdminViewProducts from '../AdminPanel/Screens/Home/AdminViewProducts/AdminViewProducts';
import AddCategories from '../Screens/Addcategory/AddCategories';
import Cart from '../Screens/Cart/Cart';
import ViewDetailProduct from '../Screens/Home/ViewDetailProduct/ViewDetailProduct';
import ViewProducts from '../Screens/Home/ViewProducts/ViewProducts';
import Login from '../Screens/Login/Login';
import Notification from '../Screens/Notification/Notification';
import Profile from '../Screens/Profile/Profile';
import ViewProfile from '../AdminPanel/AdminProfile/ViewProfile';
import Sinup from '../Screens/Signup/Signup';
import Wellcome from '../Screens/Wellcome/Wellcome';
import TabNavigation from './TabNavigation';
import AdminProfile from '../AdminPanel/AdminProfile/AdminProfile';
import Adminorders from '../AdminPanel/Screens/AdminOrders/Adminorders';
import MyOrders from '../Screens/MyOrders/MyOrders';
import OrderDetail from '../Screens/MyOrders/orderDetail';

import AdminOrderDetail from '../AdminPanel/Screens/AdminOrders/AdminorderDetail';
import AdminShowmore from '../AdminPanel/Screens/Home/AdminShowMore';
import Showmore from '../Screens/Home/Showmore';

const MainNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome">
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Sinup}
          name="Sinup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={TabNavigation}
          name="TabNavigation"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AddCategories}
          name="AddCategories"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Cart}
          name="Cart"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Wellcome}
          name="Wellcome"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ViewProducts}
          name="ViewProducts"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ViewDetailProduct}
          name="ViewDetailProduct"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Notification}
          name="Notification"
          options={{headerShown: false}}
        />
        {/* **********************ADMIN PANEL********************** */}
        <Stack.Screen
          component={AdminTab}
          name="AdminTab"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AdminViewDetailProduct}
          name="AdminViewDetailProduct"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AdminViewProducts}
          name="AdminViewProducts"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AdminAddCategories}
          name="AdminAddCategories"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ViewProfile}
          name="ViewProfile"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AdminProfile}
          name="AdminProfile"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={AdminOrderDetail}
          name="AdminOrderDetail"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OrderDetail}
          name="OrderDetail"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Adminorders}
          name="Adminorders"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MyOrders}
          name="MyOrders"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AdminShowmore}
          name="AdminShowmore"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Showmore}
          name="Showmore"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
