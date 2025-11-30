import { useColorScheme } from '@/components/useColorScheme';
import Names from '@/constants/Names';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { DynamicColorIOS } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeTabs      
        labelStyle={{
        // For the text color
        color: DynamicColorIOS({
          dark: '#EEFDF4',
          light: '#009B5F',
        }),
      }}
      // For the selected icon color
      tintColor={DynamicColorIOS({
        dark: '#EEFDF4',
        light: '#009B5F',
      })}>
      <NativeTabs.Trigger name={Names.home.fileName} >
        <Label>{Names.home.displayName}</Label>
        <Icon sf="house.fill"/>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name={Names.donation.fileName}>
        <Label>{Names.donation.displayName}</Label>
        <Icon sf="plus"/>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name={Names.history.fileName}>
        <Label>{Names.history.displayName}</Label>
        <Icon sf="calendar"/>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
