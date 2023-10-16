import { useNavigation } from '@react-navigation/native'
import { MutableRefObject, useRef, useState } from 'react'
import { ViewToken } from 'react-native'

interface ViewSliderProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED']

interface IApresentationViewModel {
  currentBg: string
  currentIndex: number
  handleRow: MutableRefObject<(info: ViewSliderProps) => void>
  navigateToHome: () => void
}

export default function useApresentaionViewModel(): IApresentationViewModel {
  const [currentBg, setCurrentBg] = useState(bgs[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { navigate } = useNavigation()

  const handleRow = useRef((info: ViewSliderProps) => {
    const index = info.viewableItems[0].index!
    setCurrentBg(bgs[index])
    setCurrentIndex(index)
  })

  function navigateToHome() {
    navigate('Home')
  }

  return {
    currentBg,
    currentIndex,
    handleRow,
    navigateToHome,
  }
}
