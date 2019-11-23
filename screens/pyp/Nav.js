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
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1ligGlXEz6Vpp82mESRs97yBiqUlTyaVD') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Data Structures</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1AX9bpWqeaIi992jePe2JjDKgpw5lr0Up') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Digital Systems and Microprocessors</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1PCCo7OuC9oTLNyz6n1mdnfn3DeJl77-z') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Statistical Methods and Data Analysis</Text>
              </Left>
               <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1Bo3SczDAPOoszeEr75ducMR6xtvSF8gO') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Database Systems</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1FOV6-ugq-Oyg9_hmW89aSnUi1-SM-zFR') }>
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


