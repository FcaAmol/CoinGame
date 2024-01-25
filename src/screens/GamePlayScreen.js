import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, StyleSheet,Button} from 'react-native';

const GamePlayScreen = ({navigation}) => {
    const [coins, setCoins] = useState(21);
  const [playerTurn, setPlayerTurn] = useState(true); // true for player's turn, false for AI's turn
  const [result, setResult] = useState('');

  const handlePickCoins = (numCoins) => {
    if (coins - numCoins <= 0) {
      setResult('You picked the last coin. You lose!');
      navigation.navigate("LostScreen")
    } else {
      setCoins(coins - numCoins);
      setPlayerTurn(false);
      setTimeout(() => {
        aiTurn();
      }, 1000); // Simulate AI's decision with a delay
    }
  };

  const aiTurn = () => {
    // AI logic to ensure it always wins
    let aiPick = coins % 5;
    if (aiPick === 0) {
      aiPick = Math.floor(Math.random() * 4) + 1; // Pick a random number between 1 and 4 if no optimal move
    }
    setCoins(coins - aiPick);
    setPlayerTurn(true);
    if (coins - aiPick <= 0) {
      setResult('AI picked the last coin. You win!');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
     <Text>Coins left: {coins}</Text>
      {result ? <Text>{result}</Text> : null}
      {playerTurn && coins > 0 ? (
        <View>
          <Text>Your Turn</Text>
          <Button title="Pick 1" onPress={() => handlePickCoins(1)} />
          <Button title="Pick 2" onPress={() => handlePickCoins(2)} />
          <Button title="Pick 3" onPress={() => handlePickCoins(3)} />
          <Button title="Pick 4" onPress={() => handlePickCoins(4)} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default GamePlayScreen;
