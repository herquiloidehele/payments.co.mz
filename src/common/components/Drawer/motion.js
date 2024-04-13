export const maskMotion = {
  motionAppear: true,
  motionName: 'mask-motion',
  onAppearEnd: console.warn,
};

export const motion = (placement) => ({
  motionAppear: true,
  motionName: `panel-motion-${placement}`,
});

const motionProps = {
  maskMotion,
  motion,
};

export default motionProps;
