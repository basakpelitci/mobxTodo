import { observable, action } from "mobx";

class MainStore {
    @observable user = {
        firstName: "Erdem",
        lastName: "Uslu"
    }

    @action changeName()
        this.user.firstName = firstName;
        this.user.lastName = lastName;
    }


const store = new MainStore();

export default store