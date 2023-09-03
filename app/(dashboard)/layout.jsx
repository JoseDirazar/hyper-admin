import Navbar from "../../components/navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
