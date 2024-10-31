/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {Text, View, ScrollView, FlatList} from 'react-native';
const App = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView>
      <Text style={{fontSize: 40}}>List/Flatlist with API call</Text>
      {/* {data.length
        ? data.map(item => (
            <View style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}>
              <Text style={{fontSize: 20,backgroundColor:'#ddd'}}>Id :{item.id} </Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>
          ))
        : null} */}
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text style={{fontSize: 20, backgroundColor: '#ddd'}}>
                Id :{item.id}{' '}
              </Text>
              <Text style={{fontSize: 20}}>Title : {item.title}</Text>
              <Text style={{fontSize: 20}}>Body : {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </ScrollView>
  );
};

export default App;
