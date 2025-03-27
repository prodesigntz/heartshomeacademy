// authMiddleware.js
import { NextResponse } from 'next/server';
import { hasRole, hasPermission } from '@/firebase/authMiddleware';

// Middleware to protect API routes
export function withApiAuth(handler, requiredRole, requiredPermission) {
  return async function (req) {
    try {
      const authHeader = req.headers.get('Authorization');
      if (!authHeader?.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const token = authHeader.split(' ')[1];
      if (!token) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }

      // Verify token and get user data
      const decodedToken = await admin.auth().verifyIdToken(token);
      if (!decodedToken) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
      }

      // Check role-based access
      if (requiredRole && !hasRole(decodedToken.role, requiredRole)) {
        return NextResponse.json({ error: 'Insufficient role' }, { status: 403 });
      }

      // Check permission-based access
      if (requiredPermission && !hasPermission(decodedToken.role, requiredPermission)) {
        return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
      }

      // Add user data to request
      req.user = decodedToken;
      
      // Call the handler
      return handler(req);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  };
}

// Example usage:
/*
export async function GET(req) {
  return withApiAuth(
    async (req) => {
      // Your protected API logic here
      return NextResponse.json({ data: 'Protected data' });
    },
    ROLES.ADMIN, // Required role
    'manage_users' // Required permission
  )(req);
}
*/