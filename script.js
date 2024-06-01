/*
Start
 */

        const btnAdvice = document.getElementById('btnAdvice');
        const adviceContent = document.getElementById('advice');
        const adviceNumber = document.getElementById('adviceNumber');
        let count ;
        

        window.onload = async ()=>{ 
             //Pour éviter la mise en cache automatique par certains navigateurs
            let i = Math.floor(Math.random()*9999);
            const linkURL = "https://api.adviceslip.com/advice?version="+ i ;
           
            const reponse = await fetch(linkURL);
            const anAdvice = await reponse.json();
        adviceContent.innerText = '"'+ anAdvice.slip.advice +'"';
        adviceNumber.innerText = count.toString().padStart(3, '0');

        }

        function adviceGenerator()
        {
            
            count = 1 ;
            btnAdvice.addEventListener('click' ,async ()=>

            {
                     
                adviceContent.innerHTML ='<img src="images/loading-7528_128.gif" alt="load-img">'
                let i = Math.floor(Math.random()*999);
                const linkURL = "https://api.adviceslip.com/advice?version="+ i ;
                const reponse = await fetch(linkURL);
                const anAdvice = await reponse.json();
                count++;
                adviceContent.innerText = '"'+ anAdvice.slip.advice +'"';
                adviceNumber.innerText = count.toString().padStart(3, '0');
            })

        
            
        }

        

        adviceGenerator();
