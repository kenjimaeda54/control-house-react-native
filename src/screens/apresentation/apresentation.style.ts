import theme from '@/themes/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  viewDot: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  button: {
    alignSelf: 'center',
    paddingBottom: 50,
  },
  textButton: {
    fontFamily: theme.fonts.light,
    fontSize: 18,
    color: '#FF63ED',
  },
})
