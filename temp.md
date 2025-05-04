this is for notes, and bug fixing:

# getApiLink() -inifinite loop bug
-just calling getApiLink("ditto") caises an infinite loop
-everything is being ran first, and then when the api starts to get called it's an infinite loop
-the way the order is 1. all the js and items within app.jsx. Then it goes to each component,
and then finally it runs the async function but that does it in order. So it kinda unlcoks the ability to
call everything again and you get the async funciton. 
    -maybe the issue is in not waiting to do the next thing, like i need an await for the top most function
    -another possible elad is that i don't understand async and await. I might have to refactor it because
    allegeldy await is suppose to replace the .then feature. Or maybe not, maybe I already know how to use it
await fetch(url, {mode: 'cors'})
//so allegeldy this return a promise. then i json it right?
//and then cuz response just a promise i think
-and maybe that's how i access the info

## Odin Discord
-Got a response one day later,
    -Use effect is a soluation to fix this problem
    -also they suggested to use Promises.all so it triggers once to get all the api links

-am I having issues because there's no clean up function? Like a funciton that sets the current 
all pokemon to itself so it can be referenced, becuase it seems like the next render is based on the first 
snapshot where everything is empty
-I think it's a renderering issue. the const X in Y is similar to just multiple functional calls based
on changing data. That's why i think it's not updating properly, maybe that's why we need a clean up function
    -^the issue is that there's no await because it would run before the data is fetched.
    Maybe I actually do need to do a promises.all

-next job
-Look at updater function for objects that are within objects

--access the for pokemon in AllPokemon means i'm accessing the property not the object in pokemon.
-But it returns as a string not an object which is strange. i think that's why we might have to do promise all


-I got an infinite loop issue when setting a new pokemon
-I am able to have an array of objects instead of prop of properties, which made it difficult to oranigize