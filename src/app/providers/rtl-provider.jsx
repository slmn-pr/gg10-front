import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const RTLContext = createContext({ direction: 'ltr', toggleDirection: () => {} });

export const useRTL = () => useContext(RTLContext);

const RTLProvider = ({ children }) => {
  const [direction, setDirection] = useState(
    import.meta.env.VITE_ENABLE_RTL === 'true' ? 'rtl' : 'ltr',
  );

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  const cache = useMemo(
    () =>
      createCache({
        key: direction === 'rtl' ? 'mui-rtl' : 'mui',
        stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : [prefixer],
        prepend: true,
      }),
    [direction],
  );

  const toggleDirection = useCallback(() => {
    setDirection((prev) => (prev === 'rtl' ? 'ltr' : 'rtl'));
  }, []);

  return (
    <RTLContext.Provider value={{ direction, toggleDirection }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </RTLContext.Provider>
  );
};

export default RTLProvider;
