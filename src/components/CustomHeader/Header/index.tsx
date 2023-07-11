import React, { ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomHeaderProps {
  title?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}

const CustomHeader = ({ title = '', leftComponent, rightComponent }: CustomHeaderProps) => {
  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={{ marginTop, paddingHorizontal: 20 }}>
      <View style={styles.flexRow}>
        <View style={styles.leftComponent}>{leftComponent}</View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightComponent}>{rightComponent}</View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  flexRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  leftComponent: { flex: 1, alignItems: 'flex-start' },
  titleBox: { alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', lineHeight: 23, letterSpacing: -0.5 },
  rightComponent: { flex: 1, alignItems: 'flex-end' },
});
