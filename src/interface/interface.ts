import { JwtPayload } from 'jwt-decode';

export interface DecodedToken extends JwtPayload {
  Id: string;
  Name: string;
  Role: Role;
}

export enum Role {
  admin = 'Admin',
  employer = 'Employer',
  driver = 'Driver',
}
