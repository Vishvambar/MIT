import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Student';
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  // Results data based on the results.html structure
  const semesterResults = [
    {
      id: 'even-2024-2025',
      title: 'Even Semester End Examinations 2024-2025',
      semesters: [
        {
          name: 'BTCSSEM4 - Fourth Semester',
          pdfAvailable: true,
          pdfFileName: '4th-sem.pdf',
          subjects: [
            { code: 'CS401', name: 'Software Engineering', ca: 45, ca2: 42, pr: 85, mte: 40, ss: 38, ete: 75, rem: '', rev: '', total: 325, grade: 'A', credits: 4 },
            { code: 'CS402', name: 'Database Management Systems', ca: 48, ca2: 46, pr: 90, mte: 42, ss: 40, ete: 78, rem: '', rev: '', total: 344, grade: 'A+', credits: 4 },
            { code: 'CS403', name: 'Computer Networks', ca: 44, ca2: 41, pr: 80, mte: 38, ss: 36, ete: 70, rem: '', rev: '', total: 309, grade: 'B+', credits: 3 },
            { code: 'CS404', name: 'Operating Systems', ca: 47, ca2: 45, pr: 88, mte: 41, ss: 39, ete: 76, rem: '', rev: '', total: 336, grade: 'A', credits: 4 },
            { code: 'CS405', name: 'Web Technologies', ca: 49, ca2: 48, pr: 92, mte: 44, ss: 42, ete: 80, rem: '', rev: '', total: 355, grade: 'A+', credits: 3 }
          ]
        },
        {
          name: 'BTCSSEM3 - Third Semester',
          pdfAvailable: true,
          pdfFileName: '3rd-sem.pdf',
          subjects: [
            { code: 'CS301', name: 'Object Oriented Programming', ca: 46, ca2: 44, pr: 88, mte: 41, ss: 39, ete: 74, rem: '', rev: '', total: 332, grade: 'A', credits: 4 },
            { code: 'CS302', name: 'Data Structures and Algorithms', ca: 48, ca2: 46, pr: 92, mte: 43, ss: 41, ete: 78, rem: '', rev: '', total: 348, grade: 'A+', credits: 4 },
            { code: 'CS303', name: 'Computer Organization', ca: 42, ca2: 40, pr: 85, mte: 38, ss: 36, ete: 72, rem: '', rev: '', total: 313, grade: 'B+', credits: 3 },
            { code: 'CS304', name: 'Discrete Mathematics', ca: 44, ca2: 42, pr: '', mte: 40, ss: 38, ete: 75, rem: '', rev: '', total: 239, grade: 'A', credits: 3 },
            { code: 'CS305', name: 'Theory of Computation', ca: 47, ca2: 45, pr: 89, mte: 42, ss: 40, ete: 77, rem: '', rev: '', total: 340, grade: 'A+', credits: 4 }
          ]
        }
      ]
    }
  ];

  // Legend data
  const legendData = [
    { id: 'CA', description: 'Continuous Assessment Mark' },
    { id: 'CA2', description: 'Continuous Assessment Mark 2' },
    { id: 'PR', description: 'Practical Marks' },
    { id: 'MTE', description: 'Mid Term Marks' },
    { id: 'SS', description: 'Sessional Marks' },
    { id: 'ETE', description: 'End Term Marks' },
    { id: 'REM', description: 'Remedial Marks' },
    { id: 'REV', description: 'Revaluation Marks' }
  ];

  const handleShowResults = (semesterName) => {
    const semester = semesterResults[0]; // For now, we only have one semester group
    const semesterData = semester.semesters.find(s => s.name === semesterName);
    setSelectedSemester({ ...semester, selectedSemesterData: semesterData });
    setShowResults(true);
  };

  const handleBackToList = () => {
    setShowResults(false);
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
                item.page === 'results' ? 'bg-gray-700' : ''
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
          {!showResults ? (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">All Results</h2>
              
              {/* Semester Results Cards */}
              {semesterResults.map((semesterGroup) => (
                <div key={semesterGroup.id} className="mb-6">
                  <div className="bg-white rounded shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-center text-gray-800 mb-6 underline">
                        {semesterGroup.title}
                      </h3>
                      
                      {semesterGroup.semesters.map((semester, index) => (
                        <div key={index} className="mb-4">
                          <p className="text-center font-bold text-gray-800 mb-2">
                            {semester.name}
                          </p>
                          <div className="text-center">
                            <button
                              onClick={() => handleShowResults(semester.name)}
                              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded border border-blue-600 transition-colors"
                            >
                              Show
                            </button>
                          </div>
                          {index < semesterGroup.semesters.length - 1 && (
                            <hr className="mt-4 border-gray-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Legend Card */}
              <div className="bg-white rounded shadow">
                <div className="border-b p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Legend</h3>
                </div>
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Id</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {legendData.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3">{item.id}</td>
                            <td className="border border-gray-300 p-3">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Results</h2>
              
              {/* Back Button */}
              <div className="mb-6">
                <button
                  onClick={handleBackToList}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  ← Back to All Results
                </button>
              </div>

              {/* Results Display */}
              <div className="bg-white rounded shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4 underline">
                    {selectedSemester?.title}
                  </h3>
                  <h4 className="text-lg font-bold text-center text-gray-800 mb-6">
                    {selectedSemester?.selectedSemesterData?.name}
                  </h4>

                  {/* PDF Viewer */}
                  {selectedSemester?.selectedSemesterData?.pdfAvailable ? (
                    <div className="w-full">
                      {/* PDF Download Button */}
                      <div className="mb-4 text-center">
                        <a 
                          href={`/${selectedSemester?.selectedSemesterData?.pdfFileName}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF Results
                        </a>
                      </div>
                      
                      {/* PDF Viewer */}
                      <div className="w-full h-[800px] border border-gray-300 rounded">
                        <iframe
                          src={`/${selectedSemester?.selectedSemesterData?.pdfFileName}#toolbar=1&navpanes=1&scrollbar=1`}
                          width="100%"
                          height="100%"
                          title={`${selectedSemester?.selectedSemesterData?.name} Results`}
                          className="rounded"
                          onError={(e) => {
                            console.error('PDF failed to load:', e);
                            e.target.style.display = 'none';
                            const fallback = e.target.nextElementSibling;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        >
                        </iframe>
                        
                        {/* Fallback message */}
                        <div className="hidden p-8 text-center bg-yellow-50 border border-yellow-200 rounded">
                          <div className="mb-4">
                            <svg className="w-12 h-12 mx-auto text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          </div>
                          <p className="text-yellow-800 font-medium mb-2">PDF viewer not supported in this browser</p>
                          <p className="text-yellow-700 mb-4">Please download the PDF to view your results.</p>
                          <a 
                            href={`/${selectedSemester?.selectedSemesterData?.pdfFileName}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
                          >
                            Download PDF Results
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-gray-50 rounded">
                      <p className="text-gray-600 mb-4">No PDF available for this semester.</p>
                      <p className="text-sm text-gray-500">Please contact the administration for results.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ResultsPage;
