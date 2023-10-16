import { TypeFeature } from "@/view_models/HomeViewModel"

export type RoutesModel = {
  Home: undefined
  Apresentation: undefined
  Feature: {
    feature: TypeFeature,
    time: number | null
  }
}
