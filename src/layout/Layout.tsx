import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import style from "./Layout.module.scss";
import { Suspense } from "react";
import { Loading } from "components/Loader/Loading";

export const Layout = () => {
  return (
    <div className={style.container}>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
