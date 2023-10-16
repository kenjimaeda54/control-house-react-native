import { RoutesModel } from '@/model/RoutesModel'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesModel {}
  }
}
