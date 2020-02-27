import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class Neo4jService {
    private neo4jUrl = "http://t41625.vanguard.com:7474/db/data/transaction/commit"
    private username = "neo4j"
    // I know I KNOW lets try to make this an env variable if we have time
    private pass = "random-lunch"
    private authorizationBasic = window.btoa(this.username + ':' + this.pass);
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + this.authorizationBasic
    })

    constructor(
        public http: HttpClient
    ) { }

    query(query_string: string) {
        var object = {
            "statements": [{
                "statement": query_string
            }]
        }

        const headers = { headers: this.headers }

        return this.http.post(this.neo4jUrl, object, headers).toPromise()
    }

}
