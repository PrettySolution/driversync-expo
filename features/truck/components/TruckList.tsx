import { StyleSheet, View } from "react-native";
import { Truck, TruckCard } from "./TruckCard";
import { useState } from "react";

const initialTrucks: Truck[] = [
  {
    assignedDriverId: "user01",
    model: "Volvo FH",
    odometer: 354615,
    plate: "JW-4220",
    status: "assigned",
    vehicleId: "tK1LBm1-G2LQ3bqWyAcYK",
  },
  {
    assignedDriverId: "",
    model: "Scania R Series",
    odometer: 490864,
    plate: "IC-8949",
    status: "available",
    vehicleId: "dmu9UoEjUkRUtU19HI2B1",
  },
];

export const TruckList = () => {
  const [trucks, setTrucks] = useState(initialTrucks);

  const handleAssignmentChange = (vehicleId: string, assigned: boolean) => {
    setTrucks((currentTrucks) =>
      currentTrucks.map((truck) =>
        truck.vehicleId === vehicleId
          ? {
              ...truck,
              status: assigned ? 'assigned' : 'available',
              assignedDriverId: assigned ? 'user01' : '', // In a real app, this would come from user selection
            }
          : truck
      )
    );
  };
  
  return (
    <View style={styles.scrollView}>
      {trucks.map((truck) => (
        <TruckCard
          key={truck.vehicleId}
          truck={truck}
          onAssignmentChange={handleAssignmentChange}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});