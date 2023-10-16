import theme from '@/themes/theme'
import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.gray100,
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 17,
    color: theme.colors.white,
    width: width - 100,
    textAlign: 'left',
  },
})
