import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reporting",
  templateUrl: "./reporting.component.html",
  styleUrls: ["./reporting.component.css"]
})
export class ReportingComponent implements OnInit {
  showloader = true;

  constructor() {}

  ngOnInit() {}

  toggleme() {
    this.showloader = !this.showloader;
  }
}
