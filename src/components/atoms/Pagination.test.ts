import Pagination from './Pagination.vue';
import { vi } from 'vitest';
import { mount } from '@vue/test-utils';

const changePage = vi.fn();

const props = {
  page: 1,
  changePage,
};

describe('Pagination component', () => {
  it('display correct buttons', () => {
    const component = mount(Pagination, { props });

    const listItems = component.findAll('button');

    expect(listItems.length).toEqual(4);

    listItems.forEach((button, index) => {
      expect(button.text()).toContain(index + 1);
    });
  });

  it('active button has different classes', () => {
    const component = mount(Pagination, {
      props: {
        ...props,
        page: 3,
      },
    });

    const listItems = component.findAll('button');

    expect(listItems.length).toEqual(4);

    listItems.forEach((button, index) => {
      if (index + 1 !== 3) {
        expect(button.attributes().class).not.toContain(
          'bg-gray-200 text-gray-700 hover:bg-gray-300',
        );

        return;
      }

      expect(button.attributes().class).toContain('bg-gray-200 text-gray-700 hover:bg-gray-300');
    });
  });
});
