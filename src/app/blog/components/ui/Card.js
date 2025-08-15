export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-gray-50 backdrop-blur-xl border border-[#CFADFF]/20 rounded-xl overflow-hidden hover:border-[#CFADFF]/40 transition-all duration-300 ${className}`}>
          {title && (
            <div className="px-6 py-4 border-b border-[#CFADFF]/20">
              <h3 className="text-lg font-bold text-black">{title}</h3>
            </div>
          )}
          <div className="p-6">
            {children}
          </div>
        </div>
  );
}