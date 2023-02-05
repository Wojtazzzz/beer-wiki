import FoodPairing from './FoodPairing.vue';
import { mount } from '@vue/test-utils';

const props = {
  pairing: ['First', 'Second', 'Third', 'Fourth'],
};

describe('FoodPairing component', () => {
  it('display correct amount of pairings', () => {
    const component = mount(FoodPairing, { props });

    const listItems = component.findAll('li');

    expect(listItems.length).toEqual(4);
  });

  it('pairings has correct text', () => {
    const component = mount(FoodPairing, { props });

    const text = component.text();

    props.pairing.forEach((item) => {
      expect(text).toContain(item);
    });
  });
});
