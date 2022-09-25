import Navbar from "./Navbar";

export default function Layout({children}: any) {
  return (
    <>
      <Navbar />
      <div className="bg-purple-50 min-h-screen h-full p-5">
      {children}
      </div>
    </>
  );
}
