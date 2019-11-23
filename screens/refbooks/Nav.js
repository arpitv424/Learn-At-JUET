import React from 'react' ;
import {View, Text, Dimensions, Linking, TouchableOpacity} from 'react-native';
import {  List, ListItem, Left, Right, Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';




export default class Nav extends React.Component{


  static navigationOptions = {
    title: 'SEM 3',
  };
  
    render( ) {
        return (
            <View>
                <List>
            <ListItem>
              <Left>
                <Text>Techniques for Decision Making</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1_pq33lIjOltOeILHamykvARD6KYuTDGg') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Data Structures</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1HUKnpe9ZOaZWDhH4uxyjOwnW321gIzq4') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Digital Systems and Microprocessors</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1rSXZk2oxW0iP-i_IAY0aRzSmNjnXQ5uC') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Statistical Methods and Data Analysis</Text>
              </Left>
               <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1YQ_B5qrdrIKeIeAxwMySHdT_KU6vepU0') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Database Systems</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1Zq1-F-aBi9sRrp5HiXpm0-Koi0LoHBin') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
            <View style={{marginTop:((Dimensions.get('window').height)/1.72)}}>
                <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-9857777548656943/9940857099" // Test ID, Replace with your-admob-unit-id
  testDeviceID="EMULATOR"
  onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
            </View>
        )
    }


}


