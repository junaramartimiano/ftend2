function menu(pagina) {
    $('#conteudo').hide(2000,()=>{
      $("#conteudo").load("../components/"+pagina+".html",()=>{
         $('#conteudo').show(2000);
      });   
    });
  }  
