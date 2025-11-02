import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import LegacyClock from '../components/LegacyClock';

export default function ProfileScreen() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^\d{10,13}$/.test(phone);

  const save = () => {
    if (!emailValid || !phoneValid) {
      Alert.alert('Invalid', 'Please correct the fields before saving.');
      return;
    }
    if (Platform.OS === 'android') ToastAndroid.show('Profile saved!', ToastAndroid.SHORT);
    else Alert.alert('Saved', 'Profile saved!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.avatar} />
      <Text style={styles.name}>Student Name</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="you@example.com" />
      {!emailValid && email.length > 0 && <Text style={styles.error}>Enter a valid email.</Text>}

      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="1234567890" keyboardType="phone-pad" />
      {!phoneValid && phone.length > 0 && <Text style={styles.error}>Phone must be 10-13 digits.</Text>}

      <View style={{ marginTop: 12 }}>
        <Button title="Save" onPress={save} disabled={!emailValid || !phoneValid} />
      </View>

      <View style={{ marginTop: 20 }}>
        <LegacyClock />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center', backgroundColor: '#f4f7fb', minHeight: '100%' },
  avatar: { width: 110, height: 110, borderRadius: 60 },
  name: { fontSize: 18, fontWeight: '700', marginTop: 10 },
  label: { alignSelf: 'flex-start', marginTop: 12, fontSize: 14 },
  input: { width: '100%', backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 6 },
  error: { color: 'red', alignSelf: 'flex-start', fontSize: 12, marginTop: 4 },
});
