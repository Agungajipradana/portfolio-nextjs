import Navbar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from "next/router";
import { DarkModeContextProvider } from "@/context/DarkMode";
import { AppShellProps } from "@/types";

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  const is404Page = router.pathname === "/404";
  return (
    <>
      <DarkModeContextProvider>
        {!is404Page && <Navbar />}
        {children}
        {!is404Page && <Footer />}
      </DarkModeContextProvider>
    </>
  );
};

export default AppShell;
