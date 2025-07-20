import React from 'react';

const MobileResponsiveHeader = ({ 
  isSidebarOpen, 
  setIsSidebarOpen, 
  pageTitle, 
  username, 
  onLogout 
}) => {
  return (
    <header className="flex justify-between items-center h-16 px-4 md:px-6 bg-white border-b">
      <button 
        className="text-xl md:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden md:block">
        <h1 className="text-lg font-semibold text-gray-800">{pageTitle}</h1>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <span className="font-medium text-gray-700 text-sm md:text-base truncate max-w-32 md:max-w-none">
          {username || "PARTH PATIL NISCHAL"}
        </span>
        <button
          onClick={onLogout}
          className="text-sm text-red-600 hover:text-red-800 font-medium py-2 px-3 rounded hover:bg-red-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default MobileResponsiveHeader;
