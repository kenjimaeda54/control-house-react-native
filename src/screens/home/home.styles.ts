import theme from '@/themes/theme'
import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  contentModal: {
    height: height * 0.3,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: theme.colors.gray200,
  },
  thumb: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: theme.colors.primary,
  },
  informationSlider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeCurrentDescription: {
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: theme.colors.gray200,
  },
  timeCurrentValue: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.gray200,
  },
  textInformation: {
    fontFamily: theme.fonts.light,
    fontSize: 12,
    color: theme.colors.gray100,
  },
  buttonSubmit: {
    backgroundColor: '#FF63ED',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    bottom: 50,
    alignItems: "center"
  },
  textButtonSubmit: {
    fontFamily: theme.fonts.light,
    fontSize: 16,
    color: theme.colors.primary,
  }
})
