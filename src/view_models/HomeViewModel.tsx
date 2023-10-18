import { useNavigation } from '@react-navigation/native'
import { RefObject, useRef, useState } from 'react'
import { Modalize } from 'react-native-modalize'
import { IHandles } from 'react-native-modalize/lib/options'

export enum TypeFeature {
  toggle,
  upDelayDown,
  delayUp,
}

interface IHomeViewModel {
  refModal: RefObject<IHandles>
  feature: TypeFeature | null
  handleFeature: (feature: TypeFeature) => void
  handleSliderChange: (value: number[]) => void
  currentTime: number
  handleNavigate: () => void
}

export default function useHomeViewModel(): IHomeViewModel {
  const refModal = useRef<Modalize>(null)
  const [feature, setFeature] = useState<TypeFeature | null>(null)
  const [currentTime, setCurrentTime] = useState(1)
  const { navigate } = useNavigation()

  function handleFeature(newFeature: TypeFeature) {
    if (feature === newFeature) {
      setFeature(null)
      return
    }
    if (newFeature === TypeFeature.toggle) {
      setFeature(newFeature)
      return
    }

    setFeature(newFeature)
    refModal.current?.open()
  }

  function handleNavigate() {
    navigate('Feature', {
      feature: feature!,
      time: feature === "toggle" ? null : currentTime
    })
  }

  function handleSliderChange(value: number[]) {
    setCurrentTime(~~value[0]) // para tranformar arredondar
  }

  return {
    refModal,
    feature,
    handleFeature,
    handleSliderChange,
    currentTime,
    handleNavigate
  }
}
