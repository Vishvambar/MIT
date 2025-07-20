import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import ProgramPage from './components/ProgramPage';
import ExamFormsPage from './components/ExamFormsPage';
import GradeCardsPage from './components/GradeCardsPage';
import ResultsPage from './components/ResultsPage';
import RedressalPage from './components/RedressalPage';
import StudentServicesPage from './components/StudentServicesPage';
import PaymentsPage from './components/PaymentsPage';
import PDFTestPage from './components/PDFTestPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/exam-forms" element={<ExamFormsPage />} />
          <Route path="/grade-cards" element={<GradeCardsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/redressal" element={<RedressalPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/pdf-test" element={<PDFTestPage />} />
          <Route path="/" element={<Navigate to="/signin" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
