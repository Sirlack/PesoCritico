// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

export const electronAPI = {
  dev: () => ipcRenderer.invoke('auth:get-profile'),
  logOut: () => ipcRenderer.send('auth:log-out'),
  getPrivateData: () => ipcRenderer.invoke('api:get-private-data'),
};

process.once("loaded", () => {
  contextBridge.exposeInMainWorld('apis', {dev: ( object : any) => ipcRenderer.invoke('auth:get-profile', object )});
});
