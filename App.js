import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.findMyIp = this.findMyIp.bind(this)
    this.state = {
      data: ''
    }
  }

  async findMyIp() {
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json()
    this.setState({
      data: data.origin
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.ip}>
            Meu IP: {this.state.data}
          </Text>
          <Button title="Descobrir meu IP" onPress={this.findMyIp} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ip: {
    fontSize: 20,
    color: '#fff',
    paddingBottom: 10
  }
});
