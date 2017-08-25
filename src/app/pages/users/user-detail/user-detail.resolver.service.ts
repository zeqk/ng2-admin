import { Observable, Observer } from 'rxjs';
import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { PageInitialData } from './pageInitialData.model';
import { UsersService } from '../.';

@Injectable()
export class UserDetailResolver implements Resolve<PageInitialData> {

  constructor(private usersService: UsersService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageInitialData> {
      
    let id = +route.params['id'];

    return Observable.create((observer: Observer<PageInitialData>) => {

        if (id !== 0) {
            this.usersService.get().subscribe(
                users => {
                    let founded = users.filter(u => u.id === id);
                    if(founded.length > 0) {
                        let rv: PageInitialData = {
                            user: users.filter(u => u.id === id)[0]
                        };
                        observer.next(rv);
                    }
                    else {
                        observer.next(null);
                    }
                },
                error => observer.error(error),
                () => observer.complete()
            );
        }
        else {
            observer.next(null);
            observer.complete();
        }
    });
  }
}