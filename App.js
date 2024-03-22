import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './daily_app/src/app/views/Main';
import axios from 'axios';
import { useEffect } from 'react';

export default function App() {
  return (
    <Main/>
  );
}

