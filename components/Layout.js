// components/Layout.js
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
