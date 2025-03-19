import ReportForm from '@/features/report/components/ReportForm';
import { ScrollView, StyleSheet } from 'react-native';

export default function ReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <ReportForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
});
