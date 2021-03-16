import React, { createContext, useCallback, useContext } from 'react';

interface CardContextData {
  addCard(): void;
}

const CardContext = createContext<CardContextData>({} as CardContextData);

const CardProvider: React.FC = ({ children }) => {
  const addCard = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('addCard');
  }, []);

  return (
    <CardContext.Provider value={{ addCard }}>{children}</CardContext.Provider>
  );
};

function useCard(): CardContextData {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }

  return context;
}

export { CardProvider, useCard };
