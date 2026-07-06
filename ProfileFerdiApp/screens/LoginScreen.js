import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "23050464" && password === "23050464") {
      navigation.replace("Home");
    } else {
      Alert.alert("Login Gagal", "Username atau Password salah!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Profil</Text>

      <Text style={styles.sub}>
        Ferdi Firmansyah
      </Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:30,
backgroundColor:"#E3F2FD"
},

title:{
fontSize:32,
fontWeight:"bold",
textAlign:"center",
color:"#1565C0"
},

sub:{
fontSize:18,
textAlign:"center",
marginBottom:40
},

input:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
marginBottom:15
},

button:{
backgroundColor:"#1565C0",
padding:15,
borderRadius:10
},

buttonText:{
color:"#fff",
textAlign:"center",
fontWeight:"bold",
fontSize:18
}

});