import React from 'react';

export const BrandLogo = ({
  variant = 'dark',
  className = '',
  layout = 'horizontal',
  size = 'default',
}) => {
  const isLight = variant === 'light';

  // Choose the official logo asset
  const logoSrc = isLight
    ? layout === 'stacked'
      ? '/assets/images/sys-n-sol-logo-light.png'
      : '/assets/images/sys-n-sol-logo-horizontal-light.png'
    : layout === 'stacked'
      ? '/assets/images/sys-n-sol-logo.png'
      : '/assets/images/sys-n-sol-logo-horizontal.png';

  const sizeClass =
    size === 'large'
      ? 'h-11 sm:h-13 lg:h-14'
      : size === 'small'
      ? 'h-7 sm:h-8'
      : 'h-8 sm:h-9 md:h-10 lg:h-11';

  return (
    <div className={`flex items-center select-none flex-shrink-0 ${className}`}>
      <img
        src={logoSrc}
        alt="Sys N Sol - We Make Computing Easy"
        className={`${sizeClass} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
      />
    </div>
  );
};

export default BrandLogo;
