import { Link } from 'react-router-dom';

export function SubPageHeader() {
  return (
    <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C16 8.83656 8.83656 16 0 16C8.83656 16 16 23.1634 16 32C16 23.1634 23.1634 16 32 16C23.1634 16 16 8.83656 16 0Z" fill="#111"/>
            <path d="M24 8C24 12.4183 20.4183 16 16 16C20.4183 16 24 19.5817 24 24C24 19.5817 27.5817 16 32 16C27.5817 16 24 12.4183 24 8Z" fill="#111" opacity="0.8"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-gray-900">Quicka</span>
        </Link>
        <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
