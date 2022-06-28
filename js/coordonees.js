$(document).ready(function()
{
     console.log("Le document est prêt");
     $('.btn-toolbox').click(function()
		{
			console.log("Le bouton a été cliqué.");
            if ($('.btn-toolbox').val()==='cacher')
            {
            $('#masquer').fadeOut();
            $('.btn-toolbox').val('montrer')
		}
        else
        {
            console.log("Le bontoun a été cliqué.");
            $('#masquer').show();
            $('.btn-toolbox').val('cacher')
        }
    })
    
    console.log("La mise en place est finie. En attente d'événements...");
    
});