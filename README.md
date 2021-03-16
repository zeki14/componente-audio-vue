# componente-audio-vue
crear un componente de audio y reproducirlo en vue

La versión a revisar es la de la rama 'newDevelop'. 
creo una conexión a la API de Spotify, para lo que primero me he registrado con un ClientId y un Client Secret.
archivo

con una función de javascript configuro la conexión con la APi y consigo el Token de acceso.
con otra función de javascript hago la petición GET a la canción seleccionada por ID: GET https://api.spotify.com/v1/tracks/{id}
 
 COMPONENTES VUE
 Audioplayer: es el reproductor de audio y es padre de:
    TrackToSound: componente hijo de Audioplayer.
                  recibe la url de la canción en una variable .
                  Aqui empiezan mis problemas pues no sé como llevar esa url del hijo al padre: he intentado $emit un evento pero no sé algo falla.
                  
