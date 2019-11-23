import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    this.init();
  }

  init = () => {
    console.log("init method");
      console.log('NoticeBoardActivated');
  };

  
  get uid() {
    console.log("get uid method");
    return (firebase.auth().currentUser || {}).uid;
  }


  get ref() {
    console.log("get ref method");
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    console.log("snapshot method");
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    console.log("timestamp method");
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    console.log("send method");
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      this.sendPushNotificationShubham(text);
      this.sendPushNotificationSohrat(text);
      this.sendPushNotificationArpit(text);
      const message = {
        text, 
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
    
  };


     sendPushNotificationShubham = (text) => {
       console.log("notification method");
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[-X-PjlOl1s03o6a-vB1q7H]',
        sound: 'default',
        title: 'Notice',
        body: text,
        icon: '../assets/icon.png'
      })
    });
    
};


sendPushNotificationSohrat = (text) => {
       console.log("notification method");
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[rSAhQCFr_FpAHs92fGS27_]',
        sound: 'default',
        title: 'Notice',
        body: text,
        icon: '../assets/icon.png'
      })
    });
    
};

//ExponentPushToken[rSAhQCFr_FpAHs92fGS27_]

sendPushNotificationArpit = (text) => {
       console.log("notification method");
    let response = fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[DAHrdXLjMpgLqxQtwDu_Rd]',
        sound: 'default',
        title: 'Demo',
        body: text,
        icon: '../assets/icon.png'
      })
    });
    
};



  append = message => {this.ref.push(message);
      console.log("append message method");}
  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
