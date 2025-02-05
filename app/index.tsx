import { useRouter } from "expo-router";
import { View, Text } from 'react-native'
import { GlobalStyles } from '@/theme/GlobalStyles'
import { Pressable, TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { Alert } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebaseconfig";


export default function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async () => {
    try{
      const user = await (signInWithEmailAndPassword(auth, email, password));
      // if (user) router.replace('/tabs');
    }catch (error:any) {
      console.log(error);
      Alert.alert("Inicico de sesión incorrecto", error.message);
    }
  }

  const register = async () => {
    try{
      const user = await (createUserWithEmailAndPassword(auth, email, password));
      
    }catch (error:any) {
      console.log(error);
      Alert.alert("Error al registrar el usuario", error.message);
    }
  }

  const router = useRouter();

  const redirigirRegistro = () => {
    router.push("/tabs");
  };

  return (
    <View style={GlobalStyles.containerLogin}>
      <Text style= {GlobalStyles.titulo}>Iniciar Sesión</Text>
      <View style={GlobalStyles.containerFormularioLogin}>
        <TextInput onChangeText={setEmail} value={email} placeholder="Usuario" style={GlobalStyles.textInput} />
        <TextInput onChangeText={setPassword} value={password} placeholder="Contraseña" style={GlobalStyles.textInput} />
        <View style={GlobalStyles.containerBotonesLogin}>
          <Pressable style={GlobalStyles.boton} onPress={redirigirRegistro}>
            <Text style={GlobalStyles.textBoton}>Login</Text>
          </Pressable>
          <Pressable style={GlobalStyles.boton} onPress={register}>
            <Text style={GlobalStyles.textBoton}>Registrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
