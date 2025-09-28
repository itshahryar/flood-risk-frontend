// components/loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="h-12 w-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

