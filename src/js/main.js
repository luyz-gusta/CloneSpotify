const criarCardArtista = (artista) => {
    const cardArtista = document.createElement('div')
    const boxImg = document.createElement('div')
    const nome = document.createElement('p')
    const imagem = document.createElement('img')
    const categoria = document.createElement('span')

    cardArtista.classList.add('card')
    imagem.src = `${artista.imagem}`
    imagem.alt = `Imagem do artista ${artista.nome}`
    boxImg.classList.add('boxImg')

    nome.textContent = artista.nome
    categoria.textContent = artista.categoria

    boxImg.append(imagem)
    cardArtista.append(boxImg, nome, categoria)

    return cardArtista
}

const carregarArtistasPopulares = () => {
    const containerCards = document.getElementById('boxArtistasPopulares')
    const artistas = artistasPopulares.map(criarCardArtista)
    containerCards.replaceChildren(...artistas)
}

const criarCardAlbum = (album) => {
    const cardAlbum = document.createElement('div')
    const nome = document.createElement('p')
    const imagem = document.createElement('img')
    const artista = document.createElement('span')

    cardAlbum.classList.add('card')
    imagem.src = `${album.imagem}`
    imagem.alt = `Imagem do album ${album.nome}`
    imagem.classList.add('img')

    nome.textContent = album.nome
    artista.textContent = album.artista

    cardAlbum.append(imagem, nome, artista)

    return cardAlbum
}

const carregarAlbunsPopulares = () => {
    const containerCards = document.getElementById('boxAlbunsPopulares')
    const albuns = albunsPopulares.map(criarCardAlbum)
    containerCards.replaceChildren(...albuns)
}

const criarCardParadaDestaque = (album) => {
    const cardParadaDestaque = document.createElement('div')
    const nome = document.createElement('p')
    const imagem = document.createElement('img')
    const descricao = document.createElement('span')

    cardParadaDestaque.classList.add('card')
    imagem.src = `${album.imagem}`
    imagem.alt = `Imagem do album para parada destaque ${album.nome}`
    imagem.classList.add('img')

    nome.textContent = album.nome
    descricao.textContent = album.descricao
    descricao.classList.add('truncated-text')

    cardParadaDestaque.append(imagem, nome, descricao)

    return cardParadaDestaque
}

const carregarParadaDestaque = () => {
    const containerCards = document.getElementById('boxParadasDestaques')
    const paradas = paradasDestaques.map(criarCardParadaDestaque)
    containerCards.replaceChildren(...paradas)
}



carregarArtistasPopulares()
carregarAlbunsPopulares()
carregarParadaDestaque()
