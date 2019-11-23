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
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1xk3NrmQTy4SMT4u1uG-vzpxV3S3b3UWf') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Data Structures</Text>
              </Left>
             <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1TkMSrxIcH1iv-0OA_3YqczrcA686egUV') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Digital Systems and Microprocessors</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1SjueKbVWqEAqgFeD_xyY5hXjs3XwP1cu') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Statistical Methods and Data Analysis</Text>
              </Left>
               <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1r4NHMftwmFhUx6rxwqBz1sOWgEvzymZw') }>
                <Icon name="arrow-forward"/>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Database Systems</Text>
              </Left>
              <Right>
              <TouchableOpacity  onPress={ ()=> Linking.openURL('https://drive.google.com/open?id=1oIMrUW6j0sCSR6I01nDUCOnyFU4wMmSk') }>
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


