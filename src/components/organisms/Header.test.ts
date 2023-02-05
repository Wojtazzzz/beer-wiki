import Header from './Header.vue';
import { mount } from '@vue/test-utils';

describe('Header component', () => {
  it('has name of app', () => {
    const component = mount(Header);

    const name = component.find('h1');

    expect(name.text()).toContain('Beer Wiki');
  });
});
