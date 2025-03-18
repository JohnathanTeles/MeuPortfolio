<<<<<<< HEAD
			function contatoSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#contato").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function portfolioSelecionado(event) {
			    event.preventDefault(); 
			    document.querySelector("#portfolio").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function skillsSelecionado(event) {
			    event.preventDefault(); 
			    document.querySelector("#skills").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function sobreSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#sobre").scrollIntoView({
			        behavior: "smooth" 
			    });
			}
			function homeSelecionado(event) {
			    event.preventDefault();
			    document.querySelector("#home").scrollIntoView({
			        behavior: "smooth" 
			    });
			}


        function redirectToWhatsApp() {
            let telefone = '5562995552510';  
			let mensagem = 'Olá, vi seu portfólio e gostaria de saber mais sobre suas habilidades e projetos. Vamos conversar!';

            let linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
            
            window.location.href = linkWhatsApp;
        }

=======
			function contatoSelecionado(event) {
			    event.preventDefault(); // Evita o comportamento padrão do link
			    document.querySelector("#contato").scrollIntoView({
			        behavior: "smooth"  // Rolagem suave
			    });
			}
			function portfolioSelecionado(event) {
			    event.preventDefault(); // Evita o comportamento padrão do link
			    document.querySelector("#portfolio").scrollIntoView({
			        behavior: "smooth"  // Rolagem suave
			    });
			}
			function skillsSelecionado(event) {
			    event.preventDefault(); // Evita o comportamento padrão do link
			    document.querySelector("#skills").scrollIntoView({
			        behavior: "smooth"  // Rolagem suave
			    });
			}
			function sobreSelecionado(event) {
			    event.preventDefault(); // Evita o comportamento padrão do link
			    document.querySelector("#sobre").scrollIntoView({
			        behavior: "smooth"  // Rolagem suave
			    });
			}
			function homeSelecionado(event) {
			    event.preventDefault(); // Evita o comportamento padrão do link
			    document.querySelector("#home").scrollIntoView({
			        behavior: "smooth"  // Rolagem suave
			    });
			}

        function redirectToWhatsApp() {
            let telefone = '5562995552510';  
			let mensagem = 'Olá, vi seu portfólio e gostaria de saber mais sobre suas habilidades e projetos. Vamos conversar!';

            let linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
            
            window.location.href = linkWhatsApp;
        }

>>>>>>> f6e20bf (projeto-completo)
