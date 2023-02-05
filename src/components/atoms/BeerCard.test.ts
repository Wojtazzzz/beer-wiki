import BeerCard from './BeerCard.vue';
import { mount } from '@vue/test-utils';

const props = {
  id: 78,
  name: 'Example Name',
  ibu: 25,
  food_pairing_count: 8,
};

describe('BeerCard component', () => {
  it('display correct data', () => {
    const component = mount(BeerCard, { props });

    const name = component.find('h3').text();
    const text = component.text();

    expect(name).toContain('Example Name');
    expect(text).toContain('IBU: 25');
    expect(text).toContain('Food pairing: 8');
  });

  it('has correct link', () => {
    const component = mount(BeerCard, { props });

    const link = component.find('a');

    expect(link.attributes().href).toContain('/beers/78');
  });

  it('display - when ibu is not defined', () => {
    const component = mount(BeerCard, {
      props: {
        ...props,
        ibu: null,
      },
    });

    const text = component.text();

    expect(text).toContain('IBU: -');
  });
});
