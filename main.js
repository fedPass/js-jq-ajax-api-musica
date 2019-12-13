$(document).ready(function(){
    // Eseguire una chiamata ajax all'api di boolean: https://flynn.boolean.careers/exercises/api/array/music che restituisce una lista di 10 dischi musicali.
    $.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/array/music',
        'method':'GET',
        'success':function(data){
            //visualizzo cosa mi restituisce l'api
            console.log(data);
        },
        'error':function(err){
            alert('errore:' + err.status);
        },

    });


    // Utilizzando handlebars, disegnare in pagina una card per ogni disco.
    //prendi il template
    var source = $(".cd-template").html();
    //genera una funzione per compilarla
    var template = Handlebars.compile(source);
    //recupera i dati
    // var context =
    //     {
    //         poster: ,
    //         title: ,
    //         author: ,
    //         genre: ,
    //         year:
    //     };
    //usa i dati recuperati per compilare template
    var html = template(context);


    // BONUS: aggiungere una tendina con i generi: pop, rock, metal e jazz, che permette all'utente di filtrare i dischi visualizzati in base al genere selezionato.
})
