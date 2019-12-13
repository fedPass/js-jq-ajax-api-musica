$(document).ready(function(){
    // Eseguire una chiamata ajax
    $.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/array/music',
        'method':'GET',
        'success':function(data){
            //recupera i dati
            //data è un array con 10 ogg dentro che rappr i cd
            console.log(data.response);
            var dischi = data.response;
            //prendi il template
            var source = $("#cd-template").html();
            var template = Handlebars.compile(source);
            //per recuperare i singoli dati faccio un ciclo for sull'array
            for (var i = 0; i < dischi.length; i++) {
                //per ogni cd recupero le info
                var context =
                    {
                        cover: dischi[i].poster,
                        album: dischi[i].title,
                        singer: dischi[i].author,
                        genere: dischi[i].genre,
                        exit: dischi[i].year
                    };
                //usa i dati recuperati per compilare template
                var html = template(context);
                //inseriscilo nel container
                $('.container.cd_display').append(html);
            }
        },
        'error':function(err){
            alert('errore:' + err.status);
        },
    });

    // Utilizzando handlebars, disegnare in pagina una card per ogni disco.



    // BONUS: aggiungere una tendina con i generi: pop, rock, metal e jazz, che permette all'utente di filtrare i dischi visualizzati in base al genere selezionato.
})
