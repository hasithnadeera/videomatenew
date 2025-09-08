import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#1a202c',
      color: 'white',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>404 - Page Not Found</h1>
      <p style={{ marginTop: '1rem' }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{ marginTop: '2rem', color: '#9f7aea', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}