$("img").not(".no-fullscreen").click(function()
{
    $("#id_view_image").html("<img src='"+$(this).attr('src')+"' class='view_image_img'/>");
    $("#id_view_image_body").addClass("view_image_body");
    $("#id_view_image").addClass("view_image");
});

$("#id_view_image").click(function()
{
    $("#id_view_image").html("");
    $("#id_view_image_body").removeClass("view_image_body");
    $("#id_view_image").removeClass("view_image");
});