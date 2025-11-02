import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function QuickLinkItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

QuickLinkItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  label: { fontSize: 16, fontWeight: '600' },
});
