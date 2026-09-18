import React, { createContext, useContext, useState } from 'react';

interface OrderModalContextType {
  isOrderModalOpen: boolean;
  prefillMedicine: string;
  openOrderModal: (medicineName?: string) => void;
  closeOrderModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export const OrderModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefillMedicine, setPrefillMedicine] = useState('');

  const openOrderModal = (medicineName: string = '') => {
    setPrefillMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setPrefillMedicine('');
  };

  return (
    <OrderModalContext.Provider
      value={{
        isOrderModalOpen,
        prefillMedicine,
        openOrderModal,
        closeOrderModal,
      }}
    >
      {children}
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = () => {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
};
