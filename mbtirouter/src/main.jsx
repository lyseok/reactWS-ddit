import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx';
import MbtiMng from './pages/MbtiMng.jsx';
import MbtiList from './components/mbti/MbtiList.jsx';
import MbtiDetail from './components/mbti/MbtiDetail.jsx';
import MbtiForm from './components/mbti/MbtiForm.jsx';
import MbtiEdit from './components/mbti/MbtiEdit.jsx';

/* 
  라우팅 설계
  / (App) -> Outlet
  - 인덱스 (Home)
  - /mbti (MbtiMng) -> Outlet
    - 인덱스 (MbtiList)
    - /mbti/:mtType (MbtiDetail)
    - /mbti/new (MbtiForm)
    - /mbti/:mtType/edit (MbtiEdit)
    (NotFound)
*/
const mbtiRouter = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'mbti',
        element: <MbtiMng />,
        children: [
          {
            index: true,
            Component: MbtiList
          },
          {
            path: ':mtType',
            Component: MbtiDetail
          },
          {
            path: 'new',
            Component: MbtiForm
          },
          {
            path: ':mtType/edit',
            Component: MbtiEdit
          },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={mbtiRouter} />
)
