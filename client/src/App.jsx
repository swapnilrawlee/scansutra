// App.js
import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const App = () => {
  const [qrValue, setQrValue] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-4 gap-6">
      <h1 className="text-4xl font-bold text-gray-800">ScanSutra </h1>

      <input
        type="text"
        value={qrValue}
        onChange={(e) => setQrValue(e.target.value)}
        placeholder="Enter text or URL"
        className="px-4 py-3 w-full max-w-md text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-4">
        <button
          onClick={() => setQrValue('')}
          className="px-5 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition"
        >
          Clear
        </button>

        <button
          onClick={() => setQrValue('https://714tech.info')}
          className="px-5 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition"
        >
          Example QR
        </button>
      </div>

      {/* Show QR only if value is not empty */}
      {qrValue.trim() !== '' && (
        <div className="bg-white p-4 rounded-xl shadow-md mt-4">
          <QRCode value={qrValue} size={180} />
        </div>
      )}
    </div>
  );
};

export default App;
