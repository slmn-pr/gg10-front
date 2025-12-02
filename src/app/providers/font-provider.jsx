import { createContext, useContext } from 'react';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/space-grotesk';

const FontContext = createContext({ primary: 'Plus Jakarta Sans', display: 'Space Grotesk' });

export const useFontFamilies = () => useContext(FontContext);

const FontProvider = ({ children }) => (
  <FontContext.Provider value={{ primary: 'Plus Jakarta Sans', display: 'Space Grotesk' }}>
    {children}
  </FontContext.Provider>
);

export default FontProvider;
