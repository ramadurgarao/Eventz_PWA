import { Component, OnInit, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import * as $ from 'jquery';
import { ViewChild } from '@angular/core';
import 'slick-carousel';
@Component({
    selector: 'app-image-gallery',
    styleUrls: ['./gallery-carousel.component.css'],
    templateUrl: './gallery-carousel.component.html'
})
export class AppImageGallaryComponent implements OnInit {
    @ViewChild('main')
    rootEle: ElementRef;

    ngOnInit() {
        // noop
    }
    ngAfterContentInit() {
        const ele: any = $(this.rootEle.nativeElement);
        ele.slick();
    }
}
