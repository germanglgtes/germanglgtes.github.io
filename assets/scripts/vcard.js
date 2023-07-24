document.querySelector("input").addEventListener("click", function () {
  var contact = {
    name: "Germán Carlos López Gargallo",
    email: "german@glgt.es",
    web: "www.glgt.es"
  };
  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nURL:" + contact.web + "\nEMAIL;TYPE=work:" + contact.email + "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  
  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;
  
  newLink.click();
});
