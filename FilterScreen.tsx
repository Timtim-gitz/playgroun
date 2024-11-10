import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { filterMenuItems,MenuItem } from './globals';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const FilterScreen = ({ navigation }: any) => {
  const [course, setCourse] = useState('starter');
  const [filteredItems, setFilteredItems] = useState([]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Course:</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>

      <FlatList
      data={filteredItems}
      renderItem={({ item }: { item: MenuItem }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>Dish Name: {item.dishName}</Text>
          <Text style={styles.itemText}>Description: {item.description}</Text>
          <Text style={styles.itemText}>Course: {item.course}</Text>
          <Text style={styles.itemText}>Price: {item.price.toString()}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default FilterScreen;