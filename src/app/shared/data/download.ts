import { DownloadButton } from '../interfaces/interfaces';

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/pkQ1zSDJ#eJk8D757ywpdntiY2db-vcSunpRPKIgKhJQnjxDLhTE',
  mac: 'https://mega.nz/file/UhZXBKhB#6d9hjOYuAaYeUA-d4DEtU_1kYS-Sk6i1z0l-zERFcFE',
  linux: 'https://mega.nz/file/FhRXwQSb#ohQIKfrylf5i-20wJwt-ric5vSxOUKRE46IYZfo1Qjo',
  android: 'https://mega.nz/file/F0IjGQZQ#sRfmt_vm1O0WisYvaZCWfZmpUjFbfTPeM4mWrcdaUfU',
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
  'DOWNLOAD.STEPS.ONE',
  'DOWNLOAD.STEPS.TWO',
  'DOWNLOAD.STEPS.THREE',
  'DOWNLOAD.STEPS.FOUR',
  'DOWNLOAD.STEPS.FIVE',
  'DOWNLOAD.STEPS.SIX',
];

