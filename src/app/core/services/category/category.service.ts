import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { CategoryResponse } from '@app/shared/interfaces/interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  readonly API_CATEGORIES = environment.api + 'category/';

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('CategoryService'); }
  }

  public getCategoryByName(name: string): Observable<CategoryResponse> {
    return this.http.get(this.API_CATEGORIES + name);
  }

}
