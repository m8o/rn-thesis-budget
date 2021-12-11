import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
		<View style={{flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center"}}>
			<TextInput style={{borderColor: "black", borderWidth: 1, padding: 10, width: "80%"}} placeholder='Type'/>
			<Button title='Add'/>
		</View>
	</View>
  );
}

const styles = StyleSheet.create({

});
