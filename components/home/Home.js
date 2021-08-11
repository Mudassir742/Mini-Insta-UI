import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <AntDesign name="appstore1" size={30} />
        <AntDesign name="message1" size={30} />
      </View>
      <View style={styles.userPostCard}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <AntDesign name="user" size={50} />
            <View style={styles.userName}>
              <Text style={styles.firstName}>Nasir</Text>
              <Text>@lafanga</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="dots-horizontal" size={30} />
        </View>
        <View style={styles.postImage}>
          <Image
            source={require('../../assets/photo1.jpg')}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
        <View style={styles.postFooter}>
          <View style={styles.postBtns}>
            <AntDesign name="hearto" size={30} style={{marginRight: 10}} />
            <AntDesign name="message1" size={30} style={{marginRight: 10}} />
            <Feather name="send" size={30} style={{marginRight: 10}} />
          </View>
          <Text>25 minutes ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  userPostCard: {
    margin: 30,
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 4,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical:10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 10,
  },
  firstName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    
    width: '90%',
    height: 350,
    borderRadius: 20,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  postBtns: {
    flexDirection: 'row',
  },
});

export default Home;
