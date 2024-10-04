async function listarVideos(){
    const conexao = await fetch('http://localhost:4000/videos')
    const videos = await conexao.json()

    return videos
}

export const conectaApi = {
    listarVideos
}