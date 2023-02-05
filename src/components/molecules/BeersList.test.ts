import BeersList from './BeersList.vue';
import { mount } from '@vue/test-utils';
import type { BeerFromList } from '../../utils/types';
import { vi } from 'vitest';

const props = {
  beers: [
    {
      id: 1,
      food_pairing: ['first', 'second', 'third'],
      ibu: 67,
      name: 'First Beer',
    },
    {
      id: 2,
      food_pairing: ['zzz', 'xxx', 'ccc'],
      ibu: 323,
      name: 'Second Beer',
    },

    {
      id: 3,
      food_pairing: ['aaa', 'sss', 'ddd'],
      ibu: null,
      name: 'Third Beer',
    },
  ] satisfies BeerFromList[],
  page: 1,
  changePage: vi.fn(),
};

describe('BeersList component', () => {
  it('has header, list, pagination', () => {
    const component = mount(BeersList, { props });

    const header = component.find('h2');
    const list = component.find('ul');
    const pagination = component.find('nav');

    expect(header.text()).toContain('List of Beers');
    expect(list.exists()).toBeTruthy();
    expect(pagination.attributes()['aria-label']).toEqual('Pagination');
  });

  it('has correct beers', () => {
    const component = mount(BeersList, { props });

    const list = component.find('ul');
    const listItems = list.findAll('li');

    expect(listItems.length).toEqual(3);

    listItems.forEach((item, index) => {
      // check correct name
      expect(item.text()).toContain(props.beers[index].name);

      // check correct ibu
      if (index == 2) {
        expect(item.text()).toContain('IBU: -');
      } else {
        expect(item.text()).toContain(`IBU: ${props.beers[index].ibu}`);
      }

      // check correct link
      const link = item.find('a');
      expect(link.attributes().href).toContain(`/beers/${props.beers[index].id}`);

      // check correct food pairing
      expect(item.text()).toContain(`Food pairing: ${props.beers[index].food_pairing.length}`);
    });
  });
});
