import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GradeCardsPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const semesters = [
    {
      id: '4th-semester',
      title: '4th Semester Results - BTCS',
      gradeCards: [
        { 
          id: 1, 
          title: '4th Semester Grade Card', 
          content: 'Grade card content for 4th Semester',
          pdfUrl: '/4th-sem.pdf',
          isPdf: true
        }
      ]
    },
    {
      id: '3rd-semester',
      title: '3rd Semester Results - BTCS',
      gradeCards: [
        { 
          id: 1, 
          title: '3rd Semester Grade Card', 
          content: 'Grade card content for 3rd Semester',
          pdfUrl: '/3rd-sem.pdf',
          isPdf: true
        }
      ]
    }
  ];

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      navigate('/signin');
      return;
    }
    setUsername(storedUsername);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/signin');
  };

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
    setShowCards(true);
  };

  const handleBackToList = () => {
    setShowCards(false);
    setSelectedSemester(null);
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
                item.page === 'grade-cards' ? 'bg-gray-700' : ''
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
          {!showCards ? (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Grade Cards</h2>
              
              <div className="grid gap-4 md:gap-6">
                {semesters.map((semester) => (
                  <div key={semester.id} className="bg-white rounded shadow">
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        {semester.title}
                      </h3>
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleSemesterSelect(semester)}
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded border border-blue-600 transition-colors"
                        >
                          View Grade Cards
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Grade Cards</h2>
              
              {/* Back Button */}
              <div className="mb-6">
                <button
                  onClick={handleBackToList}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  ← Back to All Grade Cards
                </button>
              </div>

              {/* Grade Cards Display */}
              <div className="bg-white rounded shadow">
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-6 underline">
                    {selectedSemester?.title}
                  </h3>

                  {/* Grade Cards List */}
                  {selectedSemester?.gradeCards.map((card) => (
                    <div key={card.id} className="mb-6">
                      <h4 className="text-lg font-bold text-center text-gray-800 mb-4">
                        {card.title}
                      </h4>

                      {/* PDF Viewer */}
                      {card.isPdf ? (
                        <div className="w-full h-[800px] border border-gray-300 rounded">
                          <iframe
                            src={card.pdfUrl}
                            width="100%"
                            height="100%"
                            title={card.title}
                            className="rounded"
                          >
                            <p>Your browser does not support PDFs. 
                              <a href={card.pdfUrl} target="_blank" rel="noopener noreferrer">
                                Download the PDF
                              </a>
                            </p>
                          </iframe>
                        </div>
                      ) : (
                        <div className="text-center p-8 bg-gray-50 rounded">
                          <p className="text-gray-600 mb-4">{card.content}</p>
                          <p className="text-sm text-gray-500">Grade card content would be displayed here.</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default GradeCardsPage;
