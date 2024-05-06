const TechOrbit = () => {
  return (
    <div>
      <div
        className="partners-intro--thumb aos-init aos-animate"
        style={{
          backgroundImage:
            'url("https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/bg/partners-circle.png")',
        }}
      >
        <div className="partners-intro--partners">
          <div className="partners-intro--partners-item -pos-1">
            <img alt="logo" src="/mongo.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-2">
            <img alt="logo" src="/nextjs.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-3">
            <img alt="logo" src="/ts.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-4">
            <img alt="logo" src="/redux.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-5">
            <img alt="logo" src="/react.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-6">
            <img alt="logo" src="/node.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-7">
            <img alt="logo" src="/express.svg" />
          </div>
          <div className="partners-intro--partners-item -pos-8">
            <img alt="logo" src="/tailwind.svg" />
          </div>
        </div>
        <div className="partners-intro--logo">
          <img className="rounded-full " alt="logo" src="/cartoon.jpg" />
        </div>
      </div>
    </div>
  );
};

export default TechOrbit;
