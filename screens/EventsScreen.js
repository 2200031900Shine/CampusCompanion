import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import useFetchEvents from '../hooks/useFetchEvents';

export default function EventsScreen({ navigation }) {
  const { events, loading } = useFetchEvents();

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading events...</Text>
      </View>
    );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.push('EventDetails', { id: item.id, title: item.title })}
    >
      <Image source={require(`../assets/event1.jpg`)} style={styles.thumb} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{new Date(item.dateISO).toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList data={events} keyExtractor={(i) => i.id} renderItem={renderItem} contentContainerStyle={{ padding: 12 }} />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 1,
  },
  thumb: { width: 70, height: 70, borderRadius: 8, marginRight: 12 },
  title: { fontSize: 16, fontWeight: '700' },
  date: { fontSize: 12, color: '#666', marginTop: 4 },
});
