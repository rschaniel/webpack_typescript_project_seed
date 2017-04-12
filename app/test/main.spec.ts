import {sayHi} from '../src/main';


describe('Main', () => {

    beforeEach(() => {
       document.querySelector('body').innerHTML = '<div id="example"></div>';
    });

    it('should say hi', () => {
        expect(document.querySelector('#example').textContent).toEqual('');
        sayHi({name: "World"});
        expect(document.querySelector('#example').textContent).toEqual('Hello, World');
    });
});