import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { routes } from "./data/routes";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
