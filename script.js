 let tentativas = 0;
        const btnNao = document.getElementById('btnNao');
        
        function openLetter() {
            // Esconde a página da carta
            document.getElementById('letter-page').style.display = 'none';
            
            // Mostra a página da pergunta
            document.getElementById('question-page').style.display = 'block';
        }
        
        function getRandomPosition() {
            const container = document.querySelector('.buttons-container');
            const containerRect = container.getBoundingClientRect();
            const btnRect = btnNao.getBoundingClientRect();
            
            // Área disponível para o botão se mover
            const maxX = window.innerWidth - btnRect.width - 40;
            const maxY = window.innerHeight - btnRect.height - 40;
            
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            
            return { x, y };
        }
        
        function fugirBotao() {
            tentativas++;
            const pos = getRandomPosition();
            
            btnNao.style.position = 'fixed';
            btnNao.style.left = pos.x + 'px';
            btnNao.style.top = pos.y + 'px';
            btnNao.style.zIndex = '1000';
            
            // Muda o texto do botão conforme as tentativas
            const textos = ['Não', 'Tem certeza?', 'Pensa bem...', 'Não mesmo?', 'Última chance!', 'Impossível!', 'De jeito nenhum!', 'Sério mesmo?', 'Repense isso...', 'Nem pensar!', 'Não insista!', 'De forma alguma!', 'Você está brincando?', 'Está fora de questão!', 'Não rola!', 'Não dá pra aceitar!', 'Não é uma boa ideia.', 'Acho que não vai rolar.', 'Não, de jeito nenhum!'];
            if (tentativas < textos.length) {
                btnNao.textContent = textos[tentativas];
            }
            
            // Adiciona uma pequena animação
            btnNao.style.transform = 'scale(0.8)';
            setTimeout(() => {
                btnNao.style.transform = 'scale(1)';
            }, 150);
        }
        
        function clickSim() {
            // Esconde a página da pergunta
            document.getElementById('question-page').style.display = 'none';
            
            // Mostra o gif intermediário diretamente
            document.getElementById('intermediate-page').style.display = 'block';
            
            // Após 3 segundos, mostra a página final
            setTimeout(() => {
                document.getElementById('intermediate-page').style.display = 'none';
                document.getElementById('response-page').style.display = 'block';
                
                // Cria corações caindo
                criarCoracoes();
                
                // Muda o fundo para algo mais romântico
                document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)';
            }, 3000);
        }
        
        function criarCoracoes() {
            const heartsContainer = document.getElementById('hearts');
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart';
                    heart.textContent = '💖';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 2 + 's';
                    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    
                    heartsContainer.appendChild(heart);
                    
                    // Remove o coração após a animação
                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 5000);
                }, i * 200);
            }
        }
        
        // Previne o clique no botão "Não"
        btnNao.addEventListener('click', function(e) {
            e.preventDefault();
            fugirBotao();
        });
        
        // Adiciona evento de toque para dispositivos móveis
        btnNao.addEventListener('touchstart', function(e) {
            e.preventDefault();
            fugirBotao();
        });

       (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'980e3d4d31dfb54f',t:'MTc1ODE3MTIwNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();