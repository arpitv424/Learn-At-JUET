import React from 'react' ;
import {View, Platform, Text, Dimensions} from 'react-native';
import { Icon, Item, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { LinearGradient } from 'expo';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';




export default class Home extends React.Component{
  
  static navigationOptions = {
    title: 'Notes',
  };

    render( ) {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItem:'center'}}>
            <Text style={{margin:18, fontSize:18 }}>
            Please email us at lrn.at.juet@gmail.com , specifying the Semester and the Subject for which you need the Notes. We will reach you as soon as possible. 
            </Text>
            <View style={{marginTop:((Dimensions.get('window').height)/1.6)}}>
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


const styles = {
    loadTistleStyle: {
        flex: 1,
        position: "absolute",
        backgroundColor: 'transparent',
        marginTop: 275,
        marginLeft: 22,
        fontSize: 70,
        color: '#000'                
    },
    titleStyle: {
        flex: 1,
        position: "absolute",
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'android' ? 124: 100 ,
        marginLeft: 8,
        fontSize: 30,
        color: '#000'                
    },
    loadViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewStyle: {
        flex:1,
            
    },
    listItemContainer: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5
    },
    listItem:
    {
        fontSize:20,
        padding: 10
    }
}