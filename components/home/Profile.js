import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
    padding:5,
  },

  text:{
      fontSize:18,
      fontWeight:'bold',
      letterSpacing:1,
      color:'white'
    }
});

export default Profile;
