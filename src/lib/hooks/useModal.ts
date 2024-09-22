import { useState, useCallback } from "react";

interface UseModalProps {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export function useModal(): UseModalProps {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return { open, openModal, closeModal };
}
