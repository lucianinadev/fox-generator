let totalImagenes = 0
let totalImagenesCargadas = 0

const loadImage = (entry) =>{
    const container = entry.target
    container.className = "p-4";
    const nodo = container.firstChild
    const url = nodo.dataset.src
    nodo.className = "mx-auto rounded bg-gray-300";
    nodo.src = url
    observer.unobserve(container)
    totalImagenesCargadas += 1;
    printLog();
}


const isIntersecting = (entry) =>{
    return entry.isIntersecting
}


const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})


export const registerImage = (imagen) => {
    observer.observe(imagen)
    totalImagenes += 1;
    printLog();
}
function printLog(){
    console.log(`* Imagenes cargadas: ${totalImagenesCargadas}`)
    console.log(`* Imagen fue creada: ${totalImagenes}
-------------------------------------`)
};