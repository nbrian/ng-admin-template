import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SomeModuleDetailComponent } from './some-module-detail/some-module-detail.component';
import { ConfirmationDialog } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog';

export interface PeriodicElement {
  id: string;
  fname: string;
  lname: string;
  validUntil: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 'IDN-02112', fname: 'Jenny', lname: 'Lopez', validUntil: '09/11/2021', actions: '' },
  { id: 'IDN-01201', fname: 'Michael', lname: 'Angelo', validUntil: '01/12/2023', actions: '' },
  { id: 'IDN-00011', fname: 'Carlo', lname: 'Laurenciano', validUntil: '03/26/2021', actions: '' },
  { id: 'IDN-02311', fname: 'Kristine', lname: 'Valenciano', validUntil: '12/08/2022', actions: '' },
  { id: 'IDN-19463', fname: 'Omar', lname: 'Sandeep', validUntil: '05/30/2021', actions: '' },
  { id: 'IDN-57394', fname: 'Angelica', lname: 'Zamora', validUntil: '01/01/2020', actions: '' },
  { id: 'IDN-66473', fname: 'Liza', lname: 'Garcia', validUntil: '11/01/2021', actions: '' },
  { id: 'IDN-00998', fname: 'Eric', lname: 'Elizan', validUntil: '12/05/2020', actions: '' },
  { id: 'IDN-87634', fname: 'Daniel', lname: 'Martinez', validUntil: '09/08/2020', actions: '' },
  { id: 'IDN-68469', fname: 'Catherine', lname: 'Santos', validUntil: '05/05/2021', actions: '' },
];

@Component({
  selector: 'app-some-module',
  templateUrl: './some-module.component.html',
  styleUrls: ['./some-module.component.scss']
})
export class SomeModuleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fname', 'lname', 'validUntil', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  search(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetails(obj, action) {
    this.dialog.open(SomeModuleDetailComponent, {
      width: '600px',
      height: '600px',
      disableClose: true,
      data: {obj, action}
    });
  }

  delete() {
    this.dialog.open(ConfirmationDialog, {
      width: '600px',
      disableClose: true,
      data: 'Are you sure you want to delete???'
    });
  }

}
