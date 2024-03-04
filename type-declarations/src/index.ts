import axios from "axios";
import _ from "lodash";

const api = "https://jsonplaceholder.typicode.com/users/1";
const apiAll = "https://jsonplaceholder.typicode.com/users";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

axios
    .get<User>(api)
    .then((res) => {
        console.log("response back!");
        const { data: user } = res;
        console.log(user.company.catchPhrase);
    })
    .catch((e) => {
        console.log("error", e.message);
    });

axios
    .get<User[]>(apiAll)
    .then((res) => {
        const { data: users } = res;
        users.forEach((user) => console.log(user.company.catchPhrase));
    })
    .catch((e) => {
        console.log("error", e.message);
    });
