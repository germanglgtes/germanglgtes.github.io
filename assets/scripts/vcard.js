document.querySelector("input").addEventListener("click", function () {
  var vcard = `BEGIN:VCARD
VERSION:4.0
FN:Germán Carlos López Gargallo
URL:german@glgt.es
ORG:GLG Traducciones
EMAIL;TYPE=work:german@glgt.es
GENDER:M
KIND:individual
LOGO;TYPE=PNG:http://www.glgt.es/assets/images/glgt_logo.png
LANG;TYPE=work;PREF=1:en
LANG;TYPE=work;PREF=2:pt
LANG;TYPE=home:es
NOTE:Traductor, subtitulador y redactor EN, PT > ES
TZ:Europe/Madrid
END:VCARD`;
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = "Germán Carlos López Gargallo.vcf";
  newLink.textContent = "Germán Carlos López Gargallo";
  newLink.href = url;
  
  newLink.click();
});
