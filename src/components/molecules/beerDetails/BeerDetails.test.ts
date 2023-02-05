import BeerDetails from './BeerDetails.vue';
import { mount } from '@vue/test-utils';
import type { Beer } from '../../../utils/types';

const props = {
  beer: {
    id: 111,
    name: 'Vagabond Pilsner',
    tagline: 'Hoppy Pilsner.',
    description:
      'Take the thirst-quenching crispness of a German Pilsner and combine it with lemon and honey to produce a rewarding modern twist on a beer classic.',
    image_url: 'https://images.punkapi.com/v2/111.png',
    abv: 5,
    ibu: 55,
    food_pairing: [
      'Jamaican jerk chicken',
      'Hot dog with grilled onions and spicy ketchup',
      'Shortbread and raspberry jam thumbprint cookie',
    ],
    contributed_by: 'Sam Mason <samjbmason>',
  } satisfies Beer[number],
};

const routerBackMock = vi.fn();

vi.mock('vue-router', () => ({
  useRouter: () => ({
    back: routerBackMock,
  }),
}));

describe('BeerDetails component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('has image with correct url', () => {
    const component = mount(BeerDetails, { props });

    const img = component.find('img');

    expect(img.attributes().src).toEqual(props.beer.image_url);
  });

  it('has correct header, ibu, abv, and description', () => {
    const component = mount(BeerDetails, { props });

    const header = component.find('header');
    const heading = header.find('h2');
    const headerText = header.text();
    const description = header.find('p');

    expect(heading.text()).toEqual(props.beer.name);
    expect(headerText).toContain(props.beer.abv);
    expect(headerText).toContain(props.beer.ibu);
    expect(description.text()).toEqual(props.beer.description);
  });

  it('has button to previous page', async () => {
    const component = mount(BeerDetails, { props });

    const button = component.find('button[aria-label="Redirect to previous page"]');

    expect(button.text()).toEqual('Back');

    await button.trigger('click');

    expect(routerBackMock).toHaveBeenCalledTimes(1);
  });

  it('has correct food pairing section', async () => {
    const component = mount(BeerDetails, { props });

    const foodPairingList = component.find('section > ol');

    const listElements = foodPairingList.findAll('li');

    expect(listElements.length).toEqual(3);

    listElements.forEach((element, index) => {
      expect(element.text()).toEqual(props.beer.food_pairing[index]);
    });
  });

  it('has correct author name', async () => {
    const component = mount(BeerDetails, { props });

    const author = component.find('h4');

    expect(author.text()).not.toContain('Author: Sam Mason <samjbmason>');
    expect(author.text()).toContain('Author: samjbmason');
  });
});
