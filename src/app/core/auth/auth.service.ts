import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post(
        API_URL + '/users', 
        { userName, password }, 
        {observe: 'response'}
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`)
      }))
  }
}