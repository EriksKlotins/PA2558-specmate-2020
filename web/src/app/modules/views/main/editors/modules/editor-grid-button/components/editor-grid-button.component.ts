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

  public zoomMax=3.0;
  public zoomMin=0.7;

  public showGrid(): void {
    this.isGridShown = true;
  }

  public hideGrid(): void {
    this.isGridShown = false;
  }

  public zoomIn(): void {
    
    this.zoomMax=this.zoomFactor*1.1;

    if(this.zoomMax<=3)
    {
      this.zoomFactor=this.zoomMax;
    }
  }

  public zoomOut(): void {
    this.zoomMin = this.zoomFactor / 1.1;

    if(this.zoomMin>=0.7)
    {
      this.zoomFactor=this.zoomMin;
    }
  }

  public resetZoom(): void {
    this.zoomFactor = 1.0;
  }

  public getBackgroundSize(): string {
    return (150 * this.zoomFactor) + 'px';
  }

}
