import React from 'react' ;
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {  List, ListItem, Left, Right, Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';


export default class Sem5 extends React.Component{


  static navigationOptions = {
    title: 'SEM 7',
  };
  
    render( ) {
        return (
            <View>
                
               
                <List>
            <ListItem>
              <Left>
                <Text>Open Elective - I</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> alert("There's Nothing we have for you here now.We will comeback soon!") }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>CS Elective - III</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> alert("There's Nothing we have for you here now.We will comeback soon!") }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>CS Elective - IV</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> alert("There's Nothing we have for you here now.We will comeback soon!") }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>CS Elective - V</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> alert("There's Nothing we have for you here now.We will comeback soon!") }>
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


