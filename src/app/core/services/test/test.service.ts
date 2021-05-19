import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

import {
  Test,
  TestResponse,
  TestResult,
  TestEntry,
  TestEntryResponse
} from '@shared/interfaces/interfaces';

import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { filter, map } from 'rxjs/operators';
import { ServerResponse } from '../../../shared/interfaces/interfaces';

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

  public getResultByUid(uid: string): Observable<TestResult> {
    return this.http
      .get<TestEntryResponse>(this.API_TEST + 'results/' + uid)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.result)
      );
  }

  public saveTestRequest(request: TestResult): Observable<TestResult> {
    return this.http
      .post<TestEntryResponse>(this.API_TEST + 'results/', request)
      .pipe(
        filter(res => res && !!res.ok),
        map(_ => _.result)
      );
  }

  public checkDone(uid: string): Observable<boolean> {
    return this.http
    .get<ServerResponse>(this.API_TEST + 'done/' + uid)
    .pipe(map(_ => _.ok));
  }


}
