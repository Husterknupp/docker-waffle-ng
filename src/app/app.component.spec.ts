import { CardComponent } from './card.component'
import { Container } from './container';

describe('onHoverContainerOut', () => {
  it('should toggle hover attribute', () => {
    var card: CardComponent = new CardComponent();
    var container: Container = new Container();
    container.hover = true;
    card.onHoverContainerOut(container);

    expect(container.hover).toBe(false);
  });
})

describe('onHoverOverContainer', () => {
  it('should toggle hover attribute', () => {
    var card: CardComponent = new CardComponent();
    var container: Container = new Container();
    container.hover = false;
    card.onHoverOverContainer(container);

    expect(container.hover).toBe(true);
  });
})
