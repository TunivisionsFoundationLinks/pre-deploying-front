//router
// import IndexRouters from "./router/index"

//scss
import "./assets/scss/socialv.scss"
import "./assets/scss/customizer.scss"


// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from './store/setting/actions'

// tostify configuration 

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App(props) {
  const dispatch = useDispatch()
  dispatch(setSetting())
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* <IndexRouters /> */}
        {props.children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
