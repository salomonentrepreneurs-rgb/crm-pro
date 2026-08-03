import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRM Pro</Text>
      <Text style={styles.subtitle}>A professional AI-powered CRM platform with lead management, deal pipeline, AI scoring, team collaboration, and analytics dashboards</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function CrmScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRM</Text>
      <Text style={styles.subtitle}>AI-Powered Sales Intelligence</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="CRM" component={CrmScreen} />
          <Tab.Screen name="Settings" component={() => <View style={styles.container}><Text>Settings</Text></View>} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#6366f1' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
});
