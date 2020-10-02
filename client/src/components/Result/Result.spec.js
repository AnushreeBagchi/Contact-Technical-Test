import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result.jsx';

describe("Tests for CustomTextField ", ()=> {
    const data = {
        state: {
            errors : [{
                "attribute": "name",
                "message" : "is missing"
            }]
        }
    }
    it('Renders correctly', () => {
        const wrapper = shallow(<Result location={data} />);
        expect(wrapper).toMatchSnapshot();
      });
})

   
   

