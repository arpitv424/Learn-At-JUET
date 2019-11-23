import React, { Component } from 'react';
import { Container,Content,Text,List, ListItem, Left, Right, Icon } from 'native-base';
import{View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class faculty extends Component {

  // showAlert = () => {
  //   alert("Hello");
  // }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} } >
            
              <Text>CSE Faculty Room 1,2,3</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} }>
              <Text>ECE Faculty Room 1,2,3</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>ECE Faculty Room 4,5</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - Second Floor");} }>
              <Text>ME Faculty Room 1,2,3 </Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Physics Faculty Room 1,2 </Text>
            </ListItem>
            <ListItem  onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>CHE Faculty Room 1,2,3</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - First Floor");} }>
              <Text>CHE Faculty Room 4,5,6</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>CE Faculty Room 1,2,3</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>MIX Faculty Room</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - First Floor");} }>
              <Text>PD Faculty Room 1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>PD Faculty Room 2</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
       
    );
  }

}
