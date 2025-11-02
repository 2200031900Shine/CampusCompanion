import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';

export default function SettingsScreen() {
  const [notif, setNotif] = useState(true);
  const [compact, setCompact] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch value={notif} onValueChange={setNotif} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Compact Mode</Text>
        <Switch value={compact} onValueChange={setCompact} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Dummy Option</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  label: { fontSize: 16 },
});
