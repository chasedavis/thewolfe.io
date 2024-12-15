import LogoScroller from './LogoScroller';

const PressBanner = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative w-full overflow-hidden">
        <div
          className="w-full px-8"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <LogoScroller />
        </div>
      </div>
    </div>
  );
};

export default PressBanner;