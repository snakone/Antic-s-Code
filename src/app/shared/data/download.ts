import { DownloadButton } from '../interfaces/interfaces';

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/koh20bQT#nB84yHZXzWlNZYu6_GLYm9DMiKvezc3LvFVKgrAKaH0',
  mac: 'https://mega.nz/file/RgpwWJjA#9Nm9ICa737vmhEao-Bnhr42vPfXsJ_JFGq-ITE4JloE',
  linux: 'https://mega.nz/file/c5wSlRBJ#gQP6Cdx2HlkPY_BycmRbTdPLWw3KbtjhYYOZ-Zoz6OA',
  android: 'https://play.google.com/store/apps/details?id=io.antics.mobile.com',
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

export const CREATE_STEPS_MOBILE: string[] = [
  'DOWNLOAD.STEPS.ONE',
  'DOWNLOAD.STEPS.TWO',
  'DOWNLOAD.STEPS.FOUR',
  'DOWNLOAD.STEPS.FIVE',
  'DOWNLOAD.STEPS.SIX',
];

