export type Role='chairman'|'board_member'|'general_manager'|'department_manager'|'employee';
export interface Profile{ id:string; full_name:string; email:string; phone?:string; department?:string; role:Role; status:'active'|'inactive'; }
export interface Client{ id:string; name:string; phone?:string; email?:string; company?:string; status:string; notes?:string; created_at:string }
export interface Task{ id:string; title:string; status:string; priority:string; due_date?:string; assigned_to?:string; created_at:string }
export interface FinanceTransaction{ id:string; title:string; type:'income'|'expense'; amount:number; category?:string; created_at:string }
