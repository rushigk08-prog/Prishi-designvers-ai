import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('Founder: Prishi | AI Assistant ready for your commands...');

  const generateAI = () => {
    setOutput(`Generating content for: "${prompt}"... \n\nPowered by Prishi's AI Engine.`);
    // Yahan aap Gemini API ka call integrate karenge
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DesignVerse AI</Text>
        <Text style={styles.subtitle}>Founder: Prishi</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.resultText}>{output}</Text>
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="AI ko bataiye kya karna hai..."
          value={prompt}
          onChangeText={setPrompt}
        />
        <TouchableOpacity style={styles.button} onPress={generateAI}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#4f46e5', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 12, color: '#e0e7ff', marginTop: 5 },
  content: { flex: 1, padding: 20 },
  resultText: { fontSize: 16, color: '#333' },
  inputArea: { padding: 20, borderTopWidth: 1, borderTopColor: '#ddd', backgroundColor: '#fff' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 10 },
  button: { backgroundColor: '#4f46e5', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
