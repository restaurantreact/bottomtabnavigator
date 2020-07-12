import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ProfileScreen from './Screens/ProfileScreen.js';
import CartScreen from './Screens/CartScreen.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navi:{
    backgroundColor: '#ffffff',
    padding: 6,
    margin:10,
    borderRadius:10,
   // height: 55,
    borderColor:'black',
   // borderBottomRightRadius:30,
    shadowColor:'black',
   // opacity:30,
   },




  navihome:{
    backgroundColor: 'yellow',
    padding:8,
    margin:15,
    borderRadius:30,
    //height:80,

  },
});

const TabNavigator = createMaterialBottomTabNavigator(

  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>  
      <Icon style={[{color: tintColor}]} borderRadius={true} size={27} name={'home'} />   
          </View>
        ),
        activeColor: '#f0505a',
        inactiveColor: 'black',
        tabBarAccessibilityLabel:'safdasf',
      }
    
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={27} name={'person'} />
          </View>
        ),
        activeColor: '#f0505a',
        inactiveColor: 'black',
      }
    },

    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>

            <Icon style={[{color: tintColor}]} size={27} name={'cart'}  />
         
          </View>
        ),
       activeColor: '#f0505a',
        inactiveColor: 'black',
       // tabBarColor:'orange',
        tabBarBadge:"!",
      //  barStyle: styles.navi,
      }
    },
  },
  {
    initialRouteName: 'Home',
    shifting:true,
    barStyle: styles.navi,
    labelledPosition: 'beside-Icon',
   // labeled:false,
  }
);

export default createAppContainer(TabNavigator);