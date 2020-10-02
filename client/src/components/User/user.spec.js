import React from 'react';
import { shallow } from 'enzyme';
import {user} from './user.jsx';

describe("Tests for user", ()=> {

    it('Renders correctly', () => {
        const wrapper = shallow(<user  />);
        expect(wrapper).toMatchSnapshot();
      });
})

   
   

