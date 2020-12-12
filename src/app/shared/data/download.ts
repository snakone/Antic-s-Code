import { DownloadButton } from '../interfaces/interfaces';

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/I0wkQRDQ#1Y5e5f_Mq0vmITwSEEw4JkmB48R6EU0EvgTHy5Ls0VM',
  mac: 'https://mega.nz/file/A54WmLQD#V2hiRHEwkR815rLO1SWc5dnKGUjo5sX4JcXRpiS8Ic8',
  linux: 'https://mega.nz/file/I9pARLDD#TdpsWrFYz2MrasPoUWGOJWLcLjZMLCX-1-qcuoUohiM',
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
  'DOWNLOAD.STEPS.ONE',
  'DOWNLOAD.STEPS.TWO',
  'DOWNLOAD.STEPS.THREE',
  'DOWNLOAD.STEPS.FOUR',
  'DOWNLOAD.STEPS.FIVE',
  'DOWNLOAD.STEPS.SIX',
];

