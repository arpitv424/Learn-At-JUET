import React, { Component } from 'react';
import { Container,Content,Text,List, ListItem, Left, Right, Icon } from 'native-base';
import{View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class hod extends Component {

  // showAlert = () => {
  //   alert("Hello");
  // }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} } >
            
              <Text>CSE HOD</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>ECE HOD</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>HSS HOD</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>CHE HOD</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>CRDC HOD</Text>
            </ListItem>
            
          </List>
        </Content>
      </Container>
       
    );
  }

}
