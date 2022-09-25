import Navbar from "./Navbar";

export default function Layout({children}: any) {
  return (
    <>
      <Navbar />
      <div className="bg-purple-50 h-screen p-5">
      {children}
      </div>
    </>
  );
}
