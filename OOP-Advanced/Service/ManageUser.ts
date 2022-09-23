import {Manage} from "./Manage";
import {User} from "../Model/User";

export class ManageUser implements Manage<User> {
    public listUser: User[] = []

    add(t: User) {
        this.listUser.push(t)
    }

    update()

    // @ts-ignore
    remove(id: number) {
        let index = this.findById(id)
        this.listUser.splice(index,1)
    }

    findAll() {
        return this.listUser
    }

    findById(id: number) {
        for (let i = 0; i < this.listUser.length; i++) {
            if (id == this.listUser.length){
                return i
            }
        }
    }
}