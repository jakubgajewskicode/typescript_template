import React, {
  useRef,
  useContext,
  Fragment,
  useState,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Dialog, Close } from './ui';

const Context = React.createContext<any>(null);

export function ModalProvider({ children }: any) {
  const modalRef = useRef<HTMLElement | any>(null);

  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <Fragment>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </Fragment>
  );
}

export function Modal({ onClose, children, ...props }: any) {
  const modalNode = useContext(Context);
  return modalNode
    ? ReactDOM.createPortal(
        <Overlay aria-labelledby="">
          <Dialog {...props}>
            <Close onClick={onClose}>
              <svg width="15px" height="15px" viewBox="0 0 15 15">
                <path
                  d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1
	                c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1
	                c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1
	                c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1
	                C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
                />
              </svg>
            </Close>
            <Fragment>{children}</Fragment>
          </Dialog>
        </Overlay>,
        modalNode
      )
    : null;
}
