import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Pencil, Check } from 'lucide-react-native';

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

export function EditableField({ label, value, onSave, placeholder, multiline }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(tempValue);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        {isEditing ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, multiline && styles.multilineInput]}
              value={tempValue}
              onChangeText={setTempValue}
              placeholder={placeholder}
              multiline={multiline}
              autoFocus
            />
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Check size={20} color="#3b82f6" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.displayContainer}>
            <Text style={styles.value}>{value || placeholder}</Text>
            <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.editButton}>
              <Pencil size={16} color="#64748b" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  valueContainer: {
    minHeight: 44,
  },
  displayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 12,
    color: '#1e293b',
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  editButton: {
    padding: 4,
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  saveButton: {
    padding: 12,
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
});