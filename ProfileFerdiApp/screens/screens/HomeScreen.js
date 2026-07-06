import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Selamat Datang
      </Text>

      <Text style={styles.nama}>
        Ferdi Firmansyah
      </Text>

      <Text>NIM : 23050464</Text>

      <Text>Ilmu Komputer</Text>

      <Text>Universitas Yatsi Madani</Text>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

title:{
fontSize:30,
fontWeight:"bold"
},

nama:{
fontSize:22,
marginVertical:20
}

});