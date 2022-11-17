
const tokes = `http:/localhost:3000/metodo`;
const toke = 'IGQVJYUHRWV0V1amdrU0QxVUdkZAkFOSnBSRXJPOG1qUmlOZAV85Qk83NXNWZAWVWZA1dTVnU2a2x0V1VEX2NWQW9QUlRtTVdBYnNpWVJMT1EzdTk4QXF3dHp3aE0xdW96T2c1NlhyY0wwMDdZAMkVMeURwdAZDZD';


const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=15&access_token=${toke}`;



fetch(url)
.then(res => res.json())
.then(data => CrearHtml(data.data))

function CrearHtml(data){
    for(const img of data){
        galery.innerHTML += `
        <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
                <p>
                    ${img.caption}
                </p>
            </a>
        </div>
        </div>
        `;
    }
}

next.addEventListener('click', moveGalery);
prev.addEventListener('click', moveGalery);

function moveGalery(e){
    if(e.target.id === 'next' || e.target.parentElement.id === 'next'){
        feed.scrollLeft += feed.offsetWidth;
    }else{
        feed.scrollLeft -= feed.offsetWidth;
    }
}