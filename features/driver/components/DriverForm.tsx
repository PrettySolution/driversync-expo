import { useState } from "react";
import { Driver } from "../types";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { EditableField } from "./EditableField";
import { CertificateCard } from "./CertificateCard";

const initialDriver: Driver = {
  id: "driver_01",
  firstName: "John",
  lastName: "Doe",
  photoUrl:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
  driverLicense: {
    number: "DL123456789",
    expiryDate: "2025-12-31",
    state: "CA",
  },
  dateOfBirth: "1985-06-15",
  certificates: [
    {
      id: "cert_01",
      name: "Commercial Driver's License (CDL) Class A",
      issueDate: "2020-01-15",
      expiryDate: "2024-01-15",
    },
    {
      id: "cert_02",
      name: "Hazardous Materials Endorsement",
      issueDate: "2021-03-20",
      expiryDate: "2024-03-20",
    },
  ],
};

export const DriverForm = () => {
  const [driver, setDriver] = useState<Driver>(initialDriver);

  const handleFieldUpdate = (
    field: keyof Driver | "licenseNumber" | "licenseState" | "licenseExpiry",
    value: string
  ) => {
    setDriver((current) => {
      if (field === "licenseNumber") {
        return {
          ...current,
          driverLicense: { ...current.driverLicense, number: value },
        };
      }
      if (field === "licenseState") {
        return {
          ...current,
          driverLicense: { ...current.driverLicense, state: value },
        };
      }
      if (field === "licenseExpiry") {
        return {
          ...current,
          driverLicense: { ...current.driverLicense, expiryDate: value },
        };
      }
      return {
        ...current,
        [field]: value,
      };
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: driver.photoUrl }} style={styles.photo} />
        <View style={styles.nameContainer}>
          <EditableField
            label="First Name"
            value={driver.firstName}
            onSave={(value) => handleFieldUpdate("firstName", value)}
          />
          <EditableField
            label="Last Name"
            value={driver.lastName}
            onSave={(value) => handleFieldUpdate("lastName", value)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Driver License</Text>
        <EditableField
          label="License Number"
          value={driver.driverLicense.number}
          onSave={(value) => handleFieldUpdate("licenseNumber", value)}
        />
        <EditableField
          label="State"
          value={driver.driverLicense.state}
          onSave={(value) => handleFieldUpdate("licenseState", value)}
        />
        <EditableField
          label="Expiry Date"
          value={driver.driverLicense.expiryDate}
          onSave={(value) => handleFieldUpdate("licenseExpiry", value)}
          placeholder="YYYY-MM-DD"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <EditableField
          label="Date of Birth"
          value={driver.dateOfBirth}
          onSave={(value) => handleFieldUpdate("dateOfBirth", value)}
          placeholder="YYYY-MM-DD"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificates</Text>
        {driver.certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#f1f5f9",
  },
  nameContainer: {
    flex: 1,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 16,
  },
});
