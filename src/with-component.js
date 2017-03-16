import { render } from 'preact';
import { withRender } from './with-render';

export function withComponent (Base = withRender()) {
  return class extends Base {
    rendererCallback (host, vdom) {
      render(vdom, host);
    }
  };
}

export const Component = withComponent();
export { h } from 'preact';