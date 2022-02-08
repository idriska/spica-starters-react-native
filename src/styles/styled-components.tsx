import styled from 'styled-components/native';
import * as COLORS from './colors';

import { TextInput, Button} from 'react-native-paper';


const SpicaInput = styled(TextInput)({
  paddingHorizontal: 10,
  marginVertical: 5
});

const SpicaButton = styled(Button)({
    marginVertical: 5,
  });

export {SpicaInput, SpicaButton};
