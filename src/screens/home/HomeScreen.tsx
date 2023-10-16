import React from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import { Slider } from '@miblanchard/react-native-slider'
import RowCheckFeature from '@/components/row_check_feature/RowCheckFeature'
import { styles } from './home.styles'
import useHomeViewModel, {
  TypeFeature,
} from '@/view_models/HomeViewModel'
import theme from '@/themes/theme'

export default function HomeScreen() {
  const {
    refModal,
    handleFeature,
    feature,
    handleSliderChange,
    currentTime,
    handleNavigate
  } = useHomeViewModel()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/people.png')}
        resizeMode='contain'
      />
      <RowCheckFeature
        isChecked={feature === TypeFeature.toggle}
        action={() => handleFeature(TypeFeature.toggle)}
        title='Interruptor (apagar e acender)'
      />
      <RowCheckFeature
        isChecked={feature === TypeFeature.upDelayDown}
        action={() => handleFeature(TypeFeature.upDelayDown)}
        title='Acender é apagar apos alguns segundos'
      />
      <RowCheckFeature
        isChecked={feature === TypeFeature.delayUp}
        action={() => handleFeature(TypeFeature.delayUp)}
        title='Acender apos alguns segundos'
      />
      <Modalize
        ref={refModal}
        adjustToContentHeight
        handleStyle={{
          display: 'none',
        }}>
        <View style={styles.contentModal}>
          <Text style={styles.description}>
            Selecione um tempo para{' '}
            {feature === TypeFeature.upDelayDown
              ? 'após alguns segundos apagar'
              : 'após alguns segundos acender'}{' '}
          </Text>
          <TextInput
            style={styles.timeCurrentDescription}
            value='Tempo Atual: '
            editable={false}>
            <Text style={styles.timeCurrentValue}>
              {currentTime}s
            </Text>
          </TextInput>
          <Slider
            value={currentTime}
            thumbStyle={{
              backgroundColor: theme.colors.primary,
            }}
            minimumTrackTintColor={theme.colors.primary}
            maximumValue={20}
            minimumValue={1}
            onValueChange={handleSliderChange}
            renderThumbComponent={(index) => (
              <View style={styles.thumb} />
            )}
          />
          <View style={styles.informationSlider}>
            <Text style={styles.textInformation}>2s</Text>
            <Text style={styles.textInformation}>20s</Text>
          </View>
        </View>
      </Modalize>
      <TouchableOpacity onPress={handleNavigate} disabled={feature === null} activeOpacity={0.7} style={[styles.buttonSubmit, { opacity: feature === null ? 0.5 : 1 }]}>
        <Text style={styles.textButtonSubmit}>Começar</Text>
      </TouchableOpacity>
    </View >
  )
}
