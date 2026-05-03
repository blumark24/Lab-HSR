import { useEffect, useState } from 'react';import { authService } from '../services/auth.service';
export function useAuth(){const [loading,setLoading]=useState(true);const [profile,setProfile]=useState<any>(null);
useEffect(()=>{authService.profile().then(p=>setProfile(p)).finally(()=>setLoading(false)); const {data:{subscription}}=authService['session']&&({data:{subscription:{unsubscribe(){}}}} as any); return ()=>subscription?.unsubscribe?.();},[]);
return {loading,profile,setProfile};}
