import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

import {
  Test,
  TestResponse,
  TestRequest,
  TestEntry,
  TestEntryResponse,
  TestResult
} from '@shared/interfaces/interfaces';

import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class TestService {

  readonly API_TEST = environment.api + 'tests/';

  constructor(private http: HttpService) { }

  public get(): Observable<Test[]> {
    return this.http
      .get<TestResponse>(this.API_TEST)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.tests)
      );
  }

  public getByCategory(category: string): Observable<Test> {
    return this.http
      .get<TestResponse>(environment.api + 'test/' + category)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.test)
      );
  }

  public getEntryByUid(uid: string): Observable<TestEntry> {
    return this.http
      .get<TestEntryResponse>(this.API_TEST + 'entries/' + uid)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.entry)
      );
  }

  public saveTestRequest(request: TestRequest): Observable<TestResult> {
    return this.http
      .post<TestEntryResponse>(this.API_TEST + 'results/', request)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.result)
      );
  }


}
