import React, { useState } from 'react';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Iniciar Sesión y Registrarse
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSwitch = () => {
    setIsLogin(!isLogin); // Alternar entre el formulario de login y registro
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Lógica para iniciar sesión
      console.log('Iniciar sesión con:', { email, password });
    } else {
      // Lógica para registrarse
      if (password === confirmPassword) {
        console.log('Registrarse con:', { email, password });
      } else {
        alert('Las contraseñas no coinciden');
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirmar Contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm">
        {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
        <span
          onClick={handleFormSwitch}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
        </span>
      </p>
    </div>
  );
};

export default Account;
