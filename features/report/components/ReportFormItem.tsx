import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
// import { Camera } from 'lucide-react-native';
import { View, Text, Image, TextInput, StyleSheet, Platform } from 'react-native';

interface ReportFormItemProps {
  sectionId: string;
  item: {
    id: string;
    caption: string;
    description: string;
    checked: boolean;
    image?: string | null;
    comment?: string;
  };
  handleCheckboxToggle: (sectionId: string, itemId: string) => void;
  handleTakePhoto: (sectionId: string, itemId: string) => void;
  handleCommentChange: (sectionId: string, itemId: string, text: string) => void;
}

export default function ReportFormItem({
  sectionId,
  item,
  handleCheckboxToggle,
  handleTakePhoto,
  handleCommentChange,
}: ReportFormItemProps) {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Checkbox checked={item.checked} sectionId={sectionId} itemId={item.id} handleCheckboxToggle={handleCheckboxToggle} />
        <Text style={styles.caption}>{item.caption}</Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>

      {/* {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginTop: 5 }} />} */}
      <View style={styles.imageSection}>
        <Button
          onPress={() => handleTakePhoto(sectionId, item.id)}
          variant="outline"
          // icon={<Camera size={20} />}
          label="Capture Image"
        />
        {item.image && (
          <View style={styles.imagePreview}>
            <Image source={{ uri: item.image }} style={styles.imagePreview} />
          </View>
        )}
      </View>

      <TextInput
        style={styles.comment}
        multiline
        numberOfLines={3}
        placeholder="Add a comment..."
        value={item.comment}
        onChangeText={(text) => handleCommentChange(sectionId, item.id, text)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  caption: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
    color: '#1a1a1a',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  imageSection: {
    marginBottom: 16,
  },
  imagePreview: {
    marginTop: 8,
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  comment: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#1a1a1a',
    backgroundColor: '#f8fafc',
    textAlignVertical: 'top',
  },
});