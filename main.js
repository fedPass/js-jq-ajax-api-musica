$(document).ready(function(){
    // Utilizzando handlebars, disegnare in pagina una card per ogni disco.
    //prendi il template
    var source = $(".cd-template").html();
    //genera una funzione per compilarla
    var template = Handlebars.compile(source);
    //recupera i dati
    var context =
        {
            poster: ,
            title: ,
            author: ,
            genre: ,
            year:
        };
    //usa i dati recuperati per compilare template
    var html = template(context);

    // Eseguire una chiamata ajax all'api di boolean: https://flynn.boolean.careers/exercises/api/array/music che restituisce una lista di 10 dischi musicali.

    // BONUS: aggiungere una tendina con i generi: pop, rock, metal e jazz, che permette all'utente di filtrare i dischi visualizzati in base al genere selezionato.
})
