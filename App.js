import { StyleSheet, Text, View } from 'react-native';
import Main from './src/app/views/Main';
import { useEffect, useState } from 'react';
import Login from './src/app/views/components/login';
import useCurrentAccount from './src/utils/useCurrentAccount';

export default function App() {

  const currentAccount = useCurrentAccount();
  const [key, setKey] = useState(false);


  return (
    <>
      {
        key == true ? (
          <Main setKey={setKey}/>
        ) : (
          <Login setKey={setKey}/>
        )
      }
    </>
  );
}

