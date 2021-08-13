import React from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {Data} from '../../data/Data';

const Home = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <AntDesign name="appstore1" size={28} />
        <AntDesign name="message1" size={28} />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: tabBarHeight}}>
        <View style={styles.storyContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.addStory}>
              <AntDesign name="plussquare" size={20} color="white" />
            </View>
            <View style={styles.addStory}>
              <AntDesign name="user" size={35} />
            </View>
            <View style={styles.addStory}>
              <AntDesign name="user" size={35} />
            </View>
            <View style={styles.addStory}>
              <AntDesign name="user" size={35} />
            </View>
            <View style={styles.addStory}>
              <AntDesign name="user" size={35} />
            </View>
            <View style={styles.addStory}>
              <AntDesign name="user" size={35} />
            </View>
          </ScrollView>
        </View>
        {Data.map(item => {
          return (
            <View style={styles.userPostCard} key={item.key}>
              <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                  <View style={styles.userPic}>
                    <AntDesign name="user" size={35} />
                  </View>
                  <View style={styles.userName}>
                    <Text style={styles.firstName}>{item.firstName}</Text>
                    <Text>{item.userName}</Text>
                  </View>
                </View>
                <MaterialCommunityIcons name="dots-horizontal" size={30} />
              </View>
              <View style={styles.postImage}>
                <Image
                  source={item.img}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.postFooter}>
                <View style={styles.postBtns}>
                  <AntDesign
                    name="hearto"
                    size={25}
                    style={{marginRight: 10}}
                  />
                  <AntDesign
                    name="message1"
                    size={25}
                    style={{marginRight: 10}}
                  />
                  <Feather name="send" size={25} style={{marginRight: 10}} />
                </View>
                <Text>25 minutes ago</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },

  storyContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  addStory: {
    marginHorizontal: 10,
    width: 62,
    height: 62,
    borderRadius: 31,
    borderColor: 'red',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userPostCard: {
    marginHorizontal: 25,
    marginVertical: 10,
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
    marginVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 2,
    alignItems:'center',
    justifyContent:'center'
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
