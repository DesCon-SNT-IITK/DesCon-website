import React from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  'data-ai-hint'?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  style,
  ...props
}: ImageProps) {
  const imageStyle: React.CSSProperties = fill
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ...style,
      }
    : style || {};

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
      style={imageStyle}
      {...props}
    />
  );
} 