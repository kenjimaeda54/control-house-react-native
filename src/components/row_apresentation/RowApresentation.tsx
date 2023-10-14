import React from 'react'
import { View, Text, Image, StyleSheet, ColorValue } from 'react-native'
import { IDataApresentation } from '@/screens/apresentation/ApresentationScreen'
import { styles } from "./rowApresentation.style"
import Svg, { Path } from 'react-native-svg'



export default function RowApresentation({ item }: { item: IDataApresentation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} resizeMode='contain' />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

