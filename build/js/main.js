window.onload = function() {
    var cards = document.querySelectorAll('.card__wrap');
    
    var textCard = {
        'duck' : 'Печень утки разварная с артишоками.',
        'fish' : 'Головы щучьи с чесноком.',
        'chicken' : 'Филе цыплят с трюфелями в бульоне.'
    }
    

    for (let i=0, n=cards.length; i<n; i++) {
        
        let disable = cards[i].classList.contains('disabled-card');
        if (disable) {
            let disableText = cards[i].querySelector('.card__underCardText');
            let additive = cards[i].querySelector('.card__title span').innerHTML;
            disableText.innerHTML = "Печалька, " + additive + " закончился";
        } else {
            let defaultText = cards[i].querySelector('.card__underCardText');
            textCard['default'] = defaultText.innerHTML;
            
            cards[i].addEventListener('click', function() {
                let itemClass = cards[i].classList;

                if (!itemClass.contains('active-card')) {
                    itemClass.add('active-card')
                    let name = cards[i].getAttribute('data-name');
                    defaultText.innerHTML = textCard[name];
                } else {
                    itemClass.remove('active-card');
                    defaultText.innerHTML = textCard['default'];
                }
        });
    }
    }
}