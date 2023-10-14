
import React, { useRef, useState } from 'react'
import { View, Text, FlatList, ImageSourcePropType, Dimensions, ViewToken, StyleSheet, Pressable } from 'react-native'
import RowApresentation from '@/components/row_apresentation/RowApresentation'
import { Path, Svg } from 'react-native-svg'
import theme from '@/themes/theme'
import { styles } from "./apresentation.style"
import useApresentaionViewModel from '@/view_models/ApresentationViewModel'


export interface IDataApresentation {
  key: string
  title: String
  description: String
  image: ImageSourcePropType
}


const data: IDataApresentation[] = [
  {
    "key": "3571572",
    "title": "Bem vindo ao Control House",
    "description": "Com esta aplicação ira controlar seu dispositivo IOT",
    "image": require("../../assets/flamingo.png"),
  },
  {
    "key": "3571747",
    "title": "Seleciona modo preferido",
    "description": "Selecione um dos modos disponíveis para controlar   dispositivo",
    "image": require("../../assets/game-controller.png"),

  },
  {
    "key": "3571680",
    "title": "Cuidado!",
    "description": "Existem modos que  precisam de configurações extras, não se preocupe, assim que selecionar será aberto um modal com instrução próxima etapa",
    "image": require("../../assets/video-game.png")
  },
]



//fazer onda 
//https://getwaves.io/


export default function ApresentationScreen() {
  const { currentBg, handleRow, currentIndex, navigateToHome } = useApresentaionViewModel()

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={[{ zIndex: 10, height: 350 }, StyleSheet.absoluteFillObject]}>
        <Svg
        >
          <Path
            fill={currentBg}
            fill-opacity="1"
            d="M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,245.3C672,256,768,224,864,176C960,128,1056,64,1152,37.3C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </Svg>
      </View>
      <FlatList
        data={data}
        keyExtractor={it => it.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        renderItem={RowApresentation}
        onViewableItemsChanged={handleRow.current}
      />
      <View style={styles.viewDot}>
        {[...Array(data.length)].map((value, index) => <View key={data[value]?.key} style={[styles.dot, { backgroundColor: currentIndex === index ? currentBg : theme.colors.gray200 }]} />)}
      </View>
      {
        currentIndex === data.length - 1 ?
          <Pressable style={styles.button} onPress={navigateToHome}>
            <Text style={styles.textButton}>Vamos la ?</Text>
          </Pressable>
          :
          <View style={{ height: 75 }} />
      }
    </View>
  )
}