import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DesafioLucasFrontend';

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  numero1:number=0;
  numero2:number=0;
  numero3:number=0;
  numero4:number=0;
  numero5:number=0;
  public barChartData: ChartDataSets[] = [
    { data: [this.numero1, this.numero2, this.numero3, this.numero4, this.numero5], label: 'Sensor 1' },
    { data: [this.numero1, this.numero2, this.numero3, this.numero4, this.numero5], label: 'Sensor 2' },
    { data: [this.numero1, this.numero2, this.numero3, this.numero4, this.numero5], label: 'Sensor 3' },
  ];

  ngOnInit(){
    this.getNumber();
  }

  private getNumber():void{
    let retorno1:number = 0;
    let retorno2:number = 0;
    let retorno3:number = 0;
    let retorno4:number = 0;
    let retorno5:number = 0;
    
    setInterval(() => {
      //this.barChartData = [];
      retorno1 = Math.floor((Math.random() * 5) + 1);
      retorno2 = Math.floor((Math.random() * 5) + 1);
      retorno3 = Math.floor((Math.random() * 5) + 1);
      retorno4 = Math.floor((Math.random() * 5) + 1);
      retorno5 = Math.floor((Math.random() * 5) + 1);
      this.numero1 += retorno1;
      this.numero2 += retorno2;
      this.numero3 += retorno3;
      this.numero4 += retorno4;
      this.numero5 += retorno5;
      this.barChartData[0].data = [this.numero1, this.numero4, this.numero2, this.numero5, this.numero3];
      this.barChartData[1].data = [this.numero2, this.numero5, this.numero3, this.numero1, this.numero4];
      this.barChartData[2].data = [this.numero3, this.numero1, this.numero4, this.numero2, this.numero5];
      console.log(retorno1);
      }, 1000);
  }
}
