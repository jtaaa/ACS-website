export interface Roles {
    member: boolean;
    exec?: boolean;
    admin?: boolean;
}

export class User {

    email: string;
    photoUrl: string;
    roles: Roles;

    constructor(authData) {
        this.email = authData.email;
        this.photoUrl = authData.photoURL;
        this.roles = { member: true };
    }
}
