import "../../globals.css";
// import Sidebar from '../../../../components/sidebar/sidebar-pegawai/page'
import Sidebar from "../../../components/sidebar/sidebar-admin/page";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <>
    <Toaster richColors/>
      <div className=" grid grid-cols-[20%_1fr] bg-slate-50">
        <Sidebar />
        <div className="min-h-screen">{children}</div>
      </div>
    </>
  );
}
