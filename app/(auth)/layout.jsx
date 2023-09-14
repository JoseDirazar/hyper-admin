export default function AuthLayout({
  children,
}) {
  return (
    <div className="flex items-center justify-center h-full w-full bg-purple-200">
      {children}
    </div>
  );
};
