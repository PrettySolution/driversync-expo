import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
}

export function Button({ onPress, label, variant = 'primary', icon }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outline' && styles.buttonOutline,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
      <Text
        style={[
          styles.label,
          variant === 'outline' && styles.labelOutline,
          // icon && styles.labelWithIcon,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#3b82f6',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  labelOutline: {
    color: '#3b82f6',
  },
  labelWithIcon: {
    marginLeft: 8,
  },
});