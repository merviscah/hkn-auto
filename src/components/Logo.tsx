import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 48 }: LogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-transparent ${className}`}
      style={{ width: size, height: size, backgroundColor: 'transparent' }}
    >
      <Image
        src="/images/hkn-logo.png?v=1"
        alt="HKN Auto Sakarya oto servis logosu"
        width={size}
        height={size}
        sizes={`${size}px`}
        className="w-full h-full object-contain bg-transparent"
        priority={size >= 44}
        style={{ display: 'block', backgroundColor: 'transparent' }}
      />
    </div>
  );
}
