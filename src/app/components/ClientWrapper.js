'use client';

export default function ClientWrapper({ children }) {
  return (
    <div 
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ 
        userSelect: 'none', 
        minHeight: '100vh',
        WebkitUserDrag: 'none',
        KhtmlUserDrag: 'none',
        MozUserDrag: 'none',
        OUserDrag: 'none'
      }}
    >
      {children}
    </div>
  );
}