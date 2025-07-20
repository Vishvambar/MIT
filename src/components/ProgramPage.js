import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProgramPage = () => {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState('2');
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

  // Sample program data based on the program.html
  const programData = {
    '1': {
      semester: 'BTCSSEM1 / First Semester / 2023',
      noData: true
    },
    '2': {
      semester: 'BTCSSEM3 / Third Semester / 2023',
      subjects: [
        {
          category: 'Any one subject(s) required',
          courses: [
            { code: '23CSE1011', name: 'Economics for Engineers', credits: 2, maxCA: 50, maxPR: '', maxJR: '', maxETE: '' },
            { code: '23ASH1109', name: 'Mathematical Foundation for Computing - III', credits: 3, maxCA: 50, maxPR: '', maxJR: '', maxETE: 50 }
          ]
        },
        {
          category: 'Any one subject(s) required',
          courses: [
            { code: '23CSE1007', name: 'Processor Architecture and Interfacing', credits: 3, maxCA: 50, maxPR: '', maxJR: '', maxETE: 50 },
            { code: '23CSE2001', name: 'Microcontroller Application', credits: 3, maxCA: 50, maxPR: '', maxJR: '', maxETE: 50 }
          ]
        },
        {
          category: 'All subjects are mandatory',
          courses: [
            { code: '23CSE1010', name: 'Project Based Learning - I', credits: 2, maxCA: 100, maxPR: '', maxJR: '', maxETE: '' }
          ]
        },
        {
          category: 'Any one subject(s) required',
          courses: [
            { code: '23CSE1012', name: 'Python Essentials', credits: 3, maxCA: 50, maxPR: '', maxJR: '', maxETE: 50 },
            { code: '23CSE1013', name: 'Object Oriented Programming', credits: 3, maxCA: 50, maxPR: '', maxJR: '', maxETE: 50 }
          ]
        },
        {
          category: 'All subjects are mandatory',
          courses: [
            { code: '23CSE2002', name: 'Data Structures and Algorithms', credits: 4, maxCA: 50, maxPR: '', maxJR: '', maxETE: 50 },
            { code: '23CSE2003', name: 'Database Management Systems', credits: 3, maxCA: 50, maxPR: 50, maxJR: '', maxETE: '' }
          ]
        }
      ]
    },
    '3': {
      semester: 'BTCSSEM5 / Fifth Semester / 2024',
      noData: true
    },
    '4': {
      semester: 'BTCSSEM7 / Seventh Semester / 2024',
      noData: true
    }
  };



  const currentData = programData[activeYear];

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
                  item.page === 'program' ? 'bg-gray-700' : ''
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
              <h1 className="text-lg font-semibold text-gray-800">Program</h1>
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
            <div className="max-w-7xl mx-auto">
              {/* Year Tabs */}
              <div className="mb-4 md:mb-6">
                <ul className="flex border-b overflow-x-auto">
                  {['1', '2', '3', '4'].map((year) => (
                    <li key={year} className="mr-1 flex-shrink-0">
                      <button
                        onClick={() => setActiveYear(year)}
                        className={`inline-block px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-t-lg transition-colors ${
                          activeYear === year
                            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                        }`}
                      >
                        {year === '1' ? '1st Year' : year === '2' ? '2nd Year' : year === '3' ? '3rd Year' : '4th Year'}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Table */}
              {currentData && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {currentData.noData ? (
                    /* No Data Available */
                    <div className="p-12 text-center">
                      <div className="mb-4">
                        <i className="fas fa-info-circle text-gray-400 text-4xl"></i>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        SEMESTER DATA NOT AVAILABLE
                      </h3>
                      <p className="text-gray-500">
                        Course information for this semester is not currently available.
                      </p>
                    </div>
                  ) : (
                    /* Course Data Table */
                    <table className="w-full border-collapse">
                      {/* Header Row */}
                      <tr className="bg-gray-50">
                        <td 
                          colSpan="7" 
                          className="px-5 py-4 text-lg font-semibold text-gray-800 border-b"
                        >
                          <div className="flex justify-between items-center">
                            <span>{currentData.semester}</span>
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="fas fa-info-circle"></i>
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Table Headers */}
                      <tr className="bg-gray-50 text-xs uppercase text-gray-600">
                        <th className="px-5 py-3 text-left font-medium w-1/6">Subject Code</th>
                        <th className="px-5 py-3 text-left font-medium">Subject Name</th>
                        <th className="px-5 py-3 text-center font-medium w-16">Credits</th>
                        <th className="px-5 py-3 text-center font-medium w-16">Max CA</th>
                        <th className="px-5 py-3 text-center font-medium w-16">Max PR</th>
                        <th className="px-5 py-3 text-center font-medium w-16">Max JR</th>
                        <th className="px-5 py-3 text-center font-medium w-16">Max ETE</th>
                      </tr>

                      {/* Course Data */}
                      {currentData.subjects.map((subject, subjectIndex) => (
                        <React.Fragment key={subjectIndex}>
                          {/* Category Header */}
                          <tr>
                            <td 
                              colSpan="7" 
                              className="px-5 py-4 text-blue-600 bg-blue-50 border-t border-b"
                            >
                              <i className="fas fa-info-circle mr-2"></i>
                              {subject.category}
                            </td>
                          </tr>

                          {/* Courses in this category */}
                          {subject.courses.map((course, courseIndex) => (
                            <tr key={courseIndex} className="border-b hover:bg-gray-50">
                              <td className="px-5 py-3 text-sm">{course.code}</td>
                              <td className="px-5 py-3 text-sm">{course.name}</td>
                              <td className="px-5 py-3 text-sm text-center">{course.credits}</td>
                              <td className="px-5 py-3 text-sm text-center">{course.maxCA}</td>
                              <td className="px-5 py-3 text-sm text-center">{course.maxPR}</td>
                              <td className="px-5 py-3 text-sm text-center">{course.maxJR}</td>
                              <td className="px-5 py-3 text-sm text-center">{course.maxETE}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </table>
                  )}
                </div>
              )}
            </div>
          </section>
        </main>

      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
};

export default ProgramPage;
