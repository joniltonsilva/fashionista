import { OPEN_SIDEBAR } from './types';

const showSidebar = target => {
  return {
    type: OPEN_SIDEBAR,
    payload: { target }
  };
};

export {
    showSidebar
};