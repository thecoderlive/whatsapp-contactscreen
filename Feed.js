import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ContactFeed from './ContactFeed'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<ContactFeed item={item.contact_feed}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    
});