//Documento JavaScript para criação de novas receitas
$(document).ready(function () {
    //Evento: Adicionar mais fotos;
    var $add_imagens = $("#add_imagens");
    $add_imagens.click(function () {
        console.log("Foi acionado o botão add_imagens");
        $("#imagens").append("<div class=\"row mb-3\">\n" +
            "                                        <div class=\"col-md-3\">\n" +
            "                                            <label for=\"file\">Imagem para upload:</label>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"col-md-5\">\n" +
            "                                            <input id=\"file\" type=\"file\" name=\"file\">\n" +
            "                                        </div>\n" +
            "                                    </div>")
    })

    //Evento: Adicionar mais ingredientes;
    var $add_ingre = $("#add_ingredientes");
    $add_ingre.click(function () {
        console.log("Foi acionado o botão add_ingredientes");
        $("#ingredientes").append("<div class=\"row mb-3\">\n" +
            "                       <div class=\"col-md-3\">\n" +
            "                           <label for=\"ingrediente\">Nome Ingrediente:</label>\n" +
            "                       </div>\n" +
            "                       <div class=\"col-md-5\">\n" +
            "                           <input type=\"text\" name=\"Ingrediente\" placeholder=\"Nome Ingrediente\" title=\"Ingrediente\" required/>\n" +
            "                       </div>\n" +
            "                      </div>" +
            "                       <div id=\"ingredientes\">\n" +
            "                               <div class=\"row mb-3\">\n" +
            "                                   <div class=\"col-md-3\">\n" +
            "                                       <label for=\"qtd_ingrediente\">Quantidade:</label>\n" +
            "                                   </div>\n" +
            "                                   <div class=\"col-md-5\">\n" +
            "                                       <input type=\"text\" name=\"Qtd_Ingrediente\" placeholder=\"Quantidade\" title=\"Qtd_ingrediente\" required/>\n" +
            "                                   </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row mb-3\">\n" +
            "                                   <div class=\"col-md-3\">\n" +
            "                                       <label for=\"unidade\">Unidade:</label>\n" +
            "                                   </div>\n" +
            "                                   <div class=\"col-md-5\">\n" +
            "                                       <input type=\"text\" name=\"Unidade\" placeholder=\"Unidade\" title=\"Unidade\" required/>\n" +
            "                                   </div>\n" +
            "                                </div>\n" +
            "                           </div>")
    })
});
