$(document).ready(function()
{
     console.log("Le document est prêt");
     $('i').click(function()
		{
			console.log("Le bouton a été cliqué.");
            if ($('i').val()==='cacher')
            {
            $('#masquer').hide(500);
            $('i').val('montrer')
		}
        else
        {
            console.log("Le bontoun a été cliqué.");
            $('#masquer').show(500);
            $('i').val('cacher')
        }
    })
    
        console.log("La mise en place est finie. En attente d'événements...");
    
});