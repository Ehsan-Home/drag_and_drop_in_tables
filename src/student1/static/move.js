console.log("in js file")
var dragstarttables
var name_got
var number_got
// GET 
// let Func = () => {
//     console.log("HI");
//     $.ajax({
//         url : '/ajax/submit/',
//         type : "GET",
//         data: {
//             "name" : "Ehsan",
//             "ID" :1,
//         },
//         dataType : 'json',
//         success : function(data){
//             console.log("in ajax")
//             alert("This is success")
//         },
//         error: function(xhr, status , error){
//             console.log(errorMessage)
//         }
//     });
// }

// POST 
// $('#post_form').on('submit', function(event){
//     event.preventDefault();
//     console.log("form submitted!")
//     create_post();
// });
// let create_post = () => {
//     console.log("in create post funciton")
//     $.ajax({
//         url : "/ajax/submit/",
//         type : "POST",
//         data : {
//             name : $("#id_name").val(),
//             number : $("#id_number").val(),
//         },
//         success : function(json) {
//             $("#id_name").val(''),
//             $("#id_number").val(''),
//             console.log(json),
//             console.log('success')
//         },
//         error: function(xhr,errmsg,err){
//            console.log("error :(")
//            console.log(err)
//         }
//     })
// }

function dragStart2(event)
{
    console.log("in drag table 2")
    let txt = event.path[0].innerText
    let modifiedtxt = txt.split("\n")
    name_got = modifiedtxt[0]
    number_got = modifiedtxt[1]

    console.log("name:",name_got)
    console.log("number:",number_got)
    dragstarttables = 2
}

$("#simpleList").on("drop" , function(event){
    console.log("Drop handler")
    
    //console.log(dragstarttables)
    if(dragstarttables == 2){
        console.log("in if")
        
        $.ajax({
            url : "/ajax/submit/",
            type : "POST",
            data : {
                name : name_got,
                number : number_got,
                targettable : 1,
            },
            success : function(data){
                console.log("in success")
                msg = data.src
                alert(msg)
            },
            error : function(xhr,errmsg,err){
                console.log("error :(")
                console.log(err)
                console.log(errmsg)
            }
        })
    }
})

function dragStart1(event)
{
    console.log("in drag table 1")
    let txt = event.path[0].innerText
    let modifiedtxt = txt.split("\n")
    name_got = modifiedtxt[0]
    number_got = modifiedtxt[1]

    console.log("name:",name_got)
    console.log("number:",number_got)
    dragstarttables = 1
}

$("#simpleList2").on("drop" , function(event){
    console.log("Drop handler list 2")
    
    //console.log(dragstarttables)
    if(dragstarttables == 1){
        console.log("in if")
        $.ajax({
            url : "/ajax/submit/",
            type : "POST",
            data : {
                name : name_got,
                number : number_got,
                targettable : 2,
            },
            success : function(data){
                console.log("in success")
                msg = data.src
                alert(msg)
            },
            error : function(xhr,errmsg,err){
                console.log("error :(")
                console.log(err)
            }
        })
    }
})
    


$(function() {
    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});