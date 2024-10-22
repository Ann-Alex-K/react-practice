import { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import { createPortal } from 'react-dom';

interface ModalDialogProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}

export function ModalDialog({ children, title, onClose }: ModalDialogProps) {
  const errorEl = document.getElementById('error-modal');
  return errorEl ? (
    createPortal(
      <>
        <div>{title}</div>
        <div>{children}</div>
        <div>
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </>,
      errorEl,
    )
  ) : (
    <>Error: element not found</>
  );
}
