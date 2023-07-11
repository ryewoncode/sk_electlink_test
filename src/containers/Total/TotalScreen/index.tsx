import { CustomHeader } from '@/components/CustomHeader';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TotalScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title={'전체'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>TotalScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
});

export default TotalScreen;
