# Control House
Uma pequena aplicação para controlar saídas GPIO do raspbery, com este sowftare pode realizar toggle(acender e apagar), apagar após alguns segundos é acender após alguns segundos

## Serviço
Serviço foi construído no Node Red [referencia](https://github.com/kenjimaeda54/control-house-node-red)

## Feature
- Decidi usar StyleeSheet na construção das interfaces, com a nova arquitetura em React Native, senti deficiência com Styled Componentes e Emotion
- Para criar os efeitos de onda instalei o react native svg e utilizaei [waves](https://getwaves.io/) para construir o svg

```typescript
 <View
        style={[
          { zIndex: 10, height: 350 },
          StyleSheet.absoluteFillObject,
        ]}>
        <Svg>
          <Path
            fill={currentBg}
            fill-opacity='1'
d='M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,245.3C672,256,768,224,864,176C960,128,1056,64,1152,37.3C1248,11,1344,21,1392,26.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          />
        </Svg>
 </View>


```

## Publicação
[Linkedin](https://www.linkedin.com/posts/kenjimaeda1233_iot-reactnative-javascript-activity-7120458424361885696-EL6e?utm_source=share&utm_medium=member_desktop)
