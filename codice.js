/*
Coloro che pensano di essere abbastanza folli da pensare di poter cambiare il mondo lo cambiano davvero. - Steve Jobs
*/
var torrentkenflag=0;

	/*serve per verificare se è gia stata fatta una ricerca(se il form contiene parole) e quindi se invocare la funzione dei siti vergini o se copiare dal form e fare la ricerca nel nuovo sito*/
function cambiaSitoAttivo(sito){
	aprichiudi(sito);
	searchQuery("iframe-"+sito,document.getElementById('search-input').value)
}
function aprichiudi(sito) {
	if(sito=='torrentken' && torrentkenflag==0&&true==confirm("Apriremo una pagina per 5 secondi per poter far andare a buon fine la ricerca: \n va bene?")){
	    var wnd = window.open("https://www.torrentken.com");
	    setTimeout(function() {
	      wnd.close();
	    }, 5000);
	    torrentkenflag=1;
    	return false;
	}
};

/*Serve per far attivare l'invio dei dati quando si preme invio dal form*/
function press(){
searchQuery(document.getElementById('iframe-content').innerHTML,document.getElementById('search-input').value)
	}
/*CREA LA QUERY DEL SITO E LA METTE NELL'IFRAME*/
function searchQuery(iframecontent, query){
	
	query=encodeURIComponent(query);
	
	if(iframecontent.indexOf('iframe-ilcorsaronero')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-ilcorsaronero' src='https://ilcorsaronero.info/argh.php?search="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-ilcorsaronero' src='https://ilcorsaronero.info/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}
	}
	if(iframecontent.indexOf("iframe-limetorrent")>-1){
		if(query!=""){
			var testo="<iframe id='iframe-limetorrent' src='https://limetorrents24.top/search.php?q="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-limetorrent' src='https://limetorrents24.top/'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}
	}
	if(iframecontent.indexOf('iframe-thepiratebay')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-thepiratebay' src='https://thepiratebay3.org/index.php?q="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-thepiratebay' src='https://thepiratebay3.org/'>";
			document.getElementById('iframe-content').innerHTML=testo;
		}
	}
	if(iframecontent.indexOf('iframe-kickasstorrents')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-kickasstorrents' src='http://kickasstorrents.to/usearch/"+query+"/'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-kickasstorrents' src='http://kickasstorrents.to/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-extratorrent')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-extratorrent' src='https://extratorrent.si/search/?search="+query+"/'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-extratorrent' src='https://extratorrent.si/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-bt-scene')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-bt-scene' src='https://bt-scene.cc/results_.php?q="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-bt-scene' src='https://bt-scene.cc/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-seedpeer')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-seedpeer' src='https://www.seedpeer.eu/search/"+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-seedpeer' src='https://www.seedpeer.eu/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-skytorrents')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-skytorrents' src='https://www.skytorrents.lol/?query="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-skytorrents' src='https://www.skytorrents.lol/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-worldwidetorrents')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-worldwidetorrents' src='https://worldwidetorrents.me/torrents-search.php?search="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-worldwidetorrents' src='https://worldwidetorrents.me/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-torrentdownloads')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-torrentdownloads' src='https://torrentdownloads.unblockall.org/search/?search="+query+"'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-torrentdownloads' src='https://torrentdownloads.unblockall.org/'>"
			document.getElementById('iframe-content').innerHTML=testo;
		}	
	}
	if(iframecontent.indexOf('iframe-torrentken')>-1){
		if(query!=""){
			var testo="<iframe id='iframe-torrentken' src='https://torrentken.com/usearch/"+query+"/'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}else{
			var testo="<iframe id='iframe-torrentken' src='https://torrentken.com/'>";
			document.getElementById("iframe-content").innerHTML=testo;
		}
	}
}