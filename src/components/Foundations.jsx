export default function Foundation({ setCurrentView }) {
  const milestones = [
    { year: '1958', title: 'DARPA founded' },
    { year: '1965', title: 'First Wide-Area Network Experiment' },
    { year: '1969', title: 'First ARPANET message' },
    { year: '1971', title: 'The first Email' },
  ];

  return (
    <div className="p-10">
      <h2 className="pt-20 text-center text-2xl font-bold mb-6 text-white">Gallery I - Origins (1958-1971)</h2>
      
      <div className="flex items-center justify-center gap-10 overflow-x-auto pb-6">
        {milestones.map((m, i) => (
          <div key={i} className="flex flex-col items-center flex-none">
            {/* Top Label */}
            <h3 className="font-bold text-center mb-2 w-70 text-white">{m.title}</h3>
            
            {/* Image Placeholder */}
            <div 
              onClick={() => {
                if (i === 0) setCurrentView('darpa');
                else if (i === 1) setCurrentView('wideArea');
                else if (i === 2) setCurrentView('arpanet');
                else {setCurrentView('email');} 
              }}
              className="w-75 h-70 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300 cursor-pointer hover:bg-gray-300 transition-colors"
            > Image {i + 1}
            </div>

            {/* Bottom Label (Year) */}
            <p className="bg-white mt-2 text-lg font-mono text-black rounded-xl px-10">{m.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}