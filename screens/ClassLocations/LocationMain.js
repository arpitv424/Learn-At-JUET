import React, { Component } from 'react';
import { Container,Content, Text,List, ListItem, Left, Right, Icon } from 'native-base';
import{View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class Location_main extends Component {

  static navigationOptions = {
    title: 'Class Locations',
  };


  render() {
    return (
         <Container>
        
        <Content>
          <List>
            <ListItem onPress={() => this.props.navigation.navigate('All_lt')}>
              <Text>Lecture Theaters</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('All_cr')}>
              <Text>Class Rooms</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('All_Lab')}>
              <Text>LAB'S</Text>
            </ListItem>
             <ListItem onPress={()=> this.props.navigation.navigate('All_facu_off')}>
              <Text>Faculty Offices</Text>
            </ListItem>
             <ListItem onPress={()=> this.props.navigation.navigate('All_off')}>
              <Text>Offices</Text>
            </ListItem>
             <ListItem onPress={()=> this.props.navigation.navigate('All_Hod_off')}>
              <Text>HOD'S Cabins</Text>
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}