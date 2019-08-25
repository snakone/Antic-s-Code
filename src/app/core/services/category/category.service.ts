import { Injectable} from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { CategoryResponse } from '@app/shared/interfaces/interfaces';

@Injectable()

export class CategoryService {

  readonly API_CATEGORIES = APP_CONSTANTS.END_POINT + 'categories';

  constructor(private http: HttpService) {
    console.log('CategoryService');
  }

  public getCategories(): Observable<CategoryResponse> {
    console.log('API');
    return this.http.get(this.API_CATEGORIES);
  }

}
