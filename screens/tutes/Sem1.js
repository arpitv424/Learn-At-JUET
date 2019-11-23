import React from 'react' ;
import {View, Text, Dimensions, Linking, TouchableOpacity} from 'react-native';
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
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1I3K_WWTdPO4M-WfvjSrrflpqIb2g3T8Q') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Mathematics - I</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1ONacTtW-BNT3f3zN6q5Wnm12JB9-NgWy') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Physics - I</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1ILtNpN1Mg8ep7N0WzkZnQDCDvUvOFPLK') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>English</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1eMqOVb-1IiCuD_KLVoI_cMUwnU1KNYG-') }>
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


