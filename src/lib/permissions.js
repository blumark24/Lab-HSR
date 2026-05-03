export const canManageUsers = (r) => ['chairman', 'general_manager'].includes(r || '');
export const canDelete = (r) => ['chairman', 'general_manager', 'department_manager'].includes(r || '');
export const canReadFinance = (r) => ['chairman', 'board_member', 'general_manager'].includes(r || '');
