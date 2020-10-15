import React from 'react';
import  {View, Text, SafeAreaView, ScrollView, Image, ActivityIndicator, TextInput, Dimensions, WebView,TouchableOpacity, ImageBackground } from 'react-native';
import { createSwitchNavigator, DrawerItems,createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Button } from 'native-base';
import {Constants} from 'expo';
import Icon from '@expo/vector-icons/Ionicons'
import Home1 from './screens/tutes/Home';
import Nav1 from './screens/tutes/Nav';
import Sem11 from './screens/tutes/Sem1';
import Sem51 from './screens/tutes/Sem5';
import Sem71 from './screens/tutes/Sem7';
import Home2 from './screens/assignment/Home';
import Nav2 from './screens/assignment/Nav';
import Sem12 from './screens/assignment/Sem1';
import Sem52 from './screens/assignment/Sem5';
import Sem72 from './screens/assignment/Sem7';
import Home3 from './screens/notes/Home';
import Nav3 from './screens/notes/Nav';
import Sem13 from './screens/notes/Sem1';
import Sem53 from './screens/notes/Sem5';
import Sem73 from './screens/notes/Sem7';
import Home4 from './screens/pyp/Home';
import Nav4 from './screens/pyp/Nav';
import Sem14 from './screens/pyp/Sem1';
import Sem54 from './screens/pyp/Sem5';
import Sem74 from './screens/pyp/Sem7';
import Home5 from './screens/refbooks/Home';
import Nav5 from './screens/refbooks/Nav';
import Sem15 from './screens/refbooks/Sem1';
import Sem55 from './screens/refbooks/Sem5';
import Sem75 from './screens/refbooks/Sem7';
import Main from './components/Main';
import Chat from './components/Chat';
import LocationMain from './screens/ClassLocations/LocationMain.js';
import All_lt from './screens/ClassLocations/All_lt.js';
import All_cr from './screens/ClassLocations/All_cr.js' ;
import All_Lab from './screens/ClassLocations/All_Lab.js' ;
import All_facu_off from './screens/ClassLocations/All_facu_off.js' ;
import All_off from './screens/ClassLocations/All_off.js' ;
import All_Hod_off from './screens/ClassLocations/All_Hod_off.js' ;


const wt = Dimensions.get('window').width;
const ht = Dimensions.get('window').height;
var eml = '';
var enr = '';


export default class App extends React.Component {
 
 constructor(props){
   super(props)


  

      });
    }
 }

  

 

      });
    }
  }

  render(){
    return(
      <Navigator1 />
    )
  }
}


