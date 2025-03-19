import { View, Text, Switch, StyleSheet } from "react-native";

export type Truck = {
  assignedDriverId: string;
  model: string;
  odometer: number;
  plate: string;
  status: "assigned" | "available";
  vehicleId: string;
}

interface TruckCardProps {
  truck: Truck;
  onAssignmentChange: (vehicleId: string, assigned: boolean) => void;
}

export function TruckCard({ truck, onAssignmentChange }: TruckCardProps) {
  const isAssigned = truck.status === 'assigned';

  return (
    <View style={[styles.card, isAssigned && styles.cardDisabled]}>
      <View style={styles.header}>
        <Text style={styles.model}>{truck.model}</Text>
        <Text style={styles.plate}>{truck.plate}</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.odometer}>
          Odometer: {truck.odometer.toLocaleString()} km
        </Text>
        <Text style={styles.status}>
          Status: {truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
        </Text>
      </View>

      <View style={styles.assignment}>
        <Text style={styles.assignmentText}>
          {isAssigned ? `Assigned to: ${truck.assignedDriverId}` : 'Not assigned'}
        </Text>
        <Switch
          value={isAssigned}
          onValueChange={(value) => onAssignmentChange(truck.vehicleId, value)}
          disabled={isAssigned}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardDisabled: {
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  model: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  plate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  details: {
    marginBottom: 12,
  },
  odometer: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  assignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  assignmentText: {
    fontSize: 14,
    color: '#444',
  },
});