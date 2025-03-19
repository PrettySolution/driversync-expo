export interface Certificate {
  id: string;
  name: string;
  issueDate: string;
  expiryDate: string;
}

export interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  driverLicense: {
    number: string;
    expiryDate: string;
    state: string;
  };
  dateOfBirth: string;
  certificates: Certificate[];
}