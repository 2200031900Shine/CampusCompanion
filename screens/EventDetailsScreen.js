import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import eventsData from '../data/events.json';

export default function EventDetailsScreen({ route, navigation }) {
  const { id, title } = route.params || {};
  const event = eventsData.find((e) => e.id === id) || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/event1.jpg')} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{event.title || title}</Text>
        <Text style={styles.date}>{event.dateISO ? new Date(event.dateISO).toLocaleString() : ''}</Text>
        <Text style={styles.desc}>{event.description}</Text>

        <View style={{ marginTop: 12 }}>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.paramsBox}>
          <Text style={{ fontWeight: '700' }}>Route Params:</Text>
          <Text>id: {String(id)}</Text>
          <Text>title: {String(title)}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  image: { width: '100%', height: 220 },
  body: { padding: 12 },
  title: { fontSize: 20, fontWeight: '800' },
  date: { marginTop: 8, color: '#666' },
  desc: { marginTop: 12, fontSize: 16, lineHeight: 22 },
  paramsBox: { marginTop: 18, padding: 10, backgroundColor: '#f7f7f7', borderRadius: 8 },
});
