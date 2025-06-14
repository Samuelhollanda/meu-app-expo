import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Energy',
        value: '500,00',
        date: '14/06/2025',
        type: 0
    },
    {
        id: 2,
        label: 'TED',
        value: '5.000,00',
        date: '10/05/2025',
        type: 1
    },
    {
        id: 3,
        label: 'Salary',
        value: '12.000,00',
        date: '05/06/2025',
        type: 1
    }
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Samuel Holanda" />

            <Balance balance="20.654,00" expenses="500,00" />

            <Text style={styles.title}>Latest Movements</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEFF",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})