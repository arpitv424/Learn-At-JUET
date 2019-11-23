import React from 'react' ;
import {View, Text, Dimensions, TouchableOpacity, Linking} from 'react-native';
import {  List, ListItem, Left, Right, Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';



export default class Sem5 extends React.Component{


  static navigationOptions = {
    title: 'SEM 5',
  };
  
    render( ) {
        return (
            <View>
                
               
                <List>
            <ListItem>
              <Left>
                <Text>Business Analysis Technique</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=16JvK_XNyLMk2QmkIdpQlwO7jcxU-D8WC') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Analog and Digital Communication</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1oMwZu8-C45siD_KlKAz_p6va-AehuaP3') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Operating Systems</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1iZksvteVwI_C8Xy7_Dl9eR-9hORYmah6') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Theory of Computation</Text>
              </Left>
               <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1qj4UAdDstL8GTRtZyXPBYju5vuPvAq4R') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Software Engineering</Text>
              </Left>
               <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1fHSABeSqPM_eFeaxO_fqowv_kdYcqrr3') }>
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


