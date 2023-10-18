import { ImageSourcePropType } from "react-native";
import { create } from "zustand";


interface IUseFeatureStore {
  isAccess: boolean
  pathImage: ImageSourcePropType,
  textButton: string,
  handleToogleLed: (by: boolean) => void,
  handleChangeTextButton: (by: string) => void,
  handleChangeImage: (by: ImageSourcePropType) => void

}

export const useFeatureStore = create<IUseFeatureStore>((set) => ({
  isAccess: true,
  pathImage: require("../assets/led_dieode.png"),
  textButton: "Acender",
  handleToogleLed: (isAccess) => set((state) => ({ isAccess: isAccess })),
  handleChangeImage: (image) => set((state) => ({ pathImage: image })),
  handleChangeTextButton: (text) => set(state => ({ textButton: text }))
}))