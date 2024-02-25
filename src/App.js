
import './App.css';
import Header from './components/Header';
import Body from "./components/Body"
import {Provider} from "react-redux";
import appStore from './utils/store';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Video from './components/Video';
import SearchVideos from './components/SearchVideos';
import VideoContainer from './components/VideoContainer';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
        children:[
          {
            path:"/",
            element:<VideoContainer/>
          },
          {
            path:"/searchvideos",
            element:<SearchVideos/>
          }
        ]
      },
      {
        path:"/watch",
        element:<Video/>
      }
    ]
  }
])

function App() {
  return (
  
    <div className="App">
      {/* 
      *header
      *body
        - sidebar
        -mainconatainer
             -- filerbtns
             -- videocontainer
                   --videocards
      
      */}
      <Provider store={appStore}>
     
    
      <RouterProvider router={appRouter}/>
      
  
      </Provider>

    </div>
  
  );
}

export default App;
