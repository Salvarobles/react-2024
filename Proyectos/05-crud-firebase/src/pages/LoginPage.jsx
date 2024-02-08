const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-graviant-to-b form-gray-200 to-gray-500">
      <div className="flex items-center justify-between mx-10">
        <div className="flex flex-col justify-center items-start h-1/2">
          <h1 className="text-6xl font-bold text-gray-800 mt-10 text-center">
            React con Firebase
          </h1>
          <p className="text-lg text-gray-600 ml-8 mt-10">Proyecto DEWC</p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <video id="video-firebase" className="w-1/2" autoPlay loop muted>
            <source
              src="https://firebase.google.com/static/images/homepage/Firebase_Hero_Loop.webm?hl=es-419"
              type="video/*"
            />
          </video>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-1/4 bg-gray py-12 px-4 rounded-lg shadow-lg">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold">
                Iniciar Sesion
              </h2>
            </div>
            <div>
              <form>
                <div className="rounded-md shadow-sm ">
                  <button className="relative w-full flex justify-centerpy-2 px-4 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus">
                    Iniciar Sesion con Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
