import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import NoteItem from '../components/NoteItem';

export default function NotesScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const descRef = useRef();
  const titleRef = useRef();

  function validateTitle(t) {
    return t && t.trim().length >= 3;
  }
  function validateDesc(d) {
    return d && d.trim().length >= 10;
  }

  const saveNote = () => {
    const newNote = { id: Date.now().toString(), title: title.trim(), description: description.trim() };
    setNotes((p) => [newNote, ...p]);
    setTitle('');
    setDescription('');
    if (Platform.OS === 'android') ToastAndroid.show('Note saved!', ToastAndroid.SHORT);
    else Alert.alert('Success', 'Note saved!');
    titleRef.current?.focus();
  };

  const disabled = !validateTitle(title) || !validateDesc(description);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.heading}>Add a Note</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        ref={titleRef}
        style={styles.input}
        placeholder="Title (min 3 chars)"
        returnKeyType="next"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={() => descRef.current?.focus()}
      />
      {!validateTitle(title) && <Text style={styles.error}>Title must be at least 3 characters.</Text>}

      <Text style={styles.label}>Description</Text>
      <TextInput
        ref={descRef}
        style={[styles.input, { height: 100 }]}
        placeholder="Description (min 10 chars)"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      {!validateDesc(description) && <Text style={styles.error}>Description must be at least 10 characters.</Text>}

      <View style={styles.button}>
        <Button title="Save Note" onPress={saveNote} disabled={disabled} />
      </View>

      <Text style={[styles.heading, { marginTop: 20 }]}>Saved Notes</Text>
      {notes.map((n) => (
        <NoteItem key={n.id} note={n} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12, backgroundColor: '#f2f6f9', minHeight: '100%' },
  heading: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  label: { fontSize: 14, marginTop: 8 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 6 },
  button: { marginTop: 12 },
  error: { color: 'red', fontSize: 12, marginTop: 4 },
});
