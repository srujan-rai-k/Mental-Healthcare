/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Text, TouchableRipple} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

const ProfileScreen = () => {
  const MyCustomShare = async () => {
    const shareOptions = {
      message:
        'Are you not feeling well because of Mental stress? Then try this new Amazing App which cares you...!!!.\n',
        url: 'https://play.google.com/store/apps/details?id=in.swiggy.android',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
      <View style={styles.container}>
  
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 35}}>
            <Avatar.Image 
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop:25,
              }]}>Srujan Rai K</Title>
            </View>
          </View>
        </View>
  
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="cake-variant" size={20}/>
            <Text style={{color:'#777777', marginLeft: 20}}>02-03-2001</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" size={20}/>
            <Text style={{color:'#777777', marginLeft: 20}}>6362310922</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" size={20}/>
            <Text style={{color:'#777777', marginLeft: 20}}>srujanraik99@gmail.com</Text>
          </View>
        </View>
  
        <TouchableRipple rippleColor="white" onPress={MyCustomShare}>
            <View style={styles.editItem}>
              <Icon name="pen" color="white" size={25} />
              <Text style={styles.editItemText}>Edit profile</Text>
            </View>
          </TouchableRipple>
  
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="history" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>History</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={MyCustomShare}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Share</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="cog-outline" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="frequently-asked-questions" color="#FF6347" size={25}/>
              <Text style={styles.menuItemText}>FAQs</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
    );
  };
  
export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
    editItem:{
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 17,
      marginLeft: 'auto',
      marginRight:'auto',
      backgroundColor:'#FF6347',
      borderRadius:10,
    },
    editItemText:{
      color:'white',
      fontSize:15,
      marginLeft : 5,
      marginTop : 3,
      fontWeight: '600',
    },
  });
