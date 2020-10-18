import { NotificationPayload } from '../interfaces/interfaces';

export const WELCOME_PUSH: NotificationPayload = {
  body: 'Bienvenido/a',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: 'Gracias por visitarnos' }
  ],
  broadcast: false
};

export const NEW_USER_PUSH: NotificationPayload = {
  body: 'Nuevo Usuario Registrado',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: 'Aceptar' }
  ],
  broadcast: true
};

export const LIKE_PUSH: NotificationPayload = {
  body: 'Nuevo Like en tu Artículo',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: '¡Genial!' }
  ],
  data: {},
  broadcast: false
};

export const LIKE_NEWS_PUSH: NotificationPayload = {
  body: 'Nuevo Like en una Noticia',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: '¡Genial!' }
  ],
  data: {},
  broadcast: false
};

export const STAR_PUSH: NotificationPayload = {
  body: 'Nueva Puntuación en tu Artículo',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: '¡Genial!' }
  ],
  data: {},
  broadcast: false
};

