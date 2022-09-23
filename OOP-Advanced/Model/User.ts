export class User {
    private _username: string;
    private _password: string;
    private _isAdmin: boolean;
    private _isLocked: boolean;
    private _id: number;


    constructor(username: string, password: string, isAdmin: boolean, isLocked: boolean, id: number) {
        this._username = username;
        this._password = password;
        this._isAdmin = isAdmin;
        this._isLocked = isLocked;
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get isAdmin(): boolean {
        return this._isAdmin;
    }

    set isAdmin(value: boolean) {
        this._isAdmin = value;
    }

    get isLocked(): boolean {
        return this._isLocked;
    }

    set isLocked(value: boolean) {
        this._isLocked = value;
    }
}