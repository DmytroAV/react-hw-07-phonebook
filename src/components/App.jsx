import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const CreateContactPage = lazy(() =>
  import('../pages/CreateContactPage/CreateContactPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const EditContactModal = lazy(() =>
  import('./EditContactModal/EditContactModal')
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" />} />
          <Route path="create" element={<CreateContactPage />} />
          <Route path="contacts/*" element={<ContactsPage />}>
            <Route path="edit/:contactId" element={<EditContactModal />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
