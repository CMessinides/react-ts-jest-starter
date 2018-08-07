import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

it('should render a message', () => {
    const hw = shallow(<HelloWorld />)

    expect(hw.text()).toEqual('Hello, world!')
});
