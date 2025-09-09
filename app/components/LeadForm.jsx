"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LeadForm(){
  const router = useRouter();
  const [max, setMax] = useState(750000);
  function onSubmit(e){ e.preventDefault(); router.push('/thank-you'); }
  return (
    <form onSubmit={onSubmit} className="card" style={{padding:16}} id="getlist">
      <div style={{fontWeight:800, fontSize:18, marginBottom:6}}>Get your custom list</div>
      <div style={{color:"#9fb0c9", fontSize:13, marginBottom:12}}>We’ll email picks and text fast if something hot hits the market.</div>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))'}}>
        <div><label>First name</label><input className="input" required name="first_name"/></div>
        <div><label>Last name</label><input className="input" required name="last_name"/></div>
        <div><label>Email</label><input className="input" type="email" required name="email"/></div>
        <div><label>Mobile</label><input className="input" type="tel" required name="phone"/></div>
        <div><label>ZIP</label><input className="input" name="zip"/></div>
        <div><label>Max price: ${"{"+ "max.toLocaleString()" +"}"}</label><input className="input" type="range" min={150000} max={1500000} step={5000} value={max} onChange={e=>setMax(parseInt(e.target.value))}/></div>
      </div>
      <button className="btn btn-primary" style={{width:'100%', marginTop:12}}>Send My List</button>
    </form>
  );
}