import React, { Component } from 'react';
import { Container,Content,Text,List, ListItem, Left, Right, Icon } from 'native-base';
import{View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class offices extends Component {

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} } >
              <Text>Chancellor</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} }>
              <Text>Vice Chancellor</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} }>
              <Text>Registrar</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>Dean(Academic)</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>Dean(Reserch)</Text>
            </ListItem>
            <ListItem  onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} }>
              <Text>Registry</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - First Floor");} }>
              <Text>CAFO And Accts</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - Second Floor");} }>
              <Text>EMI Room</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>Visiting Faculty Room</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>OBC/AXIS Bank Counter</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Axis Bank ATM</Text>
            </ListItem>
            <ListItem  onPress={() => {alert("Vishveswarya Bhawan - First Floor");} }>
              <Text>Estate office</Text>
             </ListItem>
              <ListItem  onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} }>
              <Text>Exam Section</Text>
            </ListItem>
            <ListItem  onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} }>
              <Text>Staff Conference Room</Text>
            </ListItem>
    
          </List>
        </Content>
      </Container>
       
    );
  }

}