class Login extends React.Component {
  
state = {
  email: '',
  password: '',
  enrollment: ''
}

signin = (email,password) => {
  var e = this.state.email;
  var p = this.state.password; 
  try 
  {
   if( this.checkEnrollment(this.state.enrollment) ==1 ){
  firebase.auth().createUserWithEmailAndPassword(e,p).catch( (err) =>{ alert(err); } );
  eml=e;
  enr=this.state.enrollment;
  }}
  catch(e) {
    alert(e);
  }
}

login = (email,password) => {
  var e = this.state.email;
  var p = this.state.password; 
  firebase.auth().signInWithEmailAndPassword(e,p).catch((err) => {
    alert(err);
  });
}

checkEnrollment = (text) => {
 
      console.log(text);
     var n = text;
     var n1=n.slice(0,3);
    var n2=n.slice(4);
    if(((n.length)!=7)||((n.charAt(3)!='B')&&(n.charAt(3)!='b'))||(isNaN(n1)||isNaN(n2)))
    {
      alert('Please Enter a valid Enrollment Number. '+n+' is not valid');
      return 0; 
    }
    else{
    this.setState({enrollment: text});
    return (1);
    }
    
}

render () {
    return(
       <ImageBackground source={ require('./assets/bb.jpg') } style={{marginTop: Constants.statusBarHeight, height:ht, width:wt }} >
    <View style= { {
    flex: 1,
     alignItems: 'center',
    justifyContent: 'center',
  
  }}>
   
  
        <TextInput  
    placeholder = '   Email Daalo' 
    autoCorrect={false}    
    style={{marginTop: ht/4.5, height:ht/14, width: wt/1.2, backgroundColor:'#eee', borderRadius: 60}}
    onChangeText={(email) => this.setState({email: email})} 
    />
    <TextInput  
    placeholder = '   Password'
     autoCorrect={false}    
    style={{margin:20, height:ht/14, width: wt/1.2, backgroundColor:'#eee', borderRadius: 60}}
    secureTextEntry= {true}
    onChangeText={(password) => this.setState({password: password})}
    />

    <TextInput  
    placeholder = '   Enrollment Number'
     autoCorrect={false}    
    style={{margin:20, height:ht/14, width: wt/1.2, backgroundColor:'#eee', borderRadius: 60}}
    onEndEditing={ (e: any) => 
    {
        this.checkEnrollment(e.nativeEvent.text)
    } }
      
    />

       <Button style={{
            marginTop:((Constants.statusBarHeight)+50),
            marginLeft: wt/4,
            padding:((Dimensions.get('window').width)/5.5),
            height: 40,
            backgroundColor: '#75cb8a',
            borderRadius: 25
        }} onPress = {this.signin}>
              <Text style= {{color: '#fff'}}>
              Sign Up
              </Text>
            </Button>

        <Button style={{
            marginTop:((Constants.statusBarHeight)-20),
            marginLeft: wt/4,
            padding:((Dimensions.get('window').width)/5.5),
            height: 40,
            backgroundColor: '#75cb8a',
            borderRadius: 25
        }} onPress = {this.login}>
              <Text style= {{color: '#fff'}}>
                Sign  In
              </Text>
            </Button>

      
        <Text  style= {{color: '#fff'}} >
        Log In
        </Text>
     
        <View>
             <Text style={{fontSize:12, color: '#888'}}>
              Already Have an Account? Email us at 
            </Text>
            </View>

            <View>
            <Text style={{fontSize:12, color: '#777'}}>
              lrn.at.juet@gmail.com
            </Text>
            </View>

    </View>
   
    </ImageBackground>
  )
}
}



class Loading extends React.Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

checkIfLoggedIn = () => {
  firebase.auth().onAuthStateChanged( user => {
    if(user)
    {
      this.props.navigation.navigate('DashBoard');
    }
    else
    {
      this.props.navigation.navigate('Login');
    }
  })
}

  render() {
    return (
      <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:((Constants.statusBarHeight)+250),
  }}>
       <ActivityIndicator size = 'large' />
      </View>
    );
  }
}



class Webkiosk extends React.Component{
  render(){
    return(
      
      <View style={{ flex:1}}>
       <WebView
        source={{uri: 'https://webkiosk.juet.ac.in/'}}
        style={{marginTop: Constants.statusBarHeight}}
      />
      </View>
      
    )
  }
}
//
//
class Dash extends React.Component{

static navigationOptions = {
    title: 'DashBoard',
  };

  jump = (page) =>{
      this.props.navigation.navigate(page);
  }


