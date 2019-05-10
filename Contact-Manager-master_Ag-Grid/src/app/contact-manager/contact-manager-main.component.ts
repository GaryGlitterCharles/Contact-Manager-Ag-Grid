import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-contact-manager-main',
  templateUrl: './contact-manager-main.component.html',
  styleUrls: ['./contact-manager-main.component.scss']
})
export class ContactManagerMainComponent implements OnInit {

  constructor(private iconRegistry :MatIconRegistry,private sanitizer : DomSanitizer) { 
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'))
  }

  ngOnInit() {
  }

}
