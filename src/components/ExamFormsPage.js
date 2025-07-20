import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamFormsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active_exams');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Authentication check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [navigate]);

  // Get username from localStorage
  const username = localStorage.getItem('username') || 'PARTH PATIL NISCHAL';

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  // Handle navigation
  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  // Sample exam forms data based on the Exams.html
  const examFormsData = {
    active_exams: {
      title: 'Active Exam Form',
      exams: [] // Empty - no active exams currently
    },
    '20242025': {
      title: '2024-25',
      exams: [
        {
          season: 'Winter Session 2024',
          subjectType: 'Regular Subjects',
          date: '2024-12-15 to 2024-12-30',
          status: 'Completed',
          action: 'View'
        },
        {
          season: 'Summer Session 2024',
          subjectType: 'Backlog Subjects',
          date: '2024-05-15 to 2024-05-30',
          status: 'Completed',
          action: 'View'
        }
      ]
    },
    '20232024': {
      title: '2023-24',
      exams: [
        {
          season: 'Winter Session 2023',
          subjectType: 'Regular Subjects',
          date: '2023-12-15 to 2023-12-30',
          status: 'Completed',
          action: 'View'
        }
      ]
    }
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
                item.page === 'exam-forms' ? 'bg-gray-700' : ''
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
          <h2 className="text-lg font-medium text-gray-800 mb-4">Exam Forms</h2>
          
          {/* Tabs */}
          <div className="bg-white rounded shadow">
            <div className="border-b">
              <nav className="flex space-x-8 px-4 md:px-6" aria-label="Tabs">
                {Object.entries(examFormsData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {data.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4 md:p-6">
              {examFormsData[activeTab].exams.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Season</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Subject Type</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Date</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Status</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examFormsData[activeTab].exams.map((exam, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-3">{exam.season}</td>
                          <td className="border border-gray-300 p-3">{exam.subjectType}</td>
                          <td className="border border-gray-300 p-3">{exam.date}</td>
                          <td className="border border-gray-300 p-3">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {exam.status}
                            </span>
                          </td>
                          <td className="border border-gray-300 p-3">
                            <button className="text-blue-600 hover:text-blue-800">{exam.action}</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">
                    {activeTab === 'active_exams' 
                      ? 'No active exam forms available at this time.' 
                      : `No exam forms found for ${examFormsData[activeTab].title}.`
                    }
                  </p>
                  {activeTab === 'active_exams' && (
                    <p className="text-sm text-gray-400">
                      Please check back later or contact the administration for more information.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExamFormsPage;
