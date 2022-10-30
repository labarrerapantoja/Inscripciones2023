function doGet() { 
        return HtmlService.createTemplateFromFile('inscripcionAdultos').evaluate().setTitle('Peña la barrera - Inscripción Adultos 2023');
 }

 
function traerCabecerasHTML(nombre) { 
        return HtmlService.createHtmlOutputFromFile(nombre).getContent();
 }