import { supabase } from "@/lib/supabase";
export default async function Dashboard(){
  const [{count:students},{data:today},{data:recent}] = await Promise.all([
    supabase.from('students').select('*',{count:'exact',head:true}),
    supabase.from('daily_collection_summary').select('*').eq('collection_date',new Date().toISOString().slice(0,10)).maybeSingle(),
    supabase.from('payments').select('id,amount,payment_date,receipt_no,students(student_name)').order('payment_date',{ascending:false}).limit(10)
  ]);
  return <div className='space-y-4'><h2 className='text-xl font-bold'>Dashboard</h2>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
      <div className='card'><p>Total Students</p><p className='text-2xl font-bold'>{students||0}</p></div>
      <div className='card'><p>Today Collection</p><p className='text-2xl font-bold'>₹{today?.total_collection||0}</p></div>
    </div>
    <div className='card'><h3 className='font-semibold mb-2'>Recent Payments</h3>{recent?.map((r:any)=><div key={r.id} className='border-b py-2 text-sm'>{r.receipt_no} - {r.students?.student_name} - ₹{r.amount}</div>)}</div>
  </div>
}
