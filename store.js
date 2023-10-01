import { makeAutoObservable } from "mobx";

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  // Define your state variables and actions here
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const store = new AppStore();
export default store;