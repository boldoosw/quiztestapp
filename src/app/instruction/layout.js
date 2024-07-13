import TopicNavbar from "@/components/TopicNavbar";

export default function RootLayout({ children }) {
  return (
    <main className="w-full">
      <div className="max-w-3xl mx-auto p-4">
        <TopicNavbar />
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
