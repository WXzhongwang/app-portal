import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/helper';
import type { App as PortalApp } from './App';

let root: ReturnType<typeof createRoot> | null = null;

function render(container: HTMLElement) {
  root = createRoot(container);
  root.render(
    <StrictMode>
      <PortalApp />
    </StrictMode>,
  );
}

// ---- qiankun 主应用接入（生命周期） ----
renderWithQiankun({
  mount(props) {
    render(props.container.querySelector('#root')!);
  },
  unmount() {
    root?.unmount();
    root = null;
  },
});

// ---- 独立运行（开发调试，可脱离基座） ----
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render(document.getElementById('root')!);
}
