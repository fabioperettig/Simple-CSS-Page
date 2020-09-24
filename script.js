const btnscrollToEnglishMobile = document.querySelector('.enButtonMin')
    btnscrollToEnglishMobile.addEventListener('click', function (){
        window.scrollTo({
            top: 1680,
            behavior: 'smooth'
          });
    })

    const btnscrollToPortugueseMobile = document.querySelector('.ptButtonMin')
    btnscrollToPortugueseMobile.addEventListener('click', function (){
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
          });
    })

    const btnscrollToSpanishMobile = document.querySelector('.spButtonMin')
    btnscrollToSpanishMobile.addEventListener('click', function (){
        window.scrollTo({
            top: 2395,
            behavior: 'smooth'
          });
    })


    const btnscrollToEnglishScreen = document.querySelector('.enButtonMax')
    btnscrollToEnglishScreen.addEventListener('click', function (){
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
          });
    })

    const btnscrollToPortugueseScreen = document.querySelector('.ptButtonMax')
    btnscrollToPortugueseScreen.addEventListener('click', function (){
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
          });
    })

    const btnscrollToSpanishScreen = document.querySelector('.spButtonMax')
    btnscrollToSpanishScreen.addEventListener('click', function (){
        window.scrollTo({
            top: 1100,
            behavior: 'smooth'
          });
    })
