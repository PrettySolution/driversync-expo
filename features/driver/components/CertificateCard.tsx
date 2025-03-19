import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Award, Calendar } from 'lucide-react-native';
import { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Award size={20} color="#3b82f6" />
        <Text style={styles.name}>{certificate.name}</Text>
      </View>
      
      <View style={styles.dates}>
        <View style={styles.dateContainer}>
          <Calendar size={16} color="#64748b" />
          <Text style={styles.dateLabel}>Issued:</Text>
          <Text style={styles.date}>{new Date(certificate.issueDate).toLocaleDateString()}</Text>
        </View>
        
        <View style={styles.dateContainer}>
          <Calendar size={16} color="#64748b" />
          <Text style={styles.dateLabel}>Expires:</Text>
          <Text style={styles.date}>{new Date(certificate.expiryDate).toLocaleDateString()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
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
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginLeft: 8,
  },
  dates: {
    gap: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  date: {
    fontSize: 14,
    color: '#1e293b',
  },
});