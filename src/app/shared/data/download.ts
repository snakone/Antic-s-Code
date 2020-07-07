import { DownloadButton } from '../interfaces/interfaces';

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/k1JVQYCA#1kM_McHNND1KXbFi04F3i_diIKJs1AvCWAItmmnCmoI',
  mac: 'https://mega.nz/file/9sRzTYCQ#-W0mFuVVqY81B_MJjkv690BexZYVMUNwlXcP6orSYGo',
  linux: 'https://mega.nz/file/E4QnmYZT#W6BwCfl28vsA6E8yZeqsvg3zXIAO8N9u65LLlqTVH-s',
  android: '',
  ios: ''
};

export const DESKTOP_DOWNLOAD_BUTTONS: DownloadButton[] = [
  {
    platform: 'Windows',
    icon: 'windows.png',
    link: DOWNLOAD_URI.windows
   },
  {
    platform: 'Mac OX',
    icon: 'mac.png',
    link: DOWNLOAD_URI.mac
  },
  {
    platform: 'Linux',
    icon: 'linux.png',
    link: DOWNLOAD_URI.linux
  }
];

export const MOBILE_DOWNLOAD_BUTTONS: DownloadButton[] = [
  {
    platform: 'Android',
    icon: 'android.png',
    link: DOWNLOAD_URI.android
   },
  {
    platform: 'IOS',
    icon: 'ios.png',
    link: DOWNLOAD_URI.ios
  }
];

export const CREATE_STEPS: string[] = [
  'download.steps.one',
  'download.steps.two',
  'download.steps.three',
  'download.steps.four',
  'download.steps.five',
];

