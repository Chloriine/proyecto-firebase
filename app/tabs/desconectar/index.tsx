import { View, Text, Pressable } from 'react-native'
import { GlobalStyles } from '@/theme/GlobalStyles'

const desconectar = () => {
    return (
      <View>
        <Text style= {GlobalStyles.titulo}>Desconectar</Text>
        <Pressable onPress={() => alert('Desconectar')}>
          <Text style= {GlobalStyles.textBoton}>Desconectar</Text>
        </Pressable>
      </View>
    )
  }
  
  export default desconectar