export type Roles = 'ADMIN'| 'COMPANY' | 'PANEL';

export interface User{
  username:string;
  password:string;
}

export interface UserResponse{
  message:string;
  token:string;
  userId:number;
  role:string;
}
