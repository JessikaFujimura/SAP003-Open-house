import Button from '../components/button.js';
import Input from '../components/input.js';
import Card from '../components/card.js';
import Menu from '../components/menu.js';
import ListCard from '../components/listcard.js';

function Home() {
  const template = `
  <div class="template">
    <header class="header"><img class="logo" src="./Imagens/Logo.png"></header>
    <input type="checkbox" id="btn-menu"/>
    <label for="btn-menu">&#9776;</label>
    <nav class="menu">
      <ul>
      ${Menu({
        name: 'Sobre',
        link: About,
      })}
      ${Menu({
        name: 'Indique uma peça',
        link: Indicate,
      })}
      ${Menu({
        name: 'Contato',
        link: Contact,
      })}
      </ul> 
    </nav>
    <section>
      <h3 class="text-simple">Peças em destaque</h3>
      <div class="highlight">
      ${Card({
        class: 'card',
        name: 'Peça 1',
        img: './Imagens/Peça D1.jpg',
        price: 'R$ 15,00',
        classification: 'Livre',
        date: '29/11/2019',
      })}
      ${Card({
        class: 'card',
        name: 'Peça 2',
        img: './Imagens/Peça D2.jpeg',
        price: 'R$ 30,00',
        classification: 'Livre',
        date: '21/11/2019',
      })}
      ${Card({
        class: 'card',
        name: 'Peça 3',
        img: './Imagens/Peça D3.jpg',
        price: 'R$ 50,00',
        classification: 'Livre',
        date: '15/11/2019',
      })}
      </div>
    </section>
    <section>
    <h3 class="text-simple">Todas as peças</h3>
      <div class="search">
      ${Input({
      class: 'input ',
      placeholder: 'Pesquise aqui',
      type: 'text',
      })}
      ${Button({
        id: 'search',
        class:'',
        title: '🔎',
        onClick: Search,
      })}
      <select>
      <option value=''>localização</option>
      <option value='zs'>zona sul</option>
      <option value='zn'>zona norte</option>
      <option value='zo'>zona oeste</option>
      <option value='zl'>zona leste</option>
      <option value='center'>centro</option>
      </select>
      ${Input({
        class: 'data ',
        placeholder: '',
        type: 'date',
        })}
      <select>
      <option value=''>valor</option>
      <option value='free'>Gratuito</option>
      <option value='50'>Até R$50,00</option>
      <option value='100'>R$50,00 - R$ 100,00</option>
      <option value='+100'>Acima de R$100,00</option>
      </select>
      </div>
      <div class="all">
      ${ListCard({
        class: 'listcard',
        name: 'Peça 1',
        img: './Imagens/Peça D1.jpg',
        price: 'R$ 15,00',
        classification: 'Livre',
        date: '29/11/2019',
      })}
      ${ListCard({
        class: 'listcard',
        name: 'Peça 2',
        img: './Imagens/Peça D2.jpeg',
        price: 'R$ 30,00',
        classification: 'Livre',
        date: '21/11/2019',
      })}
      ${ListCard({
        class: 'listcard',
        name: 'Peça 3',
        img: './Imagens/Peça D3.jpg',
        price: 'R$ 50,00',
        classification: 'Livre',
        date: '15/11/2019',
      })}
      </div>
    </section>
  </div>
  `;
  location.hash = 'home';
  return template;
}

function Search() {
  console.log('pesquisar ok')
}

function About() {
  window.location.hash = 'about'
};

function Indicate() {
  window.location.hash = 'indicate'
};

function Contact() {
  window.location.hash = 'contact'
};



/* function loginEmail() {
  const email = document.querySelector('.email-Cards').value;
  const password = document.querySelector('.password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      location.hash = 'post'
    })
    .catch(function (error) {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        document.querySelector('.alert-message').textContent = 'Senha errada!.';
      } if (errorCode === 'auth/user-not-found') {
        document.querySelector('.alert-message').textContent = 'Usuário não encontrado.';
      } else {
        document.querySelector('.alert-message').textContent = 'Usuário não cadastrado.';
      }
    })
}

function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult()
}

function forgetPassword() {
  window.location.hash = 'forgot_password';
}

function HashRegister() {
  window.location.hash = 'register';
} */

export default Home;
