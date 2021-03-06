import React from 'react'
import {ScrollView} from 'react-native'
import List from '../components/List';
import {View, Text} from 'native-base';
import PropTypes from 'prop-types';

const SearchPage = (props) => {
    const keySearch = props.navigation.state.params.input;
    const {navigation}= props;
    console.log("in search page",keySearch)
    return (
        <>
            <View><Text style={{marginHorizontal:20}}>Your search relate to "{keySearch}":</Text></View>
            <List navigation={navigation} keySearch={keySearch.toUpperCase()} mode={"search"} />
        </>

    )
}
SearchPage.propTypes = {
    navigation: PropTypes.object,
};
export default SearchPage
