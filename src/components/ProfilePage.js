import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  // Sample profile data based on the Student.html
  const profileData = {
    photo: "/parth-profile-photo.png",
    signature: "/parth-signature.png",
    username: "ADT23SOCB0699",
    fullNameRegional: "PARTH NISCHAL PATIL",
    fullName: "PARTH PATIL NISCHAL",
    gender: "Male",
    caste: "",
    email: "parthnp9090@gmail.com",
    mobile: "9075759090",
    enrollmentNumber: "ADT23SOCB0699",
    dateOfBirth: "2005-02-27",
    seatNumber: "",
    category: "",
    religion: "",
    nationality: "Indian",
    motherTongue: "",
    physicallyHandicapped: "No",
    aadharNumber: "",
    panNumber: "",
    passportNumber: "",
    drivingLicense: "",
    fatherName: "NISCHAL MURLIDHAR PATIL",
    motherName: "ANITA NISCHAL PATIL",
    fatherOccupation: "Business",
    motherOccupation: "Housewife",
    annualIncome: "",
    guardianName: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianMobile: "",
    permanentAddress: "R.C.PATEL NAGAR , NIMZARI NAKA , SHIRPUR , MAHARASHTRA",
    correspondenceAddress: "R.C.PATEL NAGAR , NIMZARI NAKA , SHIRPUR , MAHARASHTRA",
    city: "SHIRPUR",
    district: "SHIRPUR",
    state: "MAHARASHTRA",
    pincode: "425405",
    country: "INDIA"
  };

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
                  item.page === 'profile' ? 'bg-gray-700' : ''
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
              <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
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
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Main Profile Content */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="border-b p-4 md:p-6">
                      <h2 className="text-lg md:text-xl font-semibold text-gray-800">User Details</h2>
                    </div>
                    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                      {/* Photo */}
                      <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Photo (JPG)</label>
                        <div className="flex-1">
                          <img 
                            src={profileData.photo}
                            alt="Profile"
                            className="w-24 h-32 md:w-32 md:h-40 object-cover border rounded-md"
                          />
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Signature</label>
                        <div className="flex-1">
                          <img 
                            src={profileData.signature}
                            alt="Student Signature"
                            className="h-12 w-24 md:h-16 md:w-32 object-contain border rounded-md bg-white p-2"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Username */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Username <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.username}</span>
                        </div>
                      </div>

                      {/* Full Name in Regional Language */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Full Name In Regional Language</label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.fullNameRegional}</span>
                        </div>
                      </div>

                      {/* Full Name */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.fullName}</span>
                        </div>
                      </div>

                      {/* Gender */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.gender}</span>
                        </div>
                      </div>

                      {/* Caste */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Caste <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.caste || '-'}</span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900 break-all">{profileData.email}</span>
                        </div>
                      </div>

                      {/* Mobile */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Mobile <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.mobile}</span>
                        </div>
                      </div>

                      {/* Enrollment Number */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Enrollment Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.enrollmentNumber}</span>
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <label className="w-full md:w-32 text-sm text-gray-600 font-medium">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="flex-1">
                          <span className="text-gray-900">{profileData.dateOfBirth}</span>
                          <div className="text-xs text-gray-500 mt-1">YYYY-MM-DD e.g.: 2021-03-23</div>
                        </div>
                      </div>

                      {/* Additional fields */}
                      <div className="space-y-6 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                        
                        {/* Father's Name */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Father's Name</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.fatherName}</span>
                          </div>
                        </div>

                        {/* Mother's Name */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Mother's Name</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.motherName}</span>
                          </div>
                        </div>

                        {/* Nationality */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Nationality</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.nationality}</span>
                          </div>
                        </div>
                      </div>

                      {/* Address Information */}
                      <div className="space-y-6 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-gray-800">Address Information</h3>
                        
                        {/* Permanent Address */}
                        <div className="flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium md:pt-1">Permanent Address</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.permanentAddress}</span>
                          </div>
                        </div>

                        {/* City */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">City</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.city}</span>
                          </div>
                        </div>

                        {/* District */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">District</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.district}</span>
                          </div>
                        </div>

                        {/* State */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">State</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.state}</span>
                          </div>
                        </div>

                        {/* Pincode */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Pincode</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.pincode}</span>
                          </div>
                        </div>

                        {/* Country */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                          <label className="w-full md:w-32 text-sm text-gray-600 font-medium">Country</label>
                          <div className="flex-1">
                            <span className="text-gray-900">{profileData.country}</span>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                {/* Sidebar Information */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Student ID</div>
                        <div className="font-medium text-gray-900">{profileData.enrollmentNumber}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-medium text-gray-900 text-sm break-all">{profileData.email}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Mobile</div>
                        <div className="font-medium text-gray-900">{profileData.mobile}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Date of Birth</div>
                        <div className="font-medium text-gray-900">{profileData.dateOfBirth}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    </div>
  );
};

export default ProfilePage;
