import { useEffect } from 'react';
export const useInfinteScroll = ({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    console.log('useEffect')
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    if (!target) {
      return;
    }
    const lastNode = target.lastChild
    observer.observe(lastNode);
    return () => {
      console.log('unobserve')
      observer.unobserve(lastNode);
    };
  }, [target, onIntersect]);
};
