console.log('App.js is running!');

// JSX - JavaScript XML
var template = <div>
                    <h1>Indecision App</h1>
                    <p>this is inforamation</p>
                    <ol>
                        <li>first item</li>
                        <li>second item</li>
                    </ol>
                </div>;

var user = {
    name:'Ashvin Jaiswal',
    age:32,
    location:'India'    
};

//conditional template
function getLocation(location){
    if(location){
        return location;
    }else{
        return 'unknown';
    }
}


var template2 = <div>
                    <h1>Name {user.name}</h1>
                    <p>Age {user.age}</p>
                    <p>Location {getLocation(user.location)}</p>  
                </div>

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
