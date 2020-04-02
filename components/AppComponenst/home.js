import React, { useState, useEffect } from 'react';
import {
  StyleSheet
  , Text
  , TouchableOpacity
  , View
  , FlatList
  , Alert
  , TouchableWithoutFeedback
  , Keyboard
  , CheckBox
  , AsyncStorage
  , Button
  , ActivityIndicator
  , Image 
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import AddTodo from './addTodo';




export default function Home({ navigation }) {
  const [isloading, setIsloading] = useState(false)
  const [get, setGet] = useState(true)
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

 

  useEffect(()=>{
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
    },1000)
  })
  useEffect(() => {
    AsyncStorage.setItem('todo', JSON.stringify(todos))
  })

  const displayData = async () => {
    const IntialTodo = await AsyncStorage.getItem('todo')
    const parsed = JSON.parse(IntialTodo)

    setTodos(parsed)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
    myAsyncEffect()
  }
 



  const storeData = async () => {
    try {
      await AsyncStorage.setItem("items", JSON.stringify(todos));
      console.log(JSON.stringify(todos))
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  };
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('items');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
  };
  const PressUpdateHandler = (id, title) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => { if ((todo.id != id) == false) { todo.title = title } return true });
    })
  }
  const submitHandler = (title) => {
    if (title.length > 3) {
      setTodos((prevTodos) => {
        return [
          { title: title, id: Math.random() },
          ...prevTodos
        ];
      })
      storeData()
      retrieveData();
    } else {
      Alert.alert('oppos', 'todo must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }

      ]);
    }

  }

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => { if ((todo.id != id) == false) { todo.completed = !todo.completed } return true });
    })
    storeData()
    retrieveData();
  }
  const ay5ra = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id);
    })
    storeData()
    retrieveData();
  }



  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("Dismissed");
    }}>
      
      {loading ?
        <ActivityIndicator style={styles.re} size="large" color="#0000ff" />
        :
        <View style={styles.container}>
          {get ?
            <View></View>
            : <TouchableOpacity onPress={() => displayData()}>
            <Text style={styles.text}>
              it seems you are offline, tab here or press refresh when you got connected
         </Text>
          </TouchableOpacity>

          }


          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />

            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <TouchableOpacity onPress={() => ay5ra(item.id)} style={{ flexDirection: 'row' }}>
                      <MaterialIcons name='delete' size={18} color={'#333'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {!item.completed? navigation.navigate('Details', { item, PressUpdateHandler }):
                    console.log()}} style={{ flexDirection: 'row', flex: 1 }} >
                      <Text style={item.completed ? styles.t : styles.f}>{item.title}</Text>
                    </TouchableOpacity>
                    <CheckBox style={styles.c} value={item.completed} onChange={() => pressHandler(item.id)} />

                  </View>
                )}
              />
              
             

            </View>
            
                 <Button onPress={() => displayData()} title='Click to refresh' color='coral' />

              
          </View>

        </View>
      }
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf0e6',
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 10,

  },
  itemText: {
    marginLeft: 10,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',

  }, t: {
    marginLeft: 10,
    textDecorationLine: "line-through",
    flexShrink: 1
  }, f: {
    marginLeft: 10,
    textDecorationLine: "none",
    flexShrink: 1
  }, c: {
    marginLeft: 20,

  },
  re: {
    justifyContent: 'center',
    padding: 150
  },
  text: {
    backgroundColor: 'yellow'
  }
});

