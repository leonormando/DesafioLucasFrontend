import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { ChartDataSets } from 'chart.js';
import { ChartModel } from '../shared/chart.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public chart: ChartModel[] = [];
  cont1:number = 0;
  cont2:number = 0;
  cont3:number = 0;
  cont4:number = 0;
  cont5:number = 0;
private hubConnection: signalR.HubConnection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:44323/chart')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public barChartData: ChartDataSets[] = [
    { data: [null, null, null, null, null], label: 'Sensor 1' },
    { data: [null, null, null, null, null], label: 'Sensor 2' },
    { data: [null, null, null, null, null], label: 'Sensor 3' },
  ];
  public addTransferChartDataListener() {
    this.hubConnection.on('transferchartdata', (data) => {
      this.chart = data;
      //this.barChartData[0].data[0] += this.chart[0].data[0]; 
      this.barChartData[0].data = this.chart[0]?.data;
      //this.barChartData[0].label= this.chart[0].label;
      this.barChartData[1].data = this.chart[1]?.data;
      //this.barChartData[1].label= this.chart[1].label;
      this.barChartData[2].data = this.chart[2]?.data;
      //this.barChartData[2].label= this.chart[2].label;
      console.log(this.barChartData);
    });
  }
}