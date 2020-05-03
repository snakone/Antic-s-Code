import { Injectable} from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { CategoryResponse, Category } from '@shared/interfaces/interfaces';
import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class CategoryService {

  readonly API_CATEGORIES = environment.api + 'category/';

  constructor(private http: HttpService) { }

  public getByName(name: string): Observable<Category> {
    return this.http
      .get<CategoryResponse>(this.API_CATEGORIES + name)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.category)
      );
  }

}
