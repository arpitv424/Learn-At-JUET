import React, { Component } from 'react';
import { Container,Content,Text,List, ListItem, Left, Right, Icon } from 'native-base';
import{View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class sec extends Component {

  // showAlert = () => {
  //   alert("Hello");
  // }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} } >
            
              <Text>LT-1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>LT-2</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} }>
              <Text>LT-3</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} }>
              <Text>LT-4</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>LT-5</Text>
            </ListItem>
            <ListItem  onPress={() => {alert("Abdul Kalam Azad Bhawan - Ground Floor");} }>
              <Text>LT-6</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Abdul Kalam Azad Bhawan - Ground Floor");} }>
              <Text>LT-7</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Abdul Kalam Azad Bhawan - Ground Floor");} }>
              <Text>LT-8</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Abdul Kalam Azad Bhawan - Ground Floor");} }>
              <Text>LT-9</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
       
    );
  }

}
