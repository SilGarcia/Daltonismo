// Adiciona um evento de mudança ao elemento com o id 'color-filter'
document.getElementById('color-filter').addEventListener('change', function() {
    // Obtém o valor selecionado no elemento 'color-filter' (selecionado no dropdown)
    const filterClass = this.value;

    // Seleciona todas as imagens com a classe 'filter-image'
    const images = document.querySelectorAll('.filter-image');

    // Para cada imagem selecionada...
    images.forEach(img => {
        // Remove todas as classes existentes da imagem, exceto 'filter-image'
        img.className = 'filter-image'; // Reset the class

        // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
        if (filterClass !== 'default') {
            // Adiciona a classe selecionada à imagem
            img.classList.add(filterClass);
        }
    });
});
