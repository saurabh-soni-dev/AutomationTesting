import {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation/Navigation';
import {persistor, store} from './src/redux/store';
import {Text, View} from 'react-native';

const App: FC = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Navigation />
    //   </PersistGate>
    // </Provider>
    <View>
      <Text>Snapshot testing</Text>
    </View>
  );
};

export default App;
