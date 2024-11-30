import { Toaster } from 'react-hot-toast';

export const AppController: FC = () => {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
    </>
  );
};
