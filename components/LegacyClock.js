import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LegacyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    const { time } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Current Time</Text>
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 10, marginVertical: 8, backgroundColor: '#f3f3f3', borderRadius: 8 },
  title: { fontSize: 12, color: '#333' },
  time: { fontSize: 18, fontWeight: '700' },
});
