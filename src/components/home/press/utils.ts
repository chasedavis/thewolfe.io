export const getLogoStyle = (width: number, height: number) => ({
  width: `${width}px`,
  height: `${height}px`,
});

export const getSvgMaskStyle = (src: string) => ({
  maskImage: `url(${src})`,
  maskSize: 'contain',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskImage: `url(${src})`,
  WebkitMaskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  backgroundColor: 'currentColor',
});