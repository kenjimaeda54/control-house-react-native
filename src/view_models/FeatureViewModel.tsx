import { MutableRefObject, useEffect, useRef, useState } from "react"
import ControlHouseServices from "@/services/ControlHouseServices"
import { TypeFeature } from "./HomeViewModel"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ImageSourcePropType } from "react-native"
import { useFeatureStore } from "@/stores/useFeature"




interface IRouteParams {
  feature: TypeFeature,
  time: number | null
}
interface IUseFeatureViewModel {
  textButton: string
  pathImage: ImageSourcePropType
  handleFeatureToogle: () => void
  handleBack: () => void
  textFeature: string
}

export default function useFeatureViewModel(): IUseFeatureViewModel {
  const isAccess = useFeatureStore(state => state.isAccess)
  const pathImage = useFeatureStore(state => state.pathImage)
  const textButton = useFeatureStore(state => state.textButton)
  const toggleLed = useFeatureStore(state => state.handleToogleLed)
  const handlePathImage = useFeatureStore(state => state.handleChangeImage)
  const handleTextButton = useFeatureStore(state => state.handleChangeTextButton)
  const { goBack } = useNavigation()
  const { params } = useRoute()
  const route = params as IRouteParams
  const [textFeature, setTextFeature] = useState("")



  function handleBack() {
    if (route.feature !== TypeFeature.toggle) {
      ControlHouseServices.toggle(0, (data) => {

        if (data.response) {
          toggleLed(true)
          handlePathImage(require("../assets/led_dieode.png"))
          handleTextButton("Acender")
        }
      })
    }
    goBack()
  }


  useEffect(() => {
    if (route.feature !== TypeFeature.toggle) {
      route.feature === TypeFeature.delayUp ? setTextFeature(`Led vai acender apos ${route.time} segundos`) : setTextFeature(`Led vai apagar apos ${route.time} segundos`)
      handleDelay()
      return
    }



  }, [])



  function handleDelay() {
    let routeMilisSeconds = route.time!! * 1000
    handleTextButton("")

    if (route.feature === TypeFeature.delayUp) {
      handlePathImage(require("../assets/led_dieode.png"))
      ControlHouseServices.delayUp(route.time!!, (dataDealyUp) => {

        if (dataDealyUp.response) {
          function handleClear() {
            clearInterval(interval)
          }

          const interval = setTimeout(() => {
            toggleLed(true)
            handlePathImage(require("../assets/led_dieode_color.png"))
            handleClear()
          }, routeMilisSeconds)
        }

      })
      return
    }



    handlePathImage(require("../assets/led_dieode_color.png"))
    ControlHouseServices.delayDown(route.time!!, (dataDealyDown) => {

      if (dataDealyDown.response) {
        function handleClear() {
          clearInterval(interval)
        }

        const interval = setTimeout(() => {
          toggleLed(false)
          handlePathImage(require("../assets/led_dieode.png"))
          handleClear()
        }, routeMilisSeconds)
      }

    })

  }



  function handleFeatureToogle() {
    let status = isAccess ? 1 : 0
    ControlHouseServices.toggle(status, (data) => {

      if (data.response) {
        toggleLed(!isAccess)
        isAccess ? handlePathImage(require("../assets/led_dieode_color.png")) : handlePathImage(require("../assets/led_dieode.png"))
        handleTextButton(isAccess ? "Apagar" : "Acender")
      }
    })
    return
  }

  return {
    pathImage,
    handleFeatureToogle,
    textButton,
    handleBack,
    textFeature,
  }
}