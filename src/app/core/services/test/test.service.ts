import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

import {
  Test,
  TestResponse,
  TestRequest,
  TestResultResponse,
  TestRequestResult,
  EntryResponse,
  TestEntry,
  TestRawResponse,
  TestRawResult
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

  public getEntriesByUser(): Observable<TestEntry[]> {
    return this.http
      .get<EntryResponse>(this.API_TEST + 'user/entry')
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.entries)
      );
  }

  public saveTestRequest(entry: TestRequest): Observable<TestRequestResult> {
    return this.http
      .post<TestResultResponse>(this.API_TEST + 'entries/', entry)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.result)
      );
  }

  public getResultByEntry(uid: string): Observable<TestRawResult> {
    return this.http
      .get<TestRawResponse>(this.API_TEST + 'entries/' + uid)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.result)
      );
  }


}
