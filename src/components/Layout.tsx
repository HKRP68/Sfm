import Link from "next/link";
const nav = ["dashboard","students","classes","fee-structure","student-fee-settings","payments","receipts","dues-report","class-report","messages","settings"];
export default function Layout({children}:{children:React.ReactNode}){
 return <div className="min-h-screen md:grid md:grid-cols-[240px_1fr]"><aside className="bg-slate-900 text-white p-3 md:p-4 sticky top-0"><h1 className="font-bold">ST THOMAS ACADEMY</h1><nav className="grid grid-cols-3 md:grid-cols-1 gap-2 mt-3 text-sm">{nav.map(n=><Link key={n} className="bg-slate-800 rounded p-2" href={`/${n}`}>{n}</Link>)}</nav></aside><main className="p-3 md:p-6">{children}</main></div>
}
