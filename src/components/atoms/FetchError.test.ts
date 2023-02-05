import FetchError from './FetchError.vue';
import { mount } from '@vue/test-utils';

describe('FetchError component', () => {
  it('has correct message', () => {
    const component = mount(FetchError, {
      slots: {
        default: 'Example error',
      },
    });

    const text = component.text();

    expect(text).toContain('Example error');
  });
});
