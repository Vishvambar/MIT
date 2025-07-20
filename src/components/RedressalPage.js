import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedressalPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    
    const storedUsername = localStorage.getItem('username');
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

  const handleCreateForm = () => {
    if (!selectedSeason || !selectedType) {
      alert("Please select both exam season and redressal type before creating the form.");
      return;
    }
    alert("Form creation functionality would be implemented here.");
  };

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
                item.page === 'redressal' ? 'bg-gray-700' : ''
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
              {username || "PATIL PARTH NISCHAL"}
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
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-l-4 border-blue-500 p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">
                      Redressal
                    </span>
                    <h2 className="text-lg font-semibold text-gray-800 underline">
                      Redressal Applications
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply for Redressal Card */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b p-6">
                <h3 className="text-lg font-semibold text-gray-800">Apply for Redressal</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Please select exam season, redressal type and then click on Create Form to apply for redressal.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="p-3 align-middle">
                          <select
                            value={selectedSeason}
                            onChange={(e) => setSelectedSeason(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Please select</option>
                            <option value="winter2023">Winter 2023</option>
                            <option value="summer2024">Summer 2024</option>
                            <option value="winter2024">Winter 2024</option>
                          </select>
                        </td>
                        <td className="p-3 align-middle">
                          <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Please select</option>
                            <option value="photocopy">Softcopy</option>
                            <option value="reval">Revaluation</option>
                          </select>
                        </td>
                        <td className="p-3 align-middle">
                          <button
                            onClick={handleCreateForm}
                            className="px-4 py-2 bg-white border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors font-medium"
                          >
                            Create Form
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Your Applications Card */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Your Applications</h3>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-gray-700" title="Refresh">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700" title="First">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5m6 10l-5-5 5-5" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700" title="Previous">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700" title="Next">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700" title="Last">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                      </svg>
                    </button>
                    <span className="text-sm font-semibold text-gray-700 ml-3">(1 - 1 of 1)</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Sr. No.</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Application ID</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Exam Season</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Redressal Type</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Applied Date</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">1</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">RED2024001</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Winter 2023</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">Revaluation</td>
                        <td className="border border-gray-200 px-4 py-3">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            Submitted
                          </span>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">2024-01-15</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Empty state message (commented out since we have sample data) */}
                {/*
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg">No applications found</div>
                  <div className="text-gray-400 text-sm mt-2">You haven't submitted any redressal applications yet.</div>
                </div>
                */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RedressalPage;
