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

  readonly API_CATEGORIES = APP_CONSTANTS.END_POINT + 'categories/';

  constructor(private http: HttpService) {
    if (!environment.production) { console.log('CategoryService'); }
  }

  public getCategoryByName(name: string): Observable<CategoryResponse> {
    return this.http.get(APP_CONSTANTS.END_POINT + 'category/' + name);
  }

}
