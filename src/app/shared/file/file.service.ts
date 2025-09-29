import { Injectable } from '@angular/core';

// Сервис для открытия какого-либо файла
@Injectable({
  providedIn: 'root'
})
export class FileService {
  openFileInNewWindow(url: string, tabName = "_blank"): void {
    window.open(url, tabName)
  }
}
