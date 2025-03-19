import { View, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import { Button } from '@/components/Button';

import * as ImagePicker from 'expo-image-picker';
import ReportFormSection from './ReportFormSection';
import { useReportForm } from '../hooks/useReportForm';

export default function ReportForm() {
  const { data: sections, isLoading } = useReportForm();
  const [formData, setFormData] = useState(sections);

  useEffect(() => {
    if (sections) {
      setFormData(sections);
    }
  }, [sections]);

  const handleCheckboxToggle = (sectionId: string, itemId: string) => {
    setFormData(prev => prev?.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.map(item => item.id === itemId ? { ...item, checked: !item.checked } : item)
        };
      }
      return section;
    }));
  };

  const handleCommentChange = (sectionId: string, itemId: string, text: string) => {
    setFormData(prev => prev?.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: section.items.map(item => item.id === itemId ? { ...item, comment: text } : item)
        };
      }
      return section;
    }));
  };

  const handleTakePhoto = async (sectionId: string, itemId: string) => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.status !== 'granted') {
      alert('Camera permission is required to take photos');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ base64: false });
    if (!result.canceled) {
      setFormData(prev => prev?.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.map(item => item.id === itemId ? { ...item, image: result.assets[0].uri ?? null } : item)
          };
        }
        return section;
      }));
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };
  
  return (
    <View>
      {formData?.map((section) => (
        <ReportFormSection
          key={section.id}
          section={section}
          handleCheckboxToggle={handleCheckboxToggle}
          handleTakePhoto={handleTakePhoto}
          handleCommentChange={handleCommentChange}
        />
      ))}
      
      <View style={styles.submitContainer}>
        <Button
          onPress={handleSubmit}
          label="Submit Inspection"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  submitContainer: {
    marginTop: 8,
    marginBottom: 32,
  },
});