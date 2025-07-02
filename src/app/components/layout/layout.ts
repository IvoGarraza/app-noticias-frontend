import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Home } from "../../pages/home/home";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {

}
