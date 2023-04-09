import React from 'react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import "@cloudscape-design/global-styles/index.css"
import awsconfig from './aws-exports';

import { Authenticator, View, Text, Heading } from '@aws-amplify/ui-react';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import { ApiKeyProvider } from './components/ApiKeyProvider';

Amplify.configure(awsconfig);

const App = () => {

  const components = {
    SignIn: {
      Header() {
        return (
          <Heading
            level={3}
            padding="2rem"
          >
            Sign in
          </Heading>
        )
      }
    },
    Footer() {
      return (
        <View textAlign="center">
          <Text>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  }


  return (
    <Authenticator hideSignUp={true} loginMechanisms={['email']} components={components}>
      {({ signOut, user }) => (
        <main>
          <ApiKeyProvider user={user}>
            <NavigationBar 
              signOut={signOut} 
              user={user}
            />
            <HomePage user={user}/>
          </ApiKeyProvider>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
