import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

export interface PaymentHistoryData {
  paymentId : string;
  date: Date;
  amount: number;
  notes: string;
}

const LOCS: string[] = ["777 Brockton Avenue, Abington MA 2351","30 Memorial Drive, Avon MA 2322","250 Hartford Avenue, Bellingham MA 2019","700 Oak Street, Brockton MA 2301","66-4 Parkhurst Rd, Chelmsford MA 1824","591 Memorial Dr, Chicopee MA 1020","55 Brooksby Village Way, Danvers MA 1923","137 Teaticket Hwy, East Falmouth MA 2536","42 Fairhaven Commons Way, Fairhaven MA 2719","374 William S Canning Blvd, Fall River MA 2721","121 Worcester Rd, Framingham MA 1701","677 Timpany Blvd, Gardner MA 1440","337 Russell St, Hadley MA 1035","295 Plymouth Street, Halifax MA 2338","1775 Washington St, Hanover MA 2339","777 Brockton Avenue, Abington MA 2351","30 Memorial Drive, Avon MA 2322","250 Hartford Avenue, Bellingham MA 2019","700 Oak Street, Brockton MA 2301","66-4 Parkhurst Rd, Chelmsford MA 1824","591 Memorial Dr, Chicopee MA 1020","55 Brooksby Village Way, Danvers MA 1923","137 Teaticket Hwy, East Falmouth MA 2536","42 Fairhaven Commons Way, Fairhaven MA 2719","374 William S Canning Blvd, Fall River MA 2721","121 Worcester Rd, Framingham MA 1701","677 Timpany Blvd, Gardner MA 1440","337 Russell St, Hadley MA 1035","295 Plymouth Street, Halifax MA 2338","1775 Washington St, Hanover MA 2339"];


@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  displayedColumns: string[] = ["paymentId","date","amount","notes"];
  dataSource: MatTableDataSource<PaymentHistoryData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private dataservice: DataService) { 
   
  }
  ngOnInit() {
   this.refresh();
  }

  refresh(){
    this.dataservice.getAllPayments().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}

