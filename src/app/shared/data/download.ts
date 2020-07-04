import { DownloadButton } from '../interfaces/interfaces';

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/k1JVQYCA#1kM_McHNND1KXbFi04F3i_diIKJs1AvCWAItmmnCmoI',
  mac: 'https://mega.nz/file/9sRzTYCQ#-W0mFuVVqY81B_MJjkv690BexZYVMUNwlXcP6orSYGo',
  linux: 'https://mega.nz/file/E4QnmYZT#W6BwCfl28vsA6E8yZeqsvg3zXIAO8N9u65LLlqTVH-s'
};

export const DOWNLOAD_BUTTONS: DownloadButton[] = [
  {
    platform: 'Windows',
    class: 'windows',
    icon: 'windows.png',
    link: DOWNLOAD_URI.windows
   },
  {
    platform: 'Mac OX',
    class: 'mac',
    icon: 'mac.png',
    link: DOWNLOAD_URI.mac
  },
  {
    platform: 'Linux',
    class: 'linux',
    icon: 'linux.png',
    link: DOWNLOAD_URI.linux
  }
];
