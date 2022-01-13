import { EditorService } from './../editor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public myContent: string = '';

  constructor(
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
    this.getContent();
  }

  public saveContent(content: string): void {
    this.editorService.setContent(content);
  }

  private async getContent(): Promise<void> {
    this.myContent = await this.editorService.getContent();
  }

}
