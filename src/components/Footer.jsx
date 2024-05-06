const Footer = () => {
  return (
    <div className="p-3 -mb-3">
      <footer className="footer items-center text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © {new Date().getFullYear()}- All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-lg font-mono">Apu Sutra Dhar</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
