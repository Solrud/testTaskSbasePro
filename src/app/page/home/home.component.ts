import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FileService} from '../../shared/file/file.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    style: 'display: flex; flex-direction: column; height: 100dvh;'
  }
})
export class HomeComponent {
  private readonly fileService = inject(FileService);

  openTechTask(): void {
    this.fileService.openFileInNewWindow('assets/files/techTask.pdf', 'tz');
  }
}
