import {ManageUser} from "../Service/ManageUser";

let input = require('readline-sync')
let listUser: ManageUser = new ManageUser()

function login() {
    console.log(`1.Login\n2.Register\n0.Exit`)
    let choice;
    do {
        choice = input.question(`Input your command`)
        switch (choice) {
            case '1':
                break;
            case '2':
                break;
        }
    } while (choice != 0)


}

// let usernameLogin = input.question(`Input username`)
// let passwordLogin = input.question(`Input password`)
// if (usernameLogin && passwordLogin){
//
// }

function register() {
    let username = input.question(`Enter your new username`);
    let password = input.question(`Enter your password`);
    let statusInput = input.question(`Enter 1 for admin status or 2 for user status`)
    let isAdmin
    if (statusInput == 1) {
        isAdmin = true
    } else if (statusInput == 2){
        isAdmin = false
    } else{
        console.log(`Invalid input`)
        login()
    }
    let id = (listUser.listUser.length + 1);
}