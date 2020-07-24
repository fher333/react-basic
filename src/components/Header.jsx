import React from 'react';
import { connect } from 'react-redux'; // se encarga de conectar o  proveer todo el estado a nuestro componente
import { Link } from 'react-router-dom'; // para menejar los enlaces en donde nos vamoa a mover
import gravatar from '../utils/gravatar'; // es la funcion para ir a pedir las imagenes de avatar
import { logoutRequest } from '../actions'; // es el action que se encarga de cerrar sesion
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
//import { Object } from 'prop-types';

const Header = props=> {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () =>{
  props.logoutRequest({});
  }
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
        {
          hasUser ?
          <img src={gravatar(user.email)} alt={user.email} /> 
          :
          <img src={userIcon} alt='' />
        }
          <p>Perfil</p>
        </div>
        <ul>
        {
          hasUser ?
          
          <li><a href='/'>{user.name}</a></li> 
          : null
        }
        { 
          // validadcion si tenemos usuario o no
          hasUser ?
          <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li>
          :
          <li><Link to='/login'>Iniciar Sesión</Link></li>
        }
          
          
        </ul>
      </div>
    </header>
  );
}
// se encarga de mapear las propiedades q estamos requieriendo en nustro componente
const mapStateToProps = state => {
  return {
    user:state.user
  };
};
// se encarga de todas las acciones q debemos disparar o vamos a enviar al docuemnto
const mapDispatchToProps = {
  logoutRequest,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
