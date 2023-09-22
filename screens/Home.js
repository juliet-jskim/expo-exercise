import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Card, Button } from 'react-native-paper';

export default function Home({navigation}) {

    const [number, setNumber] = useState(1);

    const check = () => {
        
        if(number == 1) {
            console.log("ONE")
        } else if(number == 2) {
            console.log("TWO")
        } else if(number == 3) {
            navigation.push('About')
        }
        console.log(number);
        setNumber(number + 1)
    }

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="We Care Plants" subtitle="Join our community!" />
                <Card.Content  style={styles.cardContent}>
                    <Text variant="titleLarge">Garden Eden</Text>
                    <Text variant="bodyMedium">Surrey, BC</Text>
                </Card.Content>
                <Card.Cover source={require('../assets/community-garden.jpeg')} />
                <Card.Actions>
                    <Button style={styles.button1}>Log In</Button>
                    <Button style={styles.button2}>Sign Up</Button>
                </Card.Actions>
            </Card>
            <TouchableOpacity  onPress={() => check()} 
                style={number === 1 ? styles.btnBlue : 
                number === 2 ? styles.btnRed : styles.btnGreen }>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    // Card Styles 
    card: {
        backgroundColor: '#E0E8F2',
        padding: 20,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20
    },
    button1: {
        borderColor: '#ffff',
    },
    button2: {
        backgroundColor: '#A0C3D1',
        borderColor: '#ffff',
    },
});
