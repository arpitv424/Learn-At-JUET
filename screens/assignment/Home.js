import React from 'react' ;
import {View, Platform, Text, Dimensions, ScrollView} from 'react-native';
import { Icon, Item, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';



export default class Home extends React.Component{
  
  static navigationOptions = {
    title: 'Assignments',
  };

    render( ) {
        return (
            <ScrollView>
                
                 <List style= {{marginTop: 12}}>
            <ListItem thumbnail>
              <Left>
                <Thumbnail squares source={{ uri: 'https://img.icons8.com/color/1600/1-circle-c.png' }} />
              </Left>
              <Body>
                <Text style= {{fontSize:17}}>SEM 1</Text>
                <Text note numberOfLines={1}>Hey! Welcome To a new Journey.</Text>
              </Body>
              <Right>
                <Button transparent  onPress = { ()=> this.props.navigation.navigate('Sem1')}>
                  <Text  style = {{color: '#00a3ff'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://edkentmedia.com/wp-content/uploads/2017/09/3_circle_c1600.png' }} />
              </Left>
              <Body>
                <Text style= {{fontSize:17}}>SEM 3</Text>
                <Text note numberOfLines={1}>Its Time to shape the FUTURE</Text>
              </Body>
              <Right>
                <Button transparent  onPress = { ()=> this.props.navigation.navigate('Nav')}>
                  <Text  style = {{color: '#00a3ff'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://maxcdn.icons8.com/Share/icon/Alphabet/5_circle_filled1600.png' }} />
              </Left>
              <Body>
                <Text style= {{fontSize:17}}>SEM 5</Text>
                <Text note numberOfLines={1}>Miles to go before I sleep.</Text>
              </Body>
              <Right>
                <Button transparent  onPress = { ()=> this.props.navigation.navigate('Sem5')}>
                  <Text  style = {{color: '#00a3ff'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://img.icons8.com/color/1600/7-circle-c.png' }} />
              </Left>
              <Body>
                <Text style= {{fontSize:17}}>SEM 7</Text>
                <Text note numberOfLines={1}>Its time to make Memories.</Text>
              </Body>
              <Right>
                <Button transparent  onPress = { ()=> this.props.navigation.navigate('Sem7')}>
                  <Text  style = {{color: '#00a3ff'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

          </List>

                  <View style={{marginTop:((Dimensions.get('window').height)/2.7)}}>
              <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-9857777548656943/9940857099" // Test ID, Replace with your-admob-unit-id
  testDeviceID="EMULATOR"
  onDidFailToReceiveAdWithError={this.bannerError} />
          </View>
            </ScrollView>
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