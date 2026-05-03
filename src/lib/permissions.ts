import type { Role } from '../types';
export const canManageUsers=(r?:Role)=>['chairman','general_manager'].includes(r||'');
export const canDelete=(r?:Role)=>['chairman','general_manager','department_manager'].includes(r||'');
export const canReadFinance=(r?:Role)=>['chairman','board_member','general_manager'].includes(r||'');
