import React from'react';
import HomeLoanForm from'./HomeLoanForm'
import { render, fireEvent, wait } from'@testing-library/react';

const mockData = { "module": "user-registration", "ui_definition": { "mandatory_fields": ["name", "type", "first_home_buyer"], "user_types": [{ "key": 0, "value": "Select one" }, { "key": 1, "value": "Group 1" }, { "key": 2, "value": "Group 2" }] } }


describe('', () => {
let wrapper
    beforeEach(() => {
        wrapper = render(<HomeLoanForm data={mockData}/>)
    })
    it('it should render the form', () => {
        expect(wrapper).toBeTruthy();
    })

    it('should validate name field in the form', async () => {
const { getByTestId } = wrapper;
const input = getByTestId('name');
await wait(() => {
            fireEvent.change(input, { target: { value: '23' } });
            fireEvent.blur(input, { target: { value: '23' } })
            expect(input.value).toBe('23')
        })
    })


    it('should validate address field in the form', async () => {
const { getByTestId } = wrapper;
const input = getByTestId('address');
await wait(() => {
            fireEvent.change(input, { target: { value: 'ABC' } })
            fireEvent.blur(input, { target: { value: 'ABC' } })
            expect(input.value).toBe('ABC')
        })
    })

    it('should validate description field in the form', async () => {
const { getByTestId } = wrapper;
const input = getByTestId('description');
await wait(() => {
            fireEvent.change(input, { target: { value: 'ABC' } })
            fireEvent.blur(input, { target: { value: 'ABC' } })
            expect(input.value).toBe('ABC')
        })
    })


    it('should validate type field in the form', async () => {
const { getByTestId, getAllByRole } = wrapper;
const select = getByTestId('type');
const option = getAllByRole('option')[0];

await wait(() => {
            expect(select.value).toBe('Select one');
            fireEvent.click(option, { target: { value: 'Group 1' } })
            fireEvent.blur(option, { target: { value: 'Group 1' } })
            expect(select.value).toBe('Group 1');
        })

    })

})