  render(){
    return(
      <ScrollView style={{flex:1}}>

      

      <View style={{flex:1, marginTop:100}}>

      <View style={{flex:1, flexDirection: 'row'}}>
       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <TouchableOpacity  onPress = { () => this.jump('Notes') } >
       <Image source={require('./buttons/notes.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}}/>
       </TouchableOpacity>
       </View>
        

        
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <TouchableOpacity   onPress = {() => this.jump('Tutorials') } >
       <Image source={require('./buttons/tutorial.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}}/>
        </TouchableOpacity>
       </View>
        
      </View>
        
      <View style={{flex:1, flexDirection: 'row'}}>
       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <TouchableOpacity   onPress = { () => this.jump('PreviousYearPapers') } >
       <Image source={require('./buttons/pyp.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}}  />
        </TouchableOpacity>
       </View>
        

        
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity   onPress = {() => this.jump('ReferenceBooks') }>
       <Image source={require('./buttons/ref.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}} />
       </TouchableOpacity>
       </View>
        
      </View>

      <View style={{flex:1, flexDirection: 'row'}}>
       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity   onPress = {() => this.jump('Assignments') } >
       <Image source={require('./buttons/ass.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}} />
       </TouchableOpacity>
       </View>
        

        
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
         <TouchableOpacity onPress = {() => this.jump('NoticeBoard') } >
      <Image source={require('./buttons/nb.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}}  />
      </TouchableOpacity>
       </View>
        
      </View>
        
      </View>

    <View style={{flex:1, flexDirection: 'row'}}>
       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <TouchableOpacity   onPress = { () => this.jump('ClassLocations') } >
       <Image source={require('./buttons/cloc.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}}  />
        </TouchableOpacity>
       </View>
        

        
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity   onPress = {() => this.jump('Webkisok') }>
       <Image source={require('./buttons/web.png')} style={{margin: 30, height: ht/7, width: wt/2.2,borderRadius: 12}} />
       </TouchableOpacity>
       </View>
        
      </View>
      

      </ScrollView>

    )
  }
}


const NavScreens3 = createStackNavigator({
  Home:Home1,
  Nav:Nav1,
  Sem1:Sem11,
  Sem5:Sem51,
  Sem7:Sem71
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
})

const Navigator3= createAppContainer(NavScreens3);



const NavScreens4 = createStackNavigator({
  Home:Home2,
  Nav:Nav2,
  Sem1:Sem12,
  Sem5:Sem52,
  Sem7:Sem72
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
})

const Navigator4 = createAppContainer(NavScreens4);


const NavScreens5 = createStackNavigator({
  Home:Home3,
  Nav:Nav3,
  Sem1:Sem13,
  Sem5:Sem53,
  Sem7:Sem73
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
})

const Navigator5 = createAppContainer(NavScreens5);



const NavScreens6 = createStackNavigator({
  Home:Home4,
  Nav:Nav4,
  Sem1:Sem14,
  Sem5:Sem54,
  Sem7:Sem74
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
})

const Navigator6 = createAppContainer(NavScreens6);



const NavScreens7 = createStackNavigator({
  Home:Home5,
  Nav:Nav5,
  Sem1:Sem15,
  Sem5:Sem55,
  Sem7:Sem75
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
})

const Navigator7 = createAppContainer(NavScreens7);


const NavScreens8 = createStackNavigator({
  Main: Main,
  Chat: Chat 
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
});

const Navigator8 = createAppContainer(NavScreens8);


const CustomDrawerComponent = (props) => (
<SafeAreaView>
  <View 
  style= {{height: 150, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
    <Image
      source={require('./assets/icon.png')}
      style= {{ height:120, width: 120, borderRadius:60 }} />
  </View>
  <ScrollView>
    <DrawerItems  {...props} />
  </ScrollView>
</SafeAreaView>
)



const NavScreens21 = createStackNavigator({
  DashBoard21:Dash,
  Tutorials21:Navigator3,
  Assignments21:Navigator4,
  Notes21:Navigator5,
  PreviousYearPapers21:Navigator6,
  ReferenceBooks21:Navigator7,
  NoticeBoard21:Navigator8,
  Webkisok21:Webkiosk,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })

const Navigator21 = createAppContainer(NavScreens21);


const Navscreen10 = createStackNavigator({
  LocationMain:{screen:  LocationMain },
    All_lt: {screen: All_lt},
    All_cr: {screen: All_cr},
    All_Lab: {screen: All_Lab},
    All_facu_off: {screen: All_facu_off},
    All_off:{screen: All_off},
    All_Hod_off:{screen: All_Hod_off},
    

   
    
},
{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft:(
        <Icon name='md-menu' style={{paddingLeft:13}} onPress={()=>navigation.openDrawer()} 
        size={33} />
      )
    }
  }
}
);
  const Navigator10 = createAppContainer(Navscreen10);


const NavScreens2 = createDrawerNavigator({
  DashBoard:Dash,
  Tutorials:Navigator3,
  Assignments:Navigator4,
  Notes:Navigator5,
  PreviousYearPapers:Navigator6,
  ReferenceBooks:Navigator7,
  ClassLocations:Navigator10,
  NoticeBoard:Navigator8,
  Webkisok:Webkiosk,
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {activeTintColor: ' #026e00'}
})

const Navigator2 = createAppContainer(NavScreens2);

const NavScreens1 = createSwitchNavigator({  
  Loading,
  Login,
  DashBoard:Navigator2
})

const Navigator1 = createAppContainer(NavScreens1);
