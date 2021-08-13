import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Data} from '../../data/Data';

const Profile = () => {
  const windowWidth = Dimensions.get('window').width;

  const tabBarHeight = useBottomTabBarHeight();

  const size = windowWidth / 3;

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{paddingBottom: tabBarHeight}}>
        <View style={styles.userInfo}>
          <View style={styles.userPic}>
            <AntDesign name="user" size={50} />
          </View>
          <View style={styles.nameSection}>
            <Text style={styles.userFirstName}>Noob Coder</Text>
            <Text style={styles.userName}>@coder242</Text>
          </View>
          <View style={styles.userContent}>
            <View style={{marginRight: 50, alignItems: 'center'}}>
              <Text style={styles.label}>Photos</Text>
              <Text style={styles.number}>123</Text>
            </View>
            <View style={{marginRight: 50, alignItems: 'center'}}>
              <Text style={styles.label}>Followers</Text>
              <Text style={styles.number}>22.5M</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>Follows</Text>
              <Text style={styles.number}>1k</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.userDataHeader}>
            <View style={styles.dataHeaderTab}>
              <View style={{marginRight: 20, ...styles.tabHeading}}>
                <Text style={styles.text}>Photos</Text>
              </View>
              <View style={{marginRight: 20}}>
                <Text style={styles.text}>Vedios</Text>
              </View>
              <View>
                <Text style={styles.text}>Tagged</Text>
              </View>
            </View>
            <View>
              <MaterialCommunityIcons name="dots-horizontal" size={30} />
            </View>
          </View>

          <View style={styles.imageContainer}>
            {Data.map(item => {
              return (
                <View key={item.key}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={styles.imageWrap}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 22,
    paddingBottom: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  userPic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  nameSection: {
    marginVertical: 25,
    alignItems: 'center',
  },

  userFirstName: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  userName: {
    color: 'grey',
    fontSize: 16,
  },
  userContent: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 18,
    color: 'grey',
  },
  number: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },

  userDataHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },

  dataHeaderTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tabHeading: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    padding: 5,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1 / 2,
    marginVertical: 5,
  },

  imageWrap: {
    borderWidth: 2,
    borderColor: 'black',
    height: Dimensions.get('window').height / 3 - 12,
    width: Dimensions.get('window').width / 2 - 4,
  },
});

export default Profile;
