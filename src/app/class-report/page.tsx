import { supabase } from "@/lib/supabase";
export default async function Page(){
 const {data}=await supabase.from('class_report').select('*').limit(20);
 return <div className='space-y-3'><h2 className='text-xl font-bold'>class-report</h2><div className='card text-sm overflow-auto'><pre>{JSON.stringify(data,null,2)}</pre></div></div>
}
