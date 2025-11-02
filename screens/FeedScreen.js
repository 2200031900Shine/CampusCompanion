import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  Dimensions,
  Button,
  SafeAreaView,
} from 'react-native';
import linksData from '../data/links.json';
import QuickLinkItem from '../components/QuickLinkItem';

export default function FeedScreen() {
  const flatRef = useRef(null);
  const [columns, setColumns] = useState(getColumns());

  function getColumns() {
    const w = Dimensions.get('window').width;
    return w < 600 ? 1 : 2;
  }

  // Listen for orientation/size changes
  Dimensions.addEventListener('change', () => {
    setColumns(getColumns());
  });

  const handleOpen = (item) => {
    Alert.alert('Open Link', `${item.label}\n\nURL: ${item.url}`);
  };

  const scrollToTop = () => {
    if (flatRef.current) flatRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/banner.jpg')} style={styles.banner} resizeMode="cover" />
      <View style={styles.actions}>
        <Button title="Scroll to Top" onPress={scrollToTop} />
      </View>
      <FlatList
        ref={flatRef}
        data={linksData}
        keyExtractor={(i) => i.id}
        numColumns={columns}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => <QuickLinkItem item={item} onPress={handleOpen} />}
        columnWrapperStyle={columns > 1 ? { justifyContent: 'space-between' } : null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef2f5' },
  banner: { width: '100%', height: 160 },
  actions: { padding: 8, alignItems: 'flex-end' },
});
