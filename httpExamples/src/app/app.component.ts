import { Component } from '@angular/core';
import { Http, URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pp 420 in the book
apiRoot: string = "http://httpbin.org"; 
constructor(private http: Http) { } 
doGET() {
console.log("GET");

let url = `${this.apiRoot}/get`;
// res.text() is whatever was returned in the body of the HTTP response from the server.
this.http.get(url).subscribe(res => console.log(res.text()));

// To convert the JSON formatted string into an object we just call res.json() instead of res.text(),
this.http.get(url).subscribe(res => console.log(res.json()));

/* We can pass to the get function a set of optional query parameters as the second argument.
This is in the format of an object like structure but to help in creating our query params object we
can use the helper URLSearchParams class like so: */
let search = new URLSearchParams();
search.set('foo', 'moo');
search.set('limit', '25');
this.http.get(url, {search: search}).subscribe(res => console.log(res.json()));

/* We can take advantage of destructuring in ES6. If you remember if the key and value of an object
are the same name then you can shorten {search: search} into just { search }, like so:*/
let search2 = new URLSearchParams();
search.set('foo', 'moo');
search.set('limit', '25');
this.http.get(url, {search}).subscribe(res => console.log(res.json()));
}

/*  The format of the post function is similar to get but when we do a POST request we usually want to
pass in data as well.
    So the second parameter to post is not a set of query parameters but instead an object which will be
passed as the payload for the request, like so: */
doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));

    /*  If we wanted to post to the url but add query params we can do the same as we did with get but we
    pass the query params in the third param instead, like so: */
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.post(url, {moo:"foo",goo:"loo"}, {search}).subscribe(res =>
     console.log(res.json()));

}
doPUT() {
console.log("PUT");
}
doDELETE() {
console.log("DELETE");
}
doGETAsPromise() {
console.log("GET AS PROMISE");
}
doGETAsPromiseError() {
console.log("GET AS PROMISE ERROR");
}
doGETAsObservableError() {
console.log("GET AS OBSERVABLE ERROR");
}
doGETWithHeaders() {
console.log("GET WITH HEADERS");
}
}
