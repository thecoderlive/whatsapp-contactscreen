import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const contactFeedItem = ({ item }) => (
<View style={styles.contact_feed_item}>
<Image
    style={styles.profile_img}
    source={{uri: item.profile_img}}
    />
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.about}>{item.about}</Text>
</View>
  );

const ContactFeed = ({ item }) => (
<FlatList
    style={styles.contact_feed}
    data={item}
    renderItem={contactFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ContactFeed;

const styles = StyleSheet.create({
    'profile_img': {
        'width': '14vw',
        'height': '14vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 5
    },
    'name': {
        'color': '#050505',
        'fontSize': 18,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about': {
        'color': '#635f5f',
        'fontSize': 18,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});