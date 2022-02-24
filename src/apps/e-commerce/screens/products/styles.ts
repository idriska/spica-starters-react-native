import {StyleSheet} from 'react-native';
import * as COLORS from '../../../../styles/colors'

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.HELPER_GRAY
  },
  topBtn: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  topTex: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: '700'
  }
});

export default styles;
