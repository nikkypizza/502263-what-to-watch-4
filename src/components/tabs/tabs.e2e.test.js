import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tabs from './tabs.jsx';
import promoObj from '../../mocks/promo.js';

Enzyme.configure({
  adapter: new Adapter(),
});

const Classname = {
  BASE: `movie-nav__item`,
  ACTIVE: `movie-nav__item--active`,
  LINK: `movie-nav__link`
};

describe(`Tabs E2E`, () => {
  it(`should change state on tab click`, () => {
    const tabsNode = mount(
        <Tabs movieData={promoObj}/>
    );

    const inst = tabsNode.instance();
    const tabNames = inst.tabNames;
    const tabDefaultName = tabNames[0];

    expect(inst.state.currentTab).toEqual(tabDefaultName);

    tabsNode.find(`.${Classname.LINK}`).at(1).simulate(`click`);
    expect(inst.state.currentTab).toEqual(tabNames[1]);
  });
  it(`should change active class on tab click`, () => {
    const tabsNode = mount(
        <Tabs movieData={promoObj}/>
    );

    expect(tabsNode.find(`.${Classname.BASE}`).get(0).props.className.includes(Classname.ACTIVE)).toBe(true);

    tabsNode.find(`.${Classname.LINK}`).at(1).simulate(`click`);

    expect(tabsNode.find(`.${Classname.BASE}`).get(0).props.className.includes(Classname.ACTIVE)).toBe(false);
    expect(tabsNode.find(`.${Classname.BASE}`).get(1).props.className.includes(Classname.ACTIVE)).toBe(true);
  });
});
