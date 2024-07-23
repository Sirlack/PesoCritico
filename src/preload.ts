// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import {IInfoWeight} from './store/models/IInfoWeight';

 const electronAPI = {
  dev: (object : ICreateUserField) => ipcRenderer.invoke('auth:get-profile',object),
  read: (object : IDataBaseFieldRead) : any => ipcRenderer.invoke('auth.get-user',object)   ,
  setweight: (object : IInfoWeight) : any => ipcRenderer.invoke('auth.set-infoweight',object)   ,
  getWeightList: (object : String) : any => ipcRenderer.invoke('auth.get-infoweight',object)   ,
  chargeDates: () : any => ipcRenderer.invoke('auth.chargeDates')   ,
};

export default electronAPI;

process.once("loaded", () => {
  contextBridge.exposeInMainWorld('apis', electronAPI);
});
