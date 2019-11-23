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
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1hDB9H2Nj2a4jYyliduZNu6d7vLFpo5T2') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Data Structures</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1EB7dXo-gow_SvrCYZ-iOyIF6mkHktl8O') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Digital Systems and Microprocessors</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1nM2qpejmS-ruV0Es_64QwE2mmYMwVey7') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Statistical Methods and Data Analysis</Text>
              </Left>
               <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1SbuY5yt2zU2GHPoTB1FZiiHRY-CCpiaz') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Database Systems</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1AE0iENme6ekS2PU9a5aqwO746v9ExuQj') }>
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


