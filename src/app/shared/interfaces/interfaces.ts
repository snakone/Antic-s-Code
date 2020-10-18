interface Content {
  _id?: string;
  title?: string;
  category?: string;
  cover?: string;
  tags?: string[];
  badges?: string[];
  likes?: number;
  stars?: number;
  links?: Link[];
  index?: Index[];
  name?: string;
  author?: string;
  message?: string;
  github?: boolean;
  githubLink?: string;
  userLiked?: boolean;
  user?: string;
  slug?: string;
}

export interface ServerResponse {
  ok: boolean;
  message?: string;
  err?: any;
}

interface Translation {
  translate: string;
}

export interface Article extends Content {
  created?: string;
  published?: string;
  level?: string;
  views?: number;
  summary?: string;
  status?: string;
}

export interface Category extends Content {
  info?: CategoryInfo;
  faq?: FAQ[];
  updated?: string;
}

export interface News {
  _id?: string;
  title: string;
  image: string;
  message: string;
  preview?: string;
  date?: string;
  category?: string;
  views?: number;
  slug?: string;
  links?: Link[];
  likes?: number;
  userLiked?: boolean;
}

export interface Inbox {
  _id?: string;
  sender?: User;
  receiver?: User;
  subject?: string;
  messages?: InboxMessage[];
  created?: string;
  last?: InboxMessage;
}

export interface InboxMessage {
  _id?: string;
  subject?: string;
  message?: string;
  sender?: User;
  receiver?: User;
  date?: string;
  read?: boolean;
}

export interface ArticleResponse extends ServerResponse {
  article?: Article;
  articles?: Article[];
  page?: number;
}

export interface CategoryResponse extends ServerResponse {
  category?: Category;
}

export interface UserResponse extends ServerResponse {
  user: User;
  users?: User[];
  token?: string;
}

export interface CountResponse extends ServerResponse {
  count?: number;
}

export interface CategoryCountResponse extends ServerResponse {
  count?: object;
}

export interface InboxResponse extends ServerResponse {
  inbox?: Inbox[];
}

export interface NewsResponse extends ServerResponse {
  news?: News[];
  viewed?: News[];
  last?: News[];
  notice?: News;
  page?: number;
}

export interface ArticlesDataResponse extends ServerResponse {
  articlesCount?: number;
  lastArticles?: Article[];
  categoryCount?: object;
  likedArticles?: Article[];
  viewedArticles?: Article[];
}

// tslint:disable-next-line:no-empty-interface
export interface SWResponse extends ServerResponse {}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  account: string;
  profile?: UserProfile;
  showEmail?: boolean;
  likes?: number;
  views?: number;
  score?: number;
}

interface UserProfile {
  avatar?: string;
  rol?: string;
  bio?: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  portfolio?: string;
  language?: string;
}

export interface Reaction {
  source: string;
  user: string;
  type: string;
  value: number;
  target?: string;
}

export interface ReactionResponse extends ServerResponse {
  reactions: Reaction[];
}

export interface Role extends Translation {
  name: string;
}

export interface DialogData {
  register?: boolean;
  author?: string;
  type?: string;
  cause?: string;
}

export interface ConfirmationData {
  message: string;
  args?: any;
}

export interface SheetData {
  message?: string;
}

export interface SearchRequest {
  value: string;
  category?: string;
  tags?: string[];
  year?: string;
  level?: string[];
  badges?: string[];
  stars?: number[];
  type?: string[];
  sort?: string;
}

export interface MessageRequest {
  name: string;
  email: string;
  text: string;
}

export interface WorkCompany {
  name: string;
  type: string;
  rank: string;
  tasks: string[];
  clients: string[];
  link: string;
  now: boolean;
}

export interface SearchResponse extends ServerResponse {
  articles?: Article[];
}

export interface Test {
  _id?: string;
  title?: string;
  category?: string;
  name?: string;
  intro?: string;
  entries?: TestEntry[];
}

export interface TestEntry {
  uid?: string;
  title?: string;
  category?: string;
  level?: string;
  message?: string;
  questions?: TestQuestion[];
  done?: boolean;
}

