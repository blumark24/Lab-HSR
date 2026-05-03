import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { authService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
export default function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const submit = async (e) => { e.preventDefault(); setLoading(true); const { error } = await authService.login(email, password); setLoading(false); if (error)
        return toast.error(error.message); toast.success('تم تسجيل الدخول'); nav('/'); };
    return _jsx("div", { className: 'min-h-screen grid place-items-center', children: _jsxs("form", { onSubmit: submit, className: 'bg-[#0A0E1A] p-6 rounded-2xl w-96 space-y-3', children: [_jsx("h1", { children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" }), _jsx("input", { className: 'w-full p-2 rounded bg-slate-900', value: email, onChange: e => setEmail(e.target.value), placeholder: '\u0627\u0644\u0628\u0631\u064A\u062F' }), _jsx("input", { type: 'password', className: 'w-full p-2 rounded bg-slate-900', value: password, onChange: e => setPassword(e.target.value), placeholder: '\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631' }), _jsx("button", { disabled: loading, className: 'w-full p-2 rounded bg-[#0066CC]', children: "\u062F\u062E\u0648\u0644" })] }) });
}
