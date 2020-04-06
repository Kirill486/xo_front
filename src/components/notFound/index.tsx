import * as React from 'react';
import { Title } from '../title';
import {useLocation} from 'react-router-dom';

export const NotFoundPage: React.FC<{}> = () => {
  const {pathname} = useLocation();
  return (
    <Title text={`Not Found ${pathname}`} />
  );
}