// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

 const electronAPI = {
  dev: (object : ICreateUserField) => ipcRenderer.invoke('auth:get-profile',object),
  read: (object : IDataBaseFieldRead) : any => ipcRenderer.invoke('auth.get-user',object)   ,
};

export default electronAPI;

process.once("loaded", () => {
  contextBridge.exposeInMainWorld('apis', electronAPI);
});
