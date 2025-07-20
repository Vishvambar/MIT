import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const storedUsername = localStorage.getItem('username');
    
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    
    setUsername(storedUsername || 'PARTH PATIL NISCHAL');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-[#202B3C] text-white flex flex-col transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4">
          <img
            src="https://student.mitapps.in/site/static/images/mit.jpg"
            alt="MIT Logo"
            className="h-10 object-contain"
          />
          <button 
            className="md:hidden text-white hover:text-gray-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {[
            { name: "Dashboard", page: "dashboard" },
            { name: "Profile", page: "profile" },
            { name: "Program", page: "program" },
            { name: "Exam Forms", page: "exam-forms" },
            { name: "Grade Cards", page: "grade-cards" },
            { name: "Results", page: "results" },
            { name: "Redressal", page: "redressal" },
            { name: "Student Services", page: "student-services" },
            { name: "Payments", page: "payments" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                handleNavigation(item.page);
                setIsSidebarOpen(false);
              }}
              className={`block w-full text-left py-3 px-3 rounded hover:bg-gray-700 text-sm transition-colors touch-manipulation ${
                item.page === 'dashboard' ? 'bg-gray-700' : ''
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
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
            <h1 className="text-lg font-semibold text-gray-800">MIT Student Portal</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="font-medium text-gray-700 text-sm md:text-base truncate max-w-32 md:max-w-none">
              {username || "PARTH PATIL NISCHAL"}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-800 font-medium py-2 px-3 rounded hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Dashboard</h2>
          <div className="bg-white p-4 md:p-6 rounded shadow">
            <p className="mb-4">Dear Students,</p>
            <p className="mb-4">
              We are pleased to announce that MIT-ADT University, in collaboration with TrueCopy
              Credentials Pvt. Ltd., has launched a <strong>fully digital Electronic Transcript Delivery
              System for sending academic transcripts to international universities.</strong>
            </p>
            <p className="mb-4">
              This new system enables both current students and alumni to request and deliver
              transcripts to over 3,500 foreign universities and credential evaluation agencies
              worldwide – securely, efficiently, and entirely online, without the need to visit the
              University or send documents by post/courier.
            </p>
            <p className="mb-2 font-medium">Key Advantages:</p>
            <ul className="list-disc list-inside mb-4 text-sm space-y-1">
              <li>100% online – from request to delivery</li>
              <li>Fast, secure, and user-friendly</li>
              <li>Cost-effective and ideal for academic or professional applications abroad</li>
            </ul>
            <ul className="list-disc list-inside text-sm mb-4 space-y-2">
              <li>
                Apply Here: <a className="text-blue-600 underline hover:text-blue-800 break-all" href="https://mitadt.truecopy.in/v2/files/preloadrequest.tc" target="_blank" rel="noopener noreferrer">https://mitadt.truecopy.in/v2/files/preloadrequest.tc</a>
              </li>
              <li>
                For Instructions: <a className="text-blue-600 underline hover:text-blue-800 break-all" href="https://files.truecopy.in/mitadt/transcripthhelp.html" target="_blank" rel="noopener noreferrer">https://files.truecopy.in/mitadt/transcripthhelp.html</a>
              </li>
            </ul>
            <p className="text-sm">
              For any queries or assistance, please contact the TrueCopy support team at: <a href="mailto:support@truecopy.in" className="underline text-blue-600 hover:text-blue-800">support@truecopy.in</a>
            </p>
            <p className="mt-4 text-sm">
              This will now be the official process for all transcript submissions intended for
              international universities. We encourage all students and alumni to take full advantage
              of this facility for a faster and more reliable document submission experience.
            </p>
            <p className="mt-4 text-sm">
              Controller of Examinations<br />
              MIT-ADT University, Pune<br />
              <a className="text-blue-600 underline hover:text-blue-800" href="https://mituniversity.ac.in/examination" target="_blank" rel="noopener noreferrer">https://mituniversity.ac.in/examination</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
