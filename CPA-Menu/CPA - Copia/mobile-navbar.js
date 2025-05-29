{class MobileNavbar { /*serve para criar o menu hamburguer*/
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu); /*seletor do ícone do menu hamburguer.*/
    this.navList = document.querySelector(navList); /*navList: seletor da lista com os links de navegação.*/
    this.navLinks = document.querySelectorAll(navLinks); /*navLinks: seletor de cada link individual da navegação.*/
    this.activeClass = "active"; /*activeClass: nome da classe CSS que será adicionada/retirada para abrir/fechar o menu.*/

    this.handleClick = this.handleClick.bind(this); /*Executado ao clicar no ícone do menu.*/
  }

  animateLinks() { /*Anima os links da navegação com um pequeno delay entre cada um, Se o link já está animado, remove a animação.*/
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() { /*Executado ao clicar no ícone do menu, Alterna (toggle) a classe "active" para abrir/fechar o menu.*/
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() { /*Adiciona o evento de clique ao botão do menu hamburguer.*/
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() { /*Verifica se o botão existe, Se existir, ativa o evento de clique.*/
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar( /*Aqui está instanciando (criando) a navbar mobile passando os seletores CSS dos elementos relevantes,
     e iniciando o funcionamento com .init().*/
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
    "liveServer.settings.port"; 5502
}


/*Essa classe:

Controla um menu hamburguer responsivo.

Alterna a visibilidade do menu ao clicar.

Anima os itens do menu.

É uma forma organizada e reutilizável de escrever esse comportamento.*/