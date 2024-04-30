import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "layout";
import { lazy } from "react";

const DefaultGallery = lazy(
  () => import("./components/DefaultGallery/DefaultGallery")
);
const GridGallery = lazy(() => import("./components/GridGallery/GridGallery"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route
          element={<Layout />}
          path={import.meta.env.PROD ? "/Gallery/" : "/"}
        >
          <Route index element={<DefaultGallery />} />
          <Route path="grid" element={<GridGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
