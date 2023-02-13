const accordion = document.getElementById('accordionTask')
let data = [
    {codigo: 0, nome: 'bell', detalhamento: 'cantor axe'},
    {codigo: 1, nome: 'durval', detalhamento: 'cantor axe2'},
    {codigo: 2, nome: 'leo santana', detalhamento: 'cantor axe pagode'},
];


function renderAccordion(){
    console.log('entrou')
    accordion.innerHTML = "";

    data.map((item) => {
        console.log(item)
        const accordionItem = document.createElement('div');
        accordionItem.setAttribute('class', 'accordion-item');

        const h2 = document.createElement('h2');
        h2.setAttribute('class', 'accordion-header');
        h2.setAttribute('id', `heading${item.codigo}`);
        accordionItem.appendChild(h2)

        const button = document.createElement('button');
        button.setAttribute('class', 'accordion-button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#collapse${item.codigo}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `collapse${item.codigo}`);
        button.innerHTML = item.nome;
        h2.appendChild(button);

        const collapse = document.createElement('div');
        collapse.setAttribute('id', `collapse${item.codigo}`);
        collapse.setAttribute('class', 'accordion-collapse collapse show');
        collapse.setAttribute('aria-labelledby', `headingOne${item.codigo}`);
        collapse.setAttribute('data-bs-parent', '#accordionTask');
        accordionItem.appendChild(collapse);

        const accordionBody = document.createElement('div');
        accordionBody.setAttribute('class', 'accordion-body');
        collapse.appendChild(accordionBody);

        const strong = document.createElement('strong');
        strong.innerHTML = item.detalhamento;
        accordionBody.appendChild(strong);

        

        accordion.appendChild(accordionItem);

    })

}

renderAccordion();