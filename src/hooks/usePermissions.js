import { canManageUsers, canDelete, canReadFinance } from '../lib/permissions';
export const usePermissions = (role) => ({ canManageUsers: canManageUsers(role), canDelete: canDelete(role), canReadFinance: canReadFinance(role) });
