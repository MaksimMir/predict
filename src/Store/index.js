import { makeAutoObservable, runInAction } from 'mobx';

class RootStore {
    userData = {
        hour: '',
        date: {
            age: 0,
            dateOfBirthday: ''
        },
        question: ''
    };

    apiData = {
        birth_year: '',
        created: '',
        edited: '',
        eye_color: '',
        films: [],
        gender: '',
        hair_color: '',
        height: '',
        homeworld: '',
        mass: '',
        name: '',
        skin_color: '',
        species: '',
        starships: [],
        url: '',
        vehicles: []
    };

    openData = false;

    constructor() {
        makeAutoObservable(this);
        this.userParams = new UserParams(this);
    }

    handlerFetch = async (address) => {
        return await fetch(address).then(res => res.json());        
    }

    get showData() {
        if (!this.openData) {
            this.openData = true;
        } else {
            this.openData = false;
        }
    }

    get getNumber() {
        const age = this.userData.date.age;
            if (age > 0 && age <= 8) {
                return 1; 
            } else if (age > 8 && age <= 16) {
                return 2;
            } else if (age > 16 && age <= 24) {
                return 3;
            } else if (age > 24 && age <= 32) {
                return 4; 
            } else if (age > 32 && age <= 40) {
                return 5;
            } else if (age > 40 && age <= 48) {
                return 6;
            } else if (age > 56 && age <= 64) {
                return 7;
            } else if (age > 64 && age <= 72) {
                return 8; 
            } else if (age > 72 && age <= 80) {
                return 9; 
            } else {
                return 10;   
            }
    }

    get fetchData() {
        runInAction(() => this.handlerFetch(`https://swapi.dev/api/people/${this.getNumber}`)
                .then(data => this.apiData = {...data}));
    }

}

class UserParams{
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    addData = (key, el) => {
        this.rootStore.userData[key] = el;
    }
}

export default new RootStore();