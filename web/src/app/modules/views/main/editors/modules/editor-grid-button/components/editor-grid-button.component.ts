import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'editor-grid-button',
    templateUrl: 'editor-grid-button.component.html',
    styleUrls: ['editor-grid-button.component.css']
})
export class EditorGridButtonComponent {
  public isGridShown = true;
  public zoomFactor = 1.0;
  public zoomMin = 0.5;
  public zoomMax = 5.0;

  public showGrid(): void {
    this.isGridShown = true;
  }

  public hideGrid(): void {
    this.isGridShown = false;
  }

  public zoomIn(): void {
    let newZoomFactor = this.zoomFactor * 1.1;
    if (newZoomFactor < this.zoomMax) {
      this.zoomFactor = newZoomFactor;
    } else {
      this.zoomFactor = this.zoomMax;
    }
  }

  public zoomOut(): void {
    let newZoomFactor = this.zoomFactor / 1.1;
    if (newZoomFactor > this.zoomMin) {
      this.zoomFactor = newZoomFactor;
    } else {
      this.zoomFactor = this.zoomMin;
    }
  }

  public resetZoom(): void {
    this.zoomFactor = 1.0;
  }

  public getBackgroundSize(): string {
    return (150 * this.zoomFactor) + 'px';
  }

}
