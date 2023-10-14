import ConstantsRoutes from "@/utils/ConstantsRoute";


declare global { 
  namespace ReactNavigation {
    type RoutesType = typeof ConstantsRoutes
    interface RootParamList extends RoutesType {}
  }
}