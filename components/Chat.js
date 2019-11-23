// @flow
import React from 'react';
import { View, Platform,Dimensions } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import KeyboardSpacer from 'react-native-keyboard-spacer';
import firebase from 'firebase';
import Fire from './Fire';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Notices!',
  });

  state = {
    messages: [],
  };

  get user() {
     var user = firebase.auth().currentUser;
var email, uid;

if (user != null) {

  email = user.email;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
  var start=0;
  var ind=email.indexOf('@');
  var nm= email.slice(start,ind);
  firebase
        .database()
        .ref('users/uids/' + firebase.auth().currentUser.uid + '/enrollment')
        .set(this.props.navigation.state.params.name);
   firebase
        .database()
        .ref('users/uids/' + firebase.auth().currentUser.uid + '/email')
        .set(email);
    
    return {
      enr_no: this.props.navigation.state.params.name,
      name: nm,
      email:email,
      date: new Date(),
      _id: Fire.shared.uid,
    };
  }


    sendPushNotification = () => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: '',
        sound: 'default',
        title: 'Demo',
        body: 'Demo notificaiton'
      })
    });
};


  render() {
    return (
      <View style={{flex:1}}>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      {Platform.OS === 'android' ? <KeyboardSpacer 
      topSpacing = {(Dimensions.get('window').height)/19}/> : null }
      </View>
    );
  }


  sendPushNotification = (text) => {
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: '',
        sound: 'default',
        title: 'Demo',
        body: text
      })
    });
    
};



  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;
