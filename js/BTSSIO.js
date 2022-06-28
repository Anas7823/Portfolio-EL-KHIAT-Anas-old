$(document).ready(function()
{
     console.log("Le document est prêt");
     $('i').click(function()
		{
			console.log("Le bouton a été cliqué.");
            if ($('i').val()==='cacher')
            {
            $('#masquer').fadeOut();
            $('i').val('montrer')
		}
        else
        {
            console.log("Le bontoun a été cliqué.");
            $('#masquer').show();
            $('i').val('cacher')
        }
    })
    
        console.log("La mise en place est finie. En attente d'événements...");
    
});