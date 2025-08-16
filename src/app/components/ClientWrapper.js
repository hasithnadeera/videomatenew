'use client';

export default function ClientWrapper({ children }) {
  return (
    <div 
      style={{ 
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
}