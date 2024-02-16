import '../../globals.css'
// import Sidebar from '../../../components/sidebar/sidebar-pegawai/page'
import Sidebar from '../../../components/sidebar/sidebar-pegawai/page'

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" grid grid-cols-[20%_1fr] bg-slate-50">
          <Sidebar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
