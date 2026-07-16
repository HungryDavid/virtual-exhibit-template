import Gallery from '../components/Gallery';
import arpa83 from '../assets/ARPA83.jpeg';
import first from '../assets/First.jpeg';
import expansion from '../assets/Expansion.jpg';
import tcp from '../assets/TCP.png';
import dns from '../assets/DNS.jpeg';

const milestones = [
  {
    year: '1973',
    title: 'International Expansion of ARPANET',
    img: expansion,
    desc: 'ARPANET made its first international connections, linking to University College London in England and the Royal Radar Establishment in Norway. This extended the network beyond U.S. borders for the first time, foreshadowing a globally connected internet.'
  },
  {
    year: '1974',
    title: 'First ISP is Born & Proposal of TCP',
    img: tcp,
    desc: 'Vint Cerf and Bob Kahn published a paper proposing the Transmission Control Protocol (TCP), a system for linking multiple, independently designed networks together reliably. The same year, Telenet launched as the first commercial packet-switched network, effectively becoming the first internet service provider.'
  },
  {
    year: '1983',
    title: 'TCP/IP is Standardized',
    img: arpa83,
    desc: 'ARPANET officially adopted TCP/IP as its standard communication protocol, replacing the older NCP. This "flag day" transition unified previously incompatible networks under a common language, creating the technical foundation the modern internet still runs on.'
  },
  {
    year: '1984',
    title: 'DNS Introduced',
    img: dns,
    desc: 'The Domain Name System (DNS) was introduced, allowing human-readable names like "example.com" to be automatically translated into numerical IP addresses. This replaced a manually maintained list of hostnames and made the growing network far easier to navigate.'
  },
  {
    year: '1985',
    title: 'First Registered Domain Name',
    img: first,
    desc: 'Symbolics.com, registered by computer manufacturer Symbolics Inc., became the first domain name ever registered under the new DNS system — a quiet milestone that opened the door to the domain-name landscape of the modern web.'
  },
];


export default function Structures() {
  return <Gallery title="Structure" subtitle="Gallery II · 1973–1985" milestones={milestones} accent="#14b8a6" />;
}