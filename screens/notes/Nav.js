import React from 'react' ;
import {View, Text, Dimensions} from 'react-native';
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
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Data Structures</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Data Systems and Microprocessors</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Database Systems</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
                 <View style={{marginTop:((Dimensions.get('window').height)/1.72)}}>
                <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
            onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
            </View>
        )
    }


}


