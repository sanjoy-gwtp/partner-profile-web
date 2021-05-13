export interface User {
  id: Number;
  userName: string;
  credential: Credential;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  enabled: boolean;
  roles: Role[];
  menuGroup: Number;
  branch: Number;
}

export interface Credential {
  type: string;
  userId: string;
  device: string;
  value: string;
}

export interface Role {
  id: Number;
  name: string;
  description: string;
  rights: Right[];
}

export interface Right {
  id: Number;
  name: string;
  description: string;
}