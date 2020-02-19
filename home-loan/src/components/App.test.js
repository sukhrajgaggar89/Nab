import React from'react';
import App from'./App'
import { render } from'@testing-library/react';


describe('render app component', () => {
let wrap;
    beforeEach(() => {
        wrap = render(<App/>)
    })
    it('it should render app component ', () => {
        expect(wrap).toBeTruthy();
    })
});