import React ,{Component}from 'react';
import { View,Text,Image,StyleSheet,FlatList } from 'react-native';
import ItemReceive from './itemReceiveInvite/itemReceive';
export default class ReceiveInvitation extends Component {
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={dataArray}
                    renderItem={({ item }) => {
                        return (
                            <ItemReceive name={item.name}></ItemReceive>
                        );
                    }}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.ItemSeparator} >
                </FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },

})
const dataArray = [
    {
        "email":"abc@gmail.com",
        "name":"nguyen le anh khoa"
    },
    {
        "email":"bruce@gmail.com",
        "name":"Bui Hong Lan"
    },
]