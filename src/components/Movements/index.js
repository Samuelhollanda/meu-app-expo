import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
 } from 'react-native';

export default function Movements({ data }) {
 return (
   <TouchableOpacity style={styles.container}>
    <Text style={styles.date}>{data.date}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {

    }
})