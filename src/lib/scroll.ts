declare global {
  interface Window {
    __lenis?: any;
  }
}

export const lockScroll = (lock: boolean) => {
  const l = window.__lenis;
  if (lock) {
    if (l) l.stop();
    document.body.style.overflow = 'hidden';
  } else {
    if (l) l.start();
    document.body.style.overflow = '';
  }
};

export const scrollTop = () => {
  const l = window.__lenis;
  if (l) l.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
};
