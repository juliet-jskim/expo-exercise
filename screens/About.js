
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/books'
import { useState } from 'react'
import { Appbar, Avatar } from 'react-native-paper';
export default function About({navigation}) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    };

    const _goBack = () => console.log('Spurts');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.appBar}>
                <Avatar.Image size={30} source={require('../assets/spurt-logo.png')} />
                <Appbar.Content title="spurts" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
            <View style={styles.text}>
                <Text style={styles.textOne}>Welcome, fellow Spurt! </Text>
                <Text style={styles.textTwo}>Check out our library here:</Text>
                <Button title="Show data" onPress={() => addingData()}/>
                {data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View key={index}>
                                <Text>{b.title}</Text>
                                {b.authors && b.authors.map((a, ind) => {
                                    return(
                                        <Text key={ind}>
                                            {a}
                                        </Text>
                                        )
                                    })
                                }
                            </View>
                            )
                        }
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appBar: {
        gap: 10,
        width: 415,
        backgroundColor: '#f1f1f1',
        position: 'absolute',
        top: -300,
        left: -205,
        paddingLeft: 20,
    },
    text: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 10,
       position: 'absolute',
    },
    textOne: {
        fontSize: 20,
        top: -50,
        fontWeight: 'bold',
    }
});
