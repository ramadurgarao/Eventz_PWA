import { Component, OnInit, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import * as $ from 'jquery';
import { ViewChild } from '@angular/core';
import 'slick-carousel';
@Component({
    selector: 'app-comment-gallary',
    styleUrls: ['./comments-carousel.component.css'],
    templateUrl: './comments-carousel.component.html'
})
export class AppComponentGallaryComponent implements OnInit {
    @ViewChild('main')
    rootEle: ElementRef;

    ngOnInit() {
        // noop
    }
    ngAfterContentInit() {
        const ele: any = $(this.rootEle.nativeElement);
        ele.slick();
    }

    /*
    ngAfterViewInit() {
        // console.log(' comments elements length is ' + this.comments.length);
        // setInterval(() => {
        //     this.runCarousel();
        // }, 10000);
    }
    runCarousel() {
        this.currentIndex = ++this.currentIndex % this.comments.length;
        this.comments.forEach((ele, index) => {
            if (ele.nativeElement.classList.contains('current')) {
                ele.nativeElement.classList.remove('current');
                ele.nativeElement.classList.add('prev');
            } else if (ele.nativeElement.classList.contains('next')) {
                ele.nativeElement.classList.remove('next');
                ele.nativeElement.classList.add('current');
            } else {
                // noop
            }
        });
        const nextEleIndex = (this.currentIndex + 1) % this.comments.length;
        let prevEleIndex = this.currentIndex - 1;
        prevEleIndex = prevEleIndex < 0 ? (this.comments.length - 1) : prevEleIndex;
        setTimeout(() => {
            this.comments.forEach((ele, index) => {
                if (index !== this.currentIndex && index !== prevEleIndex && index !== nextEleIndex) {
                    ele.nativeElement.classList.remove('active');
                }
                if (ele.nativeElement.classList.contains('current') && index !== this.currentIndex) {
                    ele.nativeElement.classList.remove('current');
                } else if (ele.nativeElement.classList.contains('next') && index !== nextEleIndex) {
                    ele.nativeElement.classList.remove('next');
                } else if (ele.nativeElement.classList.contains('prev') && index !== prevEleIndex) {
                    ele.nativeElement.classList.remove('prev');
                } else if (!ele.nativeElement.classList.contains('next') && index === nextEleIndex) {
                    ele.nativeElement.classList.add('next');
                    ele.nativeElement.classList.add('active');
                } else {
                    // noop
                }

            });
        }, 2000);
    } */
}
