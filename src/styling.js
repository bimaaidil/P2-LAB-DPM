import { StyleSheet } from 'react-native';
import { BOX_SIZE, CONTAINER_WIDTH } from './dimension';
import { FONT_SIZE, FONT_COLOR, FONT_WEIGHT } from './font';
import { FLEX_CENTER, FLEX_ROW_SPACE_BETWEEN } from './layouting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Warna abu-abu terang
    ...FLEX_CENTER, // Menggunakan Flexbox untuk menempatkan konten di tengah
  },
  text: {
    fontSize: FONT_SIZE,
    color: FONT_COLOR,
    fontWeight: FONT_WEIGHT,
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    width: CONTAINER_WIDTH,
    ...FLEX_ROW_SPACE_BETWEEN, // Tata letak horizontal dengan jarak merata
  },
  box1: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'yellow', // Warna kotak 1 (bebas)
  },
  box2: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'red', // Warna kotak 2 (bebas)
  },
});

export default styles;
