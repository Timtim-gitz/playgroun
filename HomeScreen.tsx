import { useEffect, useState } from 'react';
import { View, Text, Button, ImageBackground, FlatList, StyleSheet } from 'react-native';
import { menuItems, calculateAveragePrice, ClearMenuItems} from './globals';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen = ({ navigation }:
   HomeScreenProps) => {
    const [totalMenuItems, setTotalMenuItems] = useState(menuItems.length);

  useEffect(() => {
    setTotalMenuItems(menuItems.length);
  }, [menuItems]);
  return (
    <ImageBackground
      source={require('./assets/six.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Christoffel's Menu</Text>
        <Text style={styles.text}>Total Menu Items: {menuItems.length}</Text>
        <Text>Total Menu Items: {totalMenuItems}</Text>
        <Text>Average Starter Price: {calculateAveragePrice("starter")}</Text>
        <Text>Average Main Price: {calculateAveragePrice("main")}</Text>
        <Text>Average Dessert Price: {calculateAveragePrice("dessert")}</Text>

        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <View>
              <Text>Dish Name: {item.dishName}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: {item.price}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Button title="Add Menu Item" onPress={() => navigation.navigate('Menu')} />
        <Button title="Clear Menu" onPress={() => ClearMenuItems()}/>
        <Button title='filter menu' onPress={()=>navigation.navigate('filter')}/>
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
    flex: 1,
    justifyContent: 'flex-start',
    padding: 1,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default HomeScreen;

