import { DownloadButton } from '../interfaces/interfaces';

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/M5h1RDiC#AHlXr1bjUrxJInW1ZKwtDbNGp-F--vRoqHjN0QZwOJo',
  mac: 'https://mega.nz/file/JopxlLJI#wq6Ny2HCoAcXvKe8udOYxEeiuj5lW-ZZDucKW9tmDM8',
  linux: 'https://mega.nz/file/44gH2bxA#5VEO5mcyqO7Ru3Mqjrq3mAAF7tx3plcE3kO27bYhFR0',
  android: 'https://mega.nz/file/Bp5HARzT#E01oeW744ZaF3cgik1NsrEuQAcovrNMXJZLGKaH2-qs',
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
];

