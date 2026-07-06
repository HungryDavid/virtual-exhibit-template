import { useState } from "react";

import Birth1 from "../assets/Birth1.png";
import Birth2 from "../assets/Birth2.png";

export default function Birth() {
  const [selected, setSelected] = useState(null);

  const milestones = [
    {
      year: "1990",
      title: "WWW was Born / ARPANET Shutdown",
      img: Birth1,
      desc:
        "Tim Berners-Lee developed the World Wide Web at CERN by creating HTML, HTTP, URLs, and the first web browser. During the same year, ARPANET was officially shut down after its functions had already been replaced by the Internet."
    },
    {
      year: "1991",
      title: "WWW Introduced to the Public",
      img: Birth2,
      desc:
        "Tim Berners-Lee announced the World Wide Web to the public through the alt.hypertext newsgroup, allowing anyone connected to the Internet to create and browse web pages. This marked the beginning of the modern World Wide Web."
    }
  ];

  return (
    <>
      <div className="p-10">
        <h2 className="pt-20 text-center text-2xl font-bold mb-8 text-white">
          Gallery III - The Birth of the Public Web (1990–1991)
        </h2>

        <div className="flex justify-center gap-10">
          {milestones.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <h3 className="text-white font-bold mb-3 text-center w-72 h-16 flex items-center justify-center">
                {m.title}
              </h3>

              <div
                onClick={() => setSelected(m)}
                className="cursor-pointer w-72 h-72 rounded-lg border border-gray-500 overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={m.img.src}
                  alt={m.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="bg-white text-black rounded-full px-8 py-1 mt-3 text-lg">
                {m.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-[700px] max-w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">
              {selected.title}
            </h2>

            <div className="mb-4">
              <img
                src={selected.img.src}
                alt={selected.title}
                className="w-full max-h-[400px] object-contain rounded-lg"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              {selected.desc}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}