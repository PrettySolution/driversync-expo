type ReportForm = {
  id: string;
  label: string;
  items: {
    id: string;
    caption: string;
    description: string;
    checked: boolean;
    image: string | null;
    comment: string;
  }[];
}[];

export const fetchReportForm = async (): Promise<ReportForm> => {
  const response = [
    {
      id: "see_and_be_seen",
      label: "SEE AND BE SEEN",
      items: [
        {
          "id": "windshield_clean_inside_and_outside",
          "caption": "Windshield Clean",
          "description": "Ensure the windshield is clean both inside and outside to provide clear visibility.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "wipers_operate_without_streaks",
          "caption": "Wipers Functionality",
          "description": "Check that the wipers operate smoothly without leaving streaks on the windshield.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "windshield_washer_fluid_level_checked",
          "caption": "Washer Fluid Level",
          "description": "Verify that the windshield washer fluid level is sufficient for proper cleaning.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "no_visual_obstructions_from_objects",
          "caption": "No Obstructions",
          "description": "Ensure there are no visual obstructions caused by objects on the windshield or dashboard.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "all_mirrors_clean_and_correctly_adjusted",
          "caption": "Mirrors Clean & Adjusted",
          "description": "Confirm that all mirrors are clean and correctly adjusted for optimal visibility.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "all_headlights_and_lights_clean_and_functional",
          "caption": "Lights Clean & Functional",
          "description": "Inspect all headlights and lights to ensure they are clean and fully functional.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "dashboard_warning_lights_checked",
          "caption": "Warning Lights Checked",
          "description": "Review the dashboard warning lights to ensure there are no active alerts or issues.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        }
      ]
    },
    {
      id: "vehicle_inspection",
      label: "VEHICLE INSPECTION",
      items: [
        {
          "id": "tires",
          "caption": "Tire Check",
          "description": "Inspect tire pressure, tread depth, and look for any signs of damage or wear.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "brakes",
          "caption": "Brake Check",
          "description": "Evaluate brake pedal travel, brake pressure, and ensure brake fluid is at the correct level.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "steering",
          "caption": "Steering Check",
          "description": "Ensure smooth steering operation, no excessive play, and verify hydraulic oil level if applicable.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "powertrain",
          "caption": "Powertrain Check",
          "description": "Check fuel level, oil level, and coolant level to ensure the powertrain is ready for operation.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "documents",
          "caption": "Document Check",
          "description": "Verify that all vehicle papers are present and the EU control device has been checked.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "wheel_chocks",
          "caption": "Wheel Chocks",
          "description": "Ensure wheel chocks are securely stowed and ready for use.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "hoses_and_cables",
          "caption": "Hoses & Cables",
          "description": "Inspect hoses and cables for integrity and ensure they are firmly connected.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "suspension",
          "caption": "Suspension Check",
          "description": "Confirm that the vehicle stands straight and the suspension system is functioning properly.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        }
      ]
    },
    {
      id: "cargo_inspection",
      label: "CARGO INSPECTION",
      items: [
        {
          "id": "all_transport_documents_complete",
          "caption": "Transport Documents",
          "description": "Ensure all transport documents are complete and ready for inspection.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "vehicle_suitable_for_the_load",
          "caption": "Vehicle Suitability",
          "description": "Verify that the vehicle is appropriate for the type and weight of the load being transported.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "cargo_properly_secured",
          "caption": "Cargo Securing",
          "description": "Ensure the cargo is properly secured to prevent movement during transit.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "tension_on_lashing_straps_correct",
          "caption": "Lashing Straps",
          "description": "Check that the tension on lashing straps is correct to securely hold the load.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "additional_lashing_equipment_available",
          "caption": "Lashing Equipment",
          "description": "Confirm that additional lashing equipment is available for securing the load if needed.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "tarps_side_walls_etc_securely_closed",
          "caption": "Tarps & Walls",
          "description": "Ensure tarps, side walls, and other coverings are securely closed to protect the load.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "swap_bodies_containers_etc_securely_fastened",
          "caption": "Swap Bodies",
          "description": "Verify that swap bodies, containers, and similar structures are securely fastened to the vehicle.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "trailer_correctly_coupled_and_connected",
          "caption": "Trailer Coupling",
          "description": "Ensure the trailer is correctly coupled and all connections (electrical, air, etc.) are secure.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "brake_force_regulator_position_checked",
          "caption": "Brake Regulator",
          "description": "Check the position of the brake force regulator to ensure it is set correctly for the load.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        }
      ]
    },
    {
      id: "safety_checks",
      label: "SAFETY CHECKS",
      items: [
        {
          "id": "driver_seat_correctly_adjusted",
          "caption": "Driver Seat Adjustment",
          "description": "Ensure the driver's seat is correctly adjusted for optimal comfort and control.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "doors_firmly_closed",
          "caption": "Doors Closed",
          "description": "Verify that all doors are firmly closed to prevent any accidental openings during operation.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "loose_items_in_the_cab_securely_stowed",
          "caption": "Loose Items Stowed",
          "description": "Ensure all loose items in the cab are securely stowed to avoid distractions or hazards.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "safety_shoes_available",
          "caption": "Safety Shoes",
          "description": "Confirm that safety shoes are available and easily accessible for use when needed.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "gloves_available",
          "caption": "Gloves Available",
          "description": "Ensure gloves are available and ready for use in various operational scenarios.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "first_aid_kit_complete_and_easily_accessible",
          "caption": "First Aid Kit",
          "description": "Check that the first aid kit is complete and easily accessible in case of emergencies.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "warning_triangle_warning_lamp_and_safety_vest_readily_accessible",
          "caption": "Emergency Equipment",
          "description": "Ensure the warning triangle, warning lamp, and safety vest are readily accessible for emergency use.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "fire_extinguisher_inspected_and_ready_for_use",
          "caption": "Fire Extinguisher",
          "description": "Inspect the fire extinguisher to ensure it is fully functional and ready for immediate use.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        }
      ]
    },
    {
      id: "refrigerated_and_hazardous_goods",
      label: "REFRIGERATED AND HAZARDOUS GOODS",
      items: [
        {
          "id": "cold_protection_clothing_available",
          "caption": "Cold Protection Clothing",
          "description": "Ensure cold protection clothing is available for use in low-temperature conditions.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "protective_clothing_available",
          "caption": "Protective Clothing",
          "description": "Verify that protective clothing is available for handling hazardous materials or during operations requiring safety gear.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "hazardous_goods_warning_signs_present",
          "caption": "Warning Signs",
          "description": "Confirm that hazardous goods warning signs are present and clearly visible as required by regulations.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        },
        {
          "id": "hazardous_goods_documents_emergency_leaflets_available",
          "caption": "Hazard Docs & Leaflets",
          "description": "Ensure hazardous goods documents and emergency leaflets are available and accessible for reference during transport.",
          "checked": false,
          "image": null as string | null,
          "comment": ""
        }
      ]
    },
  ]

  return response;
}