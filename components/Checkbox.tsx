import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Check } from 'lucide-react-native';

interface CheckboxProps {
  checked: boolean;
  sectionId: string;
  itemId: string;
  handleCheckboxToggle: (sectionId: string, itemId: string) => void;
}

export function Checkbox({ checked, sectionId, itemId, handleCheckboxToggle }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={[styles.checkbox, checked && styles.checked]}
      onPress={() => handleCheckboxToggle(sectionId, itemId)}
      activeOpacity={0.8}
    >
      {checked && <Check size={16} color="#fff" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  checked: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
});