import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentServicesPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [selectedApplicationType, setSelectedApplicationType] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleCreateForm = () => {
    if (!selectedApplicationType) {
      alert("Please select application type before creating the form.");
      return;
    }
    alert("Form creation functionality would be implemented here.");
  };

  // Sample application data
  const applications = [
    {
      id: 1,
      username: "ADT23SOCB0699",
      applicationType: "Transcript",
      createdOn: "2024-01-10",
      formState: "Completed",
      step: "Final"
    },
    {
      id: 2,
      username: "ADT23SOCB0699",
      applicationType: "Percentage",
      createdOn: "2024-01-05",
      formState: "In Progress",
      step: "Step 2"
    }
  ];

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
                item.page === 'student-services' ? 'bg-gray-700' : ''
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
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-l-4 border-blue-500 p-4 md:p-6">
                <h2 className="text-xl font-semibold text-gray-800">Student Services</h2>
                <p className="text-gray-600 mt-2">
                  Apply for various student services including transcripts, certificates, and other academic documents.
                </p>
              </div>
            </div>

            {/* Create New Application Form */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800">Create New Application</h3>
              </div>
              <div className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Application Type *
                    </label>
                    <select
                      value={selectedApplicationType}
                      onChange={(e) => setSelectedApplicationType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">-- Please choose an option --</option>
                      <option value="Transcript">Transcript</option>
                      <option value="Certificate">Certificate</option>
                      <option value="Percentage">Percentage Certificate</option>
                      <option value="Migration">Migration Certificate</option>
                      <option value="Conduct">Conduct Certificate</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={handleCreateForm}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  >
                    Create Form
                  </button>
                </div>
              </div>
            </div>

            {/* Existing Applications */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="border-b p-4 md:p-6">
                <h3 className="text-lg font-semibold text-gray-800">Your Applications</h3>
              </div>
              <div className="p-4 md:p-6">
                {applications.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Username</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Application Type</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Created On</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Form State</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Step</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3">{app.username}</td>
                            <td className="border border-gray-300 p-3">{app.applicationType}</td>
                            <td className="border border-gray-300 p-3">{app.createdOn}</td>
                            <td className="border border-gray-300 p-3">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                app.formState === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {app.formState}
                              </span>
                            </td>
                            <td className="border border-gray-300 p-3">{app.step}</td>
                            <td className="border border-gray-300 p-3">
                              <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                              <button className="text-blue-600 hover:text-blue-800">Edit</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No applications found. Create your first application above.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentServicesPage;
