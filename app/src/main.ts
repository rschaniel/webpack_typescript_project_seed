import {Person} from './person';


export const sayHi = ({name}:Person)=> {
    if(document.querySelector('#example') !== null) {
        document.querySelector('#example').textContent = `Hello, ${name}`
    }
};

sayHi({name: "World"});