import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoteItem({ note }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.desc}>{note.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 1,
  },
  title: { fontSize: 16, fontWeight: '700' },
  desc: { fontSize: 14, marginTop: 6 },
});
