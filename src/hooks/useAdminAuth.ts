import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAdminAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      router.push('/admin/signin');
    }
  }, [router]);

  const signOut = () => {
    // Remove tokens
    localStorage.removeItem('adminToken');
    document.cookie = 'adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // Redirect to home page
    window.location.href = '/';
  };

  return { signOut };
}; 