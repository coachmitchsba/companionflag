declare module 'react-simple-maps' {
  import * as React from 'react';
  export interface ComposableMapProps {
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: unknown;
  }
  export const ComposableMap: React.FC<ComposableMapProps>;
  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    children?: React.ReactNode;
    [key: string]: unknown;
  }
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export interface GeographiesProps {
    geography: string;
    children: (props: { geographies: Geography[] }) => React.ReactNode;
  }
  export interface Geography {
    rsmKey: string;
    id: string;
    [key: string]: unknown;
  }
  export const Geographies: React.FC<GeographiesProps>;
  export interface GeographyProps {
    geography: Geography;
    onClick?: (geo: Geography) => void;
    onMouseEnter?: (geo: Geography) => void;
    onMouseLeave?: (geo: Geography) => void;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    [key: string]: unknown;
  }
  export const Geography: React.FC<GeographyProps>;
}
