import { Cloud, Code2, LaptopMinimal, Server, Settings } from "lucide-react";

function TechnologyOrbit() {
  return (
    <div className="technology-orbit" aria-label="Full Stack Developer">
      <div className="technology-orbit-ring technology-orbit-ring-outer" />
      <div className="technology-orbit-ring technology-orbit-ring-inner" />
      <span className="technology-orbit-dot technology-orbit-dot-top" />
      <span className="technology-orbit-dot technology-orbit-dot-right" />
      <span className="technology-orbit-dot technology-orbit-dot-bottom" />
      <span className="technology-orbit-dot technology-orbit-dot-left" />

      <span className="technology-orbit-bubble technology-orbit-bubble-laptop"><LaptopMinimal size={28} /></span>
      <span className="technology-orbit-bubble technology-orbit-bubble-server"><Server size={25} /></span>
      <span className="technology-orbit-bubble technology-orbit-bubble-cloud"><Cloud size={27} /></span>
      <span className="technology-orbit-bubble technology-orbit-bubble-settings"><Settings size={27} /></span>

      <div className="technology-orbit-core">
        <strong>Full Stack<br />Developer</strong>
        <Code2 size={29} />
      </div>
    </div>
  );
}

export default TechnologyOrbit;
