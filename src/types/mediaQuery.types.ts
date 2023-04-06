
export interface IMediaQuery {
  [key:string]:string;
  phone: string;
  tablet: string;
  desktop: string;
}

export const MediaQuery : IMediaQuery =  {
  phone: '(min-width: 320px) and (max-width: 568px)',
  tablet: '(min-width : 768px) and (max-width : 1024px)',
  desktop: '(min-width : 1224px)'
};
