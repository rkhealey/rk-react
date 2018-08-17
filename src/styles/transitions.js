const slide = `
  &.slide-enter {
    transform: translateY(-50px);
  }

  &.slide-enter.slide-enter-active {
    transform: translateY(0);
    transition: transform .3s ease-in-out;
  }

  &.slide-exit {
    transform: translateY(0);
  }

  &.slide-exit.slide-exit-active {
    transform: translateY(-50px);
    transition: transform .3s ease-in-out;
  }
`;

const fade = (opacity = 1) => `
  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    opacity: ${opacity};
    transition: opacity 500ms ease;
  }

  &.fade-exit {
    opacity: ${opacity};
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease;
  }
`;

export {
  fade,
  slide,
};
