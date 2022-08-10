import { createContext, useState } from "react";

interface IModalContext {
  isModalOpen: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<IModalContext>({
  isModalOpen: false,
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
