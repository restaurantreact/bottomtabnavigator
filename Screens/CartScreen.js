
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class CartScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>CartScreen</Text>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

  export default CartScreen;