import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-900 text-slate-400 font-sans text-xs tracking-wider border-t border-slate-800">
      <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-slate-900 font-serif italic text-sm">A</div>
        Alumni Portal
      </div>
      <div className="flex flex-wrap justify-center gap-8 font-medium">
        <Link className="hover:text-white transition-colors" href="#">Archives</Link>
        <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
        <Link className="hover:text-white transition-colors" href="#">Contact Support</Link>
        <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
      </div>
      <div className="text-slate-500 text-center md:text-right uppercase">
        © 2024 ALUMNI PORTAL. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