export interface TestQuestion {
  uid?: string;
  category?: string;
  question?: string;
  answers?: TestAnswer[];
  image?: string;
  code?: string;
}

export interface TestAnswer {
  key?: string;
  value?: string;
}

export interface TestResponse extends ServerResponse {
  tests?: Test[];
  test?: Test;
}

export interface TestEntryResponse extends ServerResponse {
  entries?: TestEntry[];
  entry?: TestEntry;
  result?: TestResult;
}

export interface TestResult {
  uid?: string;
  title?: string;
  category?: string;
  user?: string;
  level?: string;
  request?: string[];
  created?: string;
  result?: TestRawRequest;
  raw?: TestRawResult;
}

export interface TestRawRequest {
  answer?: boolean[];
  correct?: number;
}

export interface TestRawResult {
  uid?: string;
  result?: string[];
}

export interface TestAnswerResult {
  correct?: number;
  result?: boolean[];
}

export interface TestUserResult {
  question?: string;
  good?: string;
  wrong?: string;
}

export interface List {
  name: string;
  icon?: string;
  link?: string;
  category?: string;
  class?: string;
}

export interface Skill {
  name: string;
  area: string;
  message: string;
  year: number;
  icon: string;
}

export interface TagRequest {
  id: string;
  tags: string[];
}

export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  message: string;
}

export interface DownloadButton {
  platform: string;
  icon: string;
  link: string;
}

export interface UserRol {
  rol: string;
  icon: string;
  name: string;
}

export interface ShowHide {
  text: string;
  show: boolean;
}

export interface FooterList {
  title: string;
  list: FooterLink[];
}

interface FooterLink extends Translation {
  name: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MessageModalData {
  title: string;
  message: string;
  icon: string;
}

export interface CategoryInfo {
  creator?: string;
  where?: string;
  site?: string;
  age?: string;
}

export interface Index {
  title: string;
  subtitle: string;
  id: string;
}

export interface Config {
  name: string;
  selector: string;
  translate?: string;
}

export interface TotalUserData {
  name: string;
  icon: string;
}

export interface Link {
  name: string;
  url: string;
}

export class StarList {
  number: number;
  active: boolean;

  constructor(num: number, active: boolean) {
    this.number = num;
    this.active = active;
  }
}

export interface TimeLine {
  year: number;
  message: string;
  side: string;
  fade: string;
}

export interface ChatMessage {
  _id?: string;
  user: string;
  message: string;
  own?: boolean;
  avatar?: string;
  created?: string;
  date?: Date;
}

export interface ChatResponse extends ServerResponse {
  messages: ChatMessage[];
}

export class CustomError {
  name: string;
  message: string;
  status?: number;
  text: string;
  url?: string;
  author?: string;
  date?: string;
  platform?: string;

  constructor(name: string,
              message: string = 'Error',
              text: string = 'Error',
              author: string,
              status: number = null,
              url: string = '',
              platform: string = '') {
    this.name = name;
    this.message = message;
    this.status = status;
    this.text = text;
    this.url = url;
    this.author = author;
    this.platform = platform;
  }
}

export interface NotificationPayload {
  title?: string;
  body: string;
  icon?: string;
  vibrate?: number[];
  requireInteraction?: boolean;
  data?: NotificationData;
  actions: NotificationAction[];
  user?: string;
  broadcast?: boolean;
}

interface NotificationData {
  url?: string;
  data?: any;
}

interface NotificationAction {
  action: string;
  title: string;
}

export interface UserStats {
  user: User;
  score: ScoreStats;
}

export interface UserStatsResponse extends ServerResponse {
  stats: UserStats[];
  statsByUser?: UserStats;
}

export interface ArticleStats {
  written?: number;
  score?: number;
}

export interface TestStats {
  correct: number;
  done?: number;
  score?: number;
}

export interface ReactionStats {
  likes?: number;
  stars?: number;
  score?: number;
}

export interface ScoreStats {
  total?: number;
  articles?: ArticleStats;
  test?: TestStats;
  reaction?: ReactionStats;
}
