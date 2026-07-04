export default function Foundation() {
  const milestones = [
    { year: '1990', title: 'WWW was born / ARPANET shutdown' },
    { year: '1991', title: 'WWW was introduced to the public' },
  ];

  return (
    <div className="p-10">
      <h2 className="pt-20 text-center text-2xl font-bold mb-6 text-white">Gallery III - The Birth of the Public Web (1990-1991)</h2>
      
      <div className="flex items-center justify-center overflow-x-auto pb-6">
        {milestones.map((m, i) => (
          <div key={i} className="flex flex-col items-center flex-none">
            {/* Top Label */}
            <h3 className="font-bold text-center mb-2 w-90 text-white">{m.title}</h3>
            
            {/* Image Placeholder */}
            <div className="w-75 h-70 bg-gray-200 rounded-lg flex items-center justify-center border border-gray-300">
              Image {i + 1}
            </div>
            
            {/* Bottom Label (Year) */}
            <p className="bg-white mt-2 text-lg font-mono text-black rounded-xl px-10">{m.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}