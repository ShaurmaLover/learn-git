# This is my reprisitory

My name is cat

![my photo](https://whiskerstnr.org/wp-content/uploads/2024/09/230914-0231-200x200.jpg)

<b>I'm fullstack developer.</b> <i>There is example of my js code:<i>

```javascript
$("#btn").on("click", function(){
    $.ajax('https://bored.api.lewagon.com/api/activity/', {
        dataType: 'json',
        data: {limit: 100},
        success: function(result) {
            console.log(result)
            $("#activity").html(`
                <p>accessibility: ${result.accessibility}</p>
                <p>activity: ${result.activity}</p>
                <p>price: ${result.price}</p>
                <p>type: ${result.type}</p>
                <p>key: ${result.key}</p>
                <p>participants: ${result.participants}</p>
                <p>link: "<a href="${result.link}" target="_blank">${result.link}</a>"</p>
            `)
        },
        error: function(xhr) {
            console.log(xhr.statusText)
        }
    })
})
```

This is unordered list:
<ul>
  <li><a href="https://www.instagram.com/">Instagram</a></li>
  <li><a href="https://www.youtube.com/">Youtube</a></li>
  <li><a href="https://www.facebook.com/">Facebook</a></li>
</ul>
