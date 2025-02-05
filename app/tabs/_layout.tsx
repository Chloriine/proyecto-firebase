import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarShowLabel: false, headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title:'Base de Datos',          
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="analytics-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name="desconectar/index"
        options={{
          title: 'Desconectar',
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="log-out-outline" color={color} />,
        }}
      />
      
    </Tabs>
  )
}


export default TabsLayout
