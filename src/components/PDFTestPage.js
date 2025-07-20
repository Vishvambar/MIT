import React from 'react';

const PDFTestPage = () => {
  const pdfFiles = [
    { name: '3rd Semester Results', file: '3rd-sem.pdf' },
    { name: '4th Semester Results', file: '4th-sem.pdf' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">PDF Test Page</h1>
        
        {pdfFiles.map((pdf) => (
          <div key={pdf.file} className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">{pdf.name}</h2>
            
            {/* Direct Links for Testing */}
            <div className="mb-4 space-x-4">
              <a 
                href={`/${pdf.file}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Open in New Tab
              </a>
              <a 
                href={`/${pdf.file}`} 
                download
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Download
              </a>
            </div>

            {/* Test with Object Tag */}
            <div className="border border-gray-300 rounded mb-4">
              <h3 className="bg-gray-100 p-2 text-sm font-medium">Object Tag Test:</h3>
              <object
                data={`/${pdf.file}`}
                type="application/pdf"
                width="100%"
                height="400"
              >
                <p>PDF cannot be displayed. <a href={`/${pdf.file}`} target="_blank" rel="noopener noreferrer">Click here to open it.</a></p>
              </object>
            </div>

            {/* Test with Iframe */}
            <div className="border border-gray-300 rounded">
              <h3 className="bg-gray-100 p-2 text-sm font-medium">Iframe Test:</h3>
              <iframe
                src={`/${pdf.file}`}
                width="100%"
                height="400"
                title={pdf.name}
              >
                <p>PDF cannot be displayed. <a href={`/${pdf.file}`} target="_blank" rel="noopener noreferrer">Click here to open it.</a></p>
              </iframe>
            </div>

            {/* URL Check */}
            <div className="mt-4 text-sm text-gray-600">
              <p>Expected URL: <code>{window.location.origin}/{pdf.file}</code></p>
            </div>
          </div>
        ))}
        
        {/* Fetch Test */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">URL Accessibility Test</h2>
          <div id="fetch-results">
            {pdfFiles.map((pdf) => (
              <div key={pdf.file} className="mb-2">
                <button 
                  onClick={async () => {
                    try {
                      const response = await fetch(`/${pdf.file}`);
                      const resultDiv = document.getElementById(`result-${pdf.file}`);
                      if (response.ok) {
                        resultDiv.innerHTML = `✅ ${pdf.file}: ${response.status} ${response.statusText} (${response.headers.get('content-type')})`;
                        resultDiv.className = 'text-green-600';
                      } else {
                        resultDiv.innerHTML = `❌ ${pdf.file}: ${response.status} ${response.statusText}`;
                        resultDiv.className = 'text-red-600';
                      }
                    } catch (error) {
                      const resultDiv = document.getElementById(`result-${pdf.file}`);
                      resultDiv.innerHTML = `❌ ${pdf.file}: ${error.message}`;
                      resultDiv.className = 'text-red-600';
                    }
                  }}
                  className="bg-purple-500 text-white px-3 py-1 rounded text-sm hover:bg-purple-600 mr-2"
                >
                  Test {pdf.file}
                </button>
                <span id={`result-${pdf.file}`} className="text-sm"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFTestPage;
