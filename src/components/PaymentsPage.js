import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';

const PaymentsPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    
    setUsername('PARTH PATIL NISCHAL');
  }, [navigate]);

  const paymentsData = [
    {
      paymentId: '1745502043798857',
      createdOn: '2025/04/24 19:10:46',
      transactionDate: '24-04-2025 19:12:45',
      amount: 1100,
      status: 'Payment Received'
    },
    {
      paymentId: '1730915360100002',
      createdOn: '2024/11/06 23:19:21',
      transactionDate: '06-11-2024 23:19:33',
      amount: 1000,
      status: 'Payment Received'
    },
    {
      paymentId: '1726386193920670',
      createdOn: '2024/09/15 13:13:40',
      transactionDate: '15-09-2024 13:14:05',
      amount: 500,
      status: 'Payment Received'
    },
    {
      paymentId: '1721394794571017',
      createdOn: '2024/07/19 18:43:15',
      transactionDate: '19-07-2024 18:43:28',
      amount: 2000,
      status: 'Payment Received'
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
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
                item.page === 'payments' ? 'bg-gray-700' : ''
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
          {/* Breadcrumb */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="text-blue-600">Home</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-blue-600">Student</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-blue-600">Payments</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-blue-600">Actions</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm border">
            {/* Title with pagination info */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b bg-gray-50">
              <h1 className="text-lg font-medium text-gray-900">Payments</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <button 
                  onClick={() => handlePageChange(1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <ChevronFirst className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handlePageChange(totalPages)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  <ChevronLast className="w-4 h-4" />
                </button>
                <span className="ml-2">({currentPage} - {totalPages} of {totalPages})</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                      Payment Id
                    </th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                      Created On
                    </th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                      Transaction Date
                    </th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                      Amount (Rs.)
                    </th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                      Status
                    </th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paymentsData.map((payment, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900 border-r">
                        {payment.paymentId}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900 border-r">
                        {payment.createdOn}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900 border-r">
                        {payment.transactionDate}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-gray-900 border-r">
                        {payment.amount}
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm border-r">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          View
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentsPage;
