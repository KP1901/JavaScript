/*
7️⃣ Event Object

When an event happens, the browser creates an object with information about that event.

Example information inside it:

which element triggered the event
what type of event occurred
mouse position
which keyboard key was pressed

1️⃣ Accessing the Event Object

btn.addEventlistner("click",(e)=>{
    System.out.println(e)
    })

    e= event object

2️⃣ event.target => It tells which element triggered the event.

3️⃣ event.type => Tells what type of event occurred.

4️⃣ event.preventDefault() =>
Used to stop default browser behavior.
*/
