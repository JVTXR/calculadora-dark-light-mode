import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    },
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      with: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',

    },
    resultText: {
      margin: 10,
      fontSize: 25,
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: 120,
      margin: 15,
      backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: "wrap",
    },
    button: {
      backgroundColor: darkMode ? '#282f3b' : '#e5e5e5',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90,
      minHeight: 92,
      flex: 2,
    },

  });

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}>
          <Entypo name={darkMode ? "light-up" : 'moon'} size={20} color={darkMode ? "white" : 'black'} />
        </TouchableOpacity>
        <Text style={styles.resultText}>1 + 1 = 2</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ?
            <TouchableOpacity key={button} style={styles.button}>
              <Text>{button}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity key={button} style={styles.button}>
              <Text>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
