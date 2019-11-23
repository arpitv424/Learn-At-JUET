import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import {Button} from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';
import firebase from 'firebase';
import { Permissions, Notifications } from 'expo';

class Main extends React.Component {

        registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    try {
      // Get the token that uniquely identifies this device
      let token = await Notifications.getExpoPushTokenAsync();

      // POST the token to your backend server from where you can retrieve it to send push notifications.
      firebase
        .database()
        .ref('users/uids/' + this.currentUser.uid + '/push_token')
        .set(token);
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.currentUser = await firebase.auth().currentUser;
    await this.registerForPushNotificationsAsync();
     alert("Tip: Please don't misuse the Notice Board for irrelevant content. You can Now Proceed Further.");
}


  static navigationOptions = {
    title: 'Notice Board',
  };

  state = {
    name: '',
  };

  onPress = () =>{

    var n = this.state.name;
    n = n.toUpperCase();
    var n1=n.slice(0,3);
    var n2=n.slice(4);
    if(((n.length)!=7)||((n.charAt(3)!='B')&&(n.charAt(3)!='b'))||(isNaN(n1)||isNaN(n2)))
    {
      alert('Please Enter a valid Enrollment Number. '+n+' is not valid');
    }
    else{
    this.props.navigation.navigate('Chat', { name: this.state.name });
    }
    }

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Enrollment Number:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Enter your Full Name"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
          
         
          <Button 
      style={{ 
       marginTop: 18,
       marginLeft: ((Dimensions.get('window').width)/3)-10,
       padding:((Dimensions.get('window').width)/24),
       height: 40,
       backgroundColor: '#0082ff',
       borderRadius:5
       }}
       onPress = {this.onPress}
       >
        <Text style={{color:'#fff'}}>
        Proceed to Notices
        </Text>
      </Button>
        <View style={{marginTop:((Dimensions.get('window').height)/1.6)}}>
            <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-9857777548656943/9940857099" // Test ID, Replace with your-admob-unit-id
  testDeviceID="EMULATOR"
  onDidFailToReceiveAdWithError={this.bannerError} />
        </View>
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: 18,
    color:'#0082ff'
  },
  nameInput: {
    height: (offset * 2)-8,

    margin: offset-14,
    paddingHorizontal: offset,
    borderWidth: 2,
    borderRadius:50,
    borderColor:'#777'
  },
 
});

export default Main;
