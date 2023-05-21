import { jsx } from 'react/jsx-runtime';

function Loading() {
  return jsx("div", {
    children: jsx("div", {
      className: "web3camp_widget_double-up"
    })
  });
}

export { Loading as default };
