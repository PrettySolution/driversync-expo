import { View, Text, StyleSheet } from 'react-native';
import ReportFormItem from './ReportFormItem';

interface ReportFormSectionProps {
  section: {
    id: string;
    label: string;
    items: {
      id: string;
      caption: string;
      description: string;
      checked: boolean;
      image?: string | null;
      comment?: string;
    }[];
  };
  handleCheckboxToggle: (sectionId: string, itemId: string) => void;
  handleTakePhoto: (sectionId: string, itemId: string) => void;
  handleCommentChange: (sectionId: string, itemId: string, text: string) => void;
}

export default function ReportFormSection({
  section,
  handleCheckboxToggle,
  handleTakePhoto,
  handleCommentChange,
}: ReportFormSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{section.label}</Text>
      {section.items.map((item) => (
        <ReportFormItem
          key={item.id}
          sectionId={section.id}
          item={item}
          handleCheckboxToggle={handleCheckboxToggle}
          handleTakePhoto={handleTakePhoto}
          handleCommentChange={handleCommentChange}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 16,
  },
});