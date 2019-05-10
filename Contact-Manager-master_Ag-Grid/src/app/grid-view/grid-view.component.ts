import { Component, OnInit, ViewChild } from '@angular/core';
import { GridServiceService } from '../grid-service.service';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  private gridApi;
  private gridColumnApi;
  rowData: any;
  defaultColDef;
  columnDefs;
  show = false;
  private sideBar;
   statusBar;
  constructor(private http: HttpClient, private service: GridServiceService) {

  }
  ngOnInit() {

    this.columnDefs = [
      { headerName: 'ID', field: 'id', checkboxSelection: true, type: 'nonEditableColumn',rowDrag: true },
      { headerName: 'Code', field: 'customerCode'  },
      { headerName: 'Name', field: 'customerName' },
      { headerName: 'Email', field: 'customerEmail' },
      { headerName: 'Pincode', field: 'customerPinCode' },
      { headerName: 'Country', field: 'customerCountry' },
      { headerName: 'Gender', field: 'gender' },
      { headerName: 'Phone', field: 'contactNumber' }

    ];

    this.rowData = this.service.viewData();

    this.defaultColDef = {
      sortable: true,
       filter: true, 
       editable: true,resizable: true,
      
    }
    this.statusBar = {
      statusPanels: [
        {
          statusPanel: "agTotalRowCountComponent",
          align: "left"
        },
        { statusPanel: "agFilteredRowCountComponent" },
        { statusPanel: "agSelectedRowCountComponent" },
        { statusPanel: "agAggregationComponent" }
      ]
    };
    
  }

  showAthlete(show) {

    this.show = !this.show;
    this.gridColumnApi.setColumnVisible("customerCode", show);


  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
  }
  goToFirstPage(){
    this.agGrid.gridOptions.api.paginationGoToFirstPage();
  }
  goToLastPage(){
    this.agGrid.gridOptions.api.paginationGoToLastPage();
  }
  setGroupHeaderHeight() {
    
    //setIdText("groupHeaderHeight", 60);
  }
}
