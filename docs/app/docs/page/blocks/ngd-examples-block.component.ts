/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-jsx.js';

@Component({
  selector: 'ngd-examples-block',
  template: `
    <p class="block-title">{{ title }}</p>
    <div class="block-container" *ngFor="let example of classData.examples">
      <p class="block-subtitle">{{example.shortDescription}}</p>
      <p ngdDescription>{{example.description}}</p>
      <ngd-code-highlighter [code]="example.code.trim()"></ngd-code-highlighter>
      <pre><code [innerHTML]="getContent(example.code)"></code></pre>
    </div>   
`,
})
export class NgdExamplesBlockComponent {
  @Input() title: any = 'Usage';
  @Input() classData: any;

  getContent(str) {
    return Prism.highlight(str.trim(), Prism.languages.jsx);
  }
}