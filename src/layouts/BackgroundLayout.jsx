import ParticleBackground from "../component/ParticleBackground";
const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="relative z-10 w-full bg-transparent">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
