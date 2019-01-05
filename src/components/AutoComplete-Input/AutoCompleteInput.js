import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet,TextInput } from 'react-native';
import style from './AutoCompleteInputStyle';
import ItemAutoComplete from './ItemAutoComplete/ItemAutoComplete';
import color from '../../colors';
export default class AutoCompleteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemSearchArray: [],
            valueText: '',
            change: true
        }
    }
    onChangeText = (text) => {
        let data = this.props.data
        let dataArray = [];
        let str = text.toLowerCase();
        let newtext = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        newtext = newtext.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        newtext = newtext.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        newtext = newtext.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        newtext = newtext.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        newtext = newtext.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        newtext = newtext.replace(/đ/g, "d");
        newtext = newtext.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        newtext = newtext.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        newtext = newtext.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        newtext = newtext.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        newtext = newtext.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        newtext = newtext.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        newtext = newtext.replace(/Đ/g, "D");
        if (newtext === '' || newtext.indexOf(' ') >= 0) {
            this.state.itemSearchArray = [];
            this.setState({ change: false });
            return;
        }
        data.map((item) => {
            if (item[this.props.keyItem].toLowerCase().includes(str)) {
                dataArray.push(item);
                this.state.itemSearchArray = dataArray;
                this.setState({ change: false });
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style.inputPosition}>
                    <TextInput style={style.input} placeholder={this.props.hint}
                        value={this.state.valueText}
                        onChangeText={text => this.onChangeText(text)}
                        secureTextEntry={false}/>
                </View>

                <View style={style.list}>
                    <FlatList
                        data={this.state.itemSearchArray}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={style.container} onPress={() => {
                                    this.setState({ valueText: item[this.props.keyItem] })
                                    this.setState({ itemSearchArray: [] })
                                }}>
                                    <Text style={style.item}>{item[this.props.keyItem]}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.name}
                        ItemSeparatorComponent={this.ItemSeparator} >
                    </FlatList>
                </View>
            </View>
        );
    }
}

