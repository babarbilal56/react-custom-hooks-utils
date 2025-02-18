import { useEffect } from 'react';

function useDocumentTitle(title, revertOnUnmount) {
  const defaultTitle = typeof document !== 'undefined' ? document.title : '';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }

    return () => {
      if (revertOnUnmount && typeof document !== 'undefined') {
        document.title = defaultTitle;
      }
    };
  }, [title, revertOnUnmount, defaultTitle]);
}
export default useDocumentTitle;
