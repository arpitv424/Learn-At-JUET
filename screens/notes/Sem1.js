import React from 'react' ;
import {View, Text, Dimensions} from 'react-native';
import {  List, ListItem, Left, Right, Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';


export default class Sem1 extends React.Component{


  static navigationOptions = {
    title: 'SEM 1',
  };
  
    render( ) {
        return (
            <View>
                <List>
                <ListItem>
              <Left>
                <Text>Software Development Fundamentals</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Mathematics - I</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Physics - I</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>English</Text>
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


