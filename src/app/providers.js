


import ReduxProvider from "../store/provider";
import ToasterContext from "./context/ToastContext";


export function Providers({ children }) {
  return (
    <ReduxProvider>
      <ToasterContext />
      {children}
    </ReduxProvider>
  );
}
