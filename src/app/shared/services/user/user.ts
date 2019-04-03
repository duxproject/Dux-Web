export interface Roles {
   admin?: boolean;
   guide?: boolean;
   tourist?: boolean;
}

export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
   roles: Roles;
}