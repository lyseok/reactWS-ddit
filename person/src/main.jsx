import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PeopleList from './components/people/PeopleList.jsx'
import PeopleForm from './components/people/PeopleForm.jsx'
import People from './components/people/People.jsx'
import PeopleDetail from './components/people/PeopleDetail.jsx'
import PeopleEdit from './components/people/PeopleEdit.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <App />,
    children: [
      {
        path: '/people',
        Component: People,
        children: [
          {
            path: 'list',
            Component: PeopleList
          },
          {
            path: ':id',
            Component: PeopleDetail
          },
          {
            path: 'form',
            Component: PeopleForm
          },
          {
            path: 'edit',
            Component: PeopleEdit
          },
          
        ]
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
