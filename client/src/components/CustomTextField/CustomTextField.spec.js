import React from 'react';
import { shallow } from 'enzyme';
import {CustomTextField} from './CustomTextField.jsx';

describe("Tests for CustomTextField ", ()=> {
    const mockField = {
            name: "name",
            label: "name",
            type: "text",
            defaultValue: "Anu",
        };
    it('Renders correctly', () => {
        const wrapper = shallow(<CustomTextField field={mockField} />);
        expect(wrapper).toMatchSnapshot();
      });
})

   
   

