import { createReducer, on, Action } from '@ngrx/store';
import * as StatsActions from './stats.actions';
import { UserStats } from '@shared/interfaces/interfaces';

export interface StatsState {
  stats: UserStats[];
  loaded: boolean;
  test: UserStats[];
  articles: UserStats[];
  userStats: UserStats;
  publicStats: UserStats;
  publicLoaded: boolean;
  error: string;
}

export const inititalState: StatsState = {
  stats: null,
  loaded: false,
  userStats: null,
  publicStats: null,
  publicLoaded: false,
  test: null,
  articles: null,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  // GET STATS
  on(StatsActions.get, (state) => (
    { ...state, error: null }
  )),
  on(StatsActions.getSuccess, (state, { stats }) => (
    {
      ...state,
      stats,
      loaded: true,
      test: stats.filter(s => s.score.test.done > 0)
                 .sort((a, b) => b.score.test.correct - a.score.test.correct)
                 .slice(0, 3),
      articles: stats.filter(s => s.score.articles.written > 0)
                     .sort((a, b) => b.score.articles.written - a.score.articles.written)
                     .slice(0, 5),
      error: null
    }
  )),
  on(StatsActions.getFailure, (state, { error }) => (
    { ...state, loaded: false, error }
  )),
  // GET STATS BY USER
  on(StatsActions.getByUser, (state) => (
    { ...state, error: null }
  )),
  on(StatsActions.getByUserSuccess, (state, { stats }) => (
    {
      ...state,
      userStats: stats,
      error: null
    }
  )),
  on(StatsActions.getByUserFailure, (state, { error }) => (
    { ...state, error }
  )),
  // GET STATS BY USER PUBLIC
  on(StatsActions.getByUserPublic, (state) => (
    { ...state, error: null }
  )),
  on(StatsActions.getByUserPublicSuccess, (state, { stats }) => (
    {
      ...state,
      publicStats: stats,
      publicLoaded: true,
      error: null
    }
  )),
  on(StatsActions.getByUserPublicFailure, (state, { error }) => (
    { ...state, error }
  )),
  // RESET STATS
  on(StatsActions.reset, (state) => (
    {
      ...state,
      stats: [],
      test: null,
      loaded: false
    }
  )),
  // RESET STATS PUBLIC
  on(StatsActions.resetPublic, (state) => (
    {
      ...state,
      publicStats: null,
      publicLoaded: false
    }
  ))
);

export function reducer(state: StatsState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getStats = (state: StatsState) => state.stats;
export const getStatsLoaded = (state: StatsState) => state.loaded;
export const getTest = (state: StatsState) => state.test;
export const getArticles = (state: StatsState) => state.articles;
export const getByUser = (state: StatsState) => state.userStats;
export const getByUserPublic = (state: StatsState) => state.publicStats;
export const getPublicLoaded = (state: StatsState) => state.publicLoaded;
