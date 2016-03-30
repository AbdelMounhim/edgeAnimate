

// closure 

function affFiche(s) 
{
	return function() {
		sym.getComposition().getStage().afficheFiche(s) ; 
	}
}	
var remplis = function(data)
{
			for (var i = 0; i<7 ; i++)
			{
				sym.$("#Stage_bt-s"+i).click(affFiche("s"+i)) ;  // on passe par 1 closure pour éviter i=7
			}
}
