export default function Foundation() {
  const milestones = [
    { year: '1973', title: 'International Expansion of ARPANET' },
    { year: '1974', title: 'First ISP is born & Proposal of TCP' },
    { year: '1983', title: 'TCP/IP is standardized' },
    { year: '1984', title: 'DNS introduced' },
    { year: '1985', title: 'First registered domain name' },
  ];

  return (
    <div className="p-10">
      <h2 className="pt-8 text-center text-2xl font-bold mb-10 text-white">
        Gallery II - Structure (1973-1985)
      </h2>

      {/* Main Container */}
      <div className="flex flex-col items-center gap-10">
        
        {/* Row 1: 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {milestones.slice(0, 3).map((m, i) => (
            <div key={i} className="flex flex-col items-center w-64">
              <h3 className="font-bold text-center mb-2 w-70 text-white">{m.title}</h3>
              <div className="w-75 h-70 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                Image {i + 1}
              </div>
              <p className="bg-white mt-4 text-lg font-mono text-black rounded-xl px-10">
                {m.year}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: 2 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {milestones.slice(3).map((m, i) => (
            <div key={i + 3} className="flex flex-col items-center w-64">
              <h3 className="font-bold text-center mb-2 w-70 text-white">{m.title}</h3>
              <div className="w-75 h-70 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
                Image {i + 4}
              </div>
              <p className="bg-white mt-4 text-lg font-mono text-black rounded-xl px-10">
                {m.year}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}