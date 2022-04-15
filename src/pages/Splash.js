import logo from "../images/logo.png";
function Splash() {
  return (
    <section className="Splash">
      <div className="container min-h-screen mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full text-center md:w-4/12">
            <img src={logo} alt="LuxSpace" className="mx-auto mb-8" />
            <p className="px-4 mb-16">
              Kami menyediakan furniture berkelas yang membuat ruangan terasa
              homey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Splash;
