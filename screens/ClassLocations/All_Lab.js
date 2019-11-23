
import React, { Component } from 'react';
import {Container,Content,Text,List, ListItem, Left, Right, Icon } from 'native-base';
import{View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class Lab extends Component {
  render() {
    return (
      
        <Container>
      
        <Content>
          <List>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>Computer Lab-1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>Computer Lab-2</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} }>
              <Text>Computer Lab-3</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - First Floor");} }>
              <Text>Computer Lab-4</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Computer Lab-5</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Communication Lab-1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Communication Lab-2</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Physics Lab-1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>Physics Lab-2</Text>
            </ListItem>

             
             <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Mass Transfer Lab-1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Mass Transfer Lab-2</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Heat Transfer Lab-1</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Heat Transfer Lab-2</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>DSP Lab</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Ground Floor");} }>
              <Text>VLSI Lab</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Power Electronics Lab</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Ramanujan Bhawan - Second Floor");} }>
              <Text>Analog Lab(ECE Deapartment)</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>Language Lab</Text>
            </ListItem>
             <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>Simulation Lab</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Second Floor");} }>
              <Text>Instrumentation Lab</Text>
            </ListItem>



            <ListItem onPress={() => {alert("Raman Bhawan - First Floor");} }>
              <Text>Thermodynamic Lab and Chemical Store</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Boiler Room</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Vishveswarya Bhawan - Ground Floor");} }>
              <Text>Thermal Power Project Simulator</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - Ground Floor");} }>
              <Text>Solid Fluid Lab</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan - First Floor");} }>
              <Text>Chemical Reaction Lab & Environmental Lab</Text>
            </ListItem>
            <ListItem onPress={() => {alert("Raman Bhawan -First Floor");} }>
              <Text>Chemical Lab & Research Lab</Text>
            </ListItem>
            
          </List>
        </Content>
      </Container>
      
    );
  }
}