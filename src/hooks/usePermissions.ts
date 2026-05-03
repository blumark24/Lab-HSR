import { canManageUsers,canDelete,canReadFinance } from '../lib/permissions';
export const usePermissions=(role?:any)=>({canManageUsers:canManageUsers(role),canDelete:canDelete(role),canReadFinance:canReadFinance(role)});
