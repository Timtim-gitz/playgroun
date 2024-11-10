import { NavigationProp , ParamListBase} from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ImageBackground,TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addMenuItem } from './globals';

const MenuScreen = ({navigation} : any) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('starter');



  const addDish = () => {
    const newMenuItem = {
      dishName,
      description,
      price: parseFloat(price),
      course,
    };

    addMenuItem(newMenuItem);
    navigation.goBack()
  };

  return (
    <ImageBackground
      source={require('./assets/home.JPEG.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Dish Name"
          onChangeText={setDishName}
          value={dishName}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          onChangeText={setDescription}
          value={description}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={setPrice}
          value={price}
          style={styles.input}
        />

        <Text style={styles.text}>Select Course:</Text>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
        >
          <Picker.Item label="Starter" value="starter" />
          <Picker.Item label="Main" value="main" />
          <Picker.Item label="Dessert" value="dessert" />
        </Picker>

        <Button title="Add Dish" onPress={addDish} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 16,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 23,
  },
  text: {
    fontSize: 23,
  },
});

export default MenuScreen;

