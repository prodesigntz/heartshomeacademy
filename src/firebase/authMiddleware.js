// authMiddleware.js
import { onAuthStateChanged, getIdToken } from 'firebase/auth';
import firebase from './firebaseInit';

// Token refresh interval in milliseconds (15 minutes)
const TOKEN_REFRESH_INTERVAL = 15 * 60 * 1000;

// Role-based access levels
export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent',
  STAFF: 'staff'
};

// Role hierarchy and permissions
export const ROLE_HIERARCHY = {
  [ROLES.ADMIN]: ['all'],
  [ROLES.TEACHER]: ['view_students', 'manage_grades', 'manage_attendance', 'view_programs'],
  [ROLES.STUDENT]: ['view_grades', 'view_attendance', 'view_programs'],
  [ROLES.PARENT]: ['view_child_grades', 'view_child_attendance', 'view_programs'],
  [ROLES.STAFF]: ['view_programs', 'manage_facilities']
};

// Check if user has required role
export const hasRole = (userRole, requiredRole) => {
  if (!userRole || !requiredRole) return false;
  if (userRole === ROLES.ADMIN) return true;
  return userRole === requiredRole;
};

// Check if user has required permission
export const hasPermission = (userRole, requiredPermission) => {
  if (!userRole || !requiredPermission) return false;
  if (userRole === ROLES.ADMIN) return true;
  return ROLE_HIERARCHY[userRole]?.includes(requiredPermission) || false;
};

// Setup token refresh mechanism
export const setupTokenRefresh = (callback) => {
  let refreshInterval;

  const refreshToken = async (user) => {
    if (!user) return;
    try {
      const token = await getIdToken(user, true);
      if (callback) callback(token);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
    if (user) {
      // Initial token refresh
      refreshToken(user);
      
      // Setup periodic token refresh
      refreshInterval = setInterval(() => refreshToken(user), TOKEN_REFRESH_INTERVAL);
    } else {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    }
  });

  return () => {
    unsubscribe();
    if (refreshInterval) {
      clearInterval(refreshInterval);
    }
  };
};

// Protected route middleware
export const withAuth = (WrappedComponent, requiredRole) => {
  return function AuthenticatedComponent(props) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const { authUser } = useAppContext();
    const router = useRouter();

    useEffect(() => {
      if (!authUser) {
        router.push('/login');
        return;
      }

      if (requiredRole && !hasRole(authUser.role, requiredRole)) {
        router.push('/unauthorized');
        return;
      }

      setIsAuthorized(true);
    }, [authUser, router]);

    if (!isAuthorized) {
      return null; // or loading component
    }

    return <WrappedComponent {...props} />;
  };
};