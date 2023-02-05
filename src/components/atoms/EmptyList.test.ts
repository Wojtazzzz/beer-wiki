import EmptyList from './EmptyList.vue';
import { mount } from '@vue/test-utils';

describe('EmptyList component', () => {
  it('has correct message', () => {
    const component = mount(EmptyList, {
      slots: {
        default: 'Example warning',
      },
    });

    const text = component.text();

    expect(text).toContain('Example warning');
  });
});
